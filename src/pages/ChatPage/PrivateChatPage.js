import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import './ChatPage.css';

function PrivateChatPage({socket}) {
    const {receiver , myId} = useParams(); //? receiver유저에게 챗을 보내야됨.

    const [chatMsg , setChatMsg] = useState('');
    const [sendUserInfo , setSendUserInfo] = useState({});
    const [receiverSocketId , setReceiverSocketId] = useState(''); //? 상대방의 소켓 아이디임..

    const [chatList , setChatList] = useState([]);

//* ------------------------------------------------------------------------------------------ 
    useEffect(()=>{ //? 로그인되지 않았거나 채팅할 유저가 일치하지않으면 브라우저는 닫힘
        axios.post('/api/user/check' , {userId : receiver}).then((result)=>{
            if(!result.data.suc){alert(result.data.msg); return window.close();} //? 유저가 없으면 강제종료 
            setSendUserInfo({...result.data.data}); //? 챗 상대 유저정보 담아줌

            //? 소켓통신으로 상대방아이디와 내 아이디와 내 소켓을 보내야됨. 이렇게 하면 DB에 chat_room이 만들어짐. 이렇게 해야 새로고침해도 안끊기게 할 수 있는거 같긴함.
            socket.emit('MakePrivateChat' , {receiverId : result.data.data.user_id , myId});
        })

        // axios.get(`/api/chat?myId=${myId}&receiver=${receiver}`).then(()=>{
        //     console.log('챗리스트');
        // })
        axios.get(`/api/chat/chatList?myId=${myId}&receiver=${receiver}`).then((result)=>{
            if(!result.data.suc){alert(result.data.msg); return window.close();}
            setChatList(result.data.chatList);
        })


                //* 소켓설정 
        //* 상대방의 소켓아이디 업데이트 (상대방이 나와의 채팅을 들어오면 DB에 상대방의 소켓ID가 업데이트되면서 새로고침해서 계속 연결이 유지될 수 있음).
        socket.on('chatSocketUpdate', (data)=>{ //? 여기서 receiver는 메세지받는사람의 id인데 그사람의 소켓id를 따로 State로 보관해주자.
            if(data.member_A_id === receiver) setReceiverSocketId(data.member_A_socket);
            else setReceiverSocketId(data.member_B_socket);
        })

        //* receiverSocketId클라이언트가 나에게 보내는 메시지를 받는 이벤트
        socket.on('chatMsg' , (data)=>{
            setChatList(chatList => [...chatList , data]);
            //? 메세지 받는거까지 성공
        })

    },[])
//* ------------------------------------------------------------------------------------------

    useEffect(()=>{ //? 챗리스트가 업뎃되면 스크롤 내려감.
        window.scrollTo(0,document.body.scrollHeight); //? 채팅치면 무조건 스크롤은 아래로 내려간다. 
    },[chatList])



//* ------------------------------------------------------------------------------------------

    const SendChat = ()=>{ //* 채팅을 보내는 순간 DB에도 채팅이 저장됨. 그리고 계속 최신화가 됨.
        socket.emit('chatMsg' , chatMsg , receiverSocketId , myId , receiver, (err)=>{
            if(err) return alert('채팅메세지를 저장하지 못했습니다');
            //? 성공시 챗리스트 최신화
            setChatList(chatList => [...chatList , {myId,chatMsg}]);
            setChatMsg('');
        })
        //? 해야할일 오늘 한게 기억이 안나더라도  receiverSocketId이 소켓아이디임. receiverSocketId 여기다가 메세지보내는거 하자 
        //? socket.emit(receiverSocketId) socket.on('msg') 
    }

//* ------------------------------------------------------------------------------------------

//* ------------------------------------------------------------------------------------------
    const ChatEnter = (e)=>{ //? 채팅창에서 엔터누르면 전송됨.
        if(e.key === 'Enter') SendChat();
    }
//* ------------------------------------------------------------------------------------------

    
  return (
    <div className='ChatRoomContainer'>

        <div className='chatRoomHeader'>
            {/* 프사 */}
            <img src={sendUserInfo.user_img===null ? '/img/UserDefaultImg.png' : sendUserInfo.user_img}></img>
            {/* 이름 */}
            <div className='chatRoomName'>{sendUserInfo.user_name}</div>
        </div>

    <div style={{'background' : '#bcd1dc' , height:'90vh' , width:'100vw'}}>
        <div className='chatRoomBody'>
            <div className='chatBox'>
            {
                chatList.map((el , i)=>{
                    return(
                        el.myId === myId ? 
                        <div className='rightChatBox'> <div className='chatMsgbox' key={i}>{el.chatMsg}</div> </div>
                        :<div className='leftChatBox'> <div className='chatMsgbox2'>{el.chatMsg}</div> </div>
                    )
                })
            }
            </div>
        </div>
    </div>

        <div className='chatFooter'>

            <textarea onKeyPress={ChatEnter} value={chatMsg} onChange={(e)=>{setChatMsg(e.target.value)}}>
                
            </textarea>

            <div className='ChatsendBtn' onClick={SendChat}>
                전송
            </div>

        </div>

    </div>
  )
}

export default PrivateChatPage
