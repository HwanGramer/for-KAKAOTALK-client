import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import './ChatPage.css';


function PrivateChatPage({socket}) {
    const {receiver} = useParams(); //? receiver유저에게 챗을 보내야됨.

    const [chatMsg , setChatMsg] = useState('');
    const [sendUserInfo , setSendUserInfo] = useState({});

//* ------------------------------------------------------------------------------------------ 
    useEffect(()=>{ //? 로그인되지 않았거나 채팅할 유저가 일치하지않으면 브라우저는 닫힘
        axios.post('/api/user/check' , {userId : receiver}).then((result)=>{
            if(!result.data.suc){alert(result.data.msg); return window.close();} //? 유저가 없으면 강제종료 
            setSendUserInfo({...result.data.data}); //? 챗 상대 유저정보 담아줌

            axios.post('/api/chat/makePrivateChat').then(()=>{
                
            })
            // socket.emit('MakePrivateChat' , result.data.data.user_id , );
        })
    },[])
//* ------------------------------------------------------------------------------------------


//* ------------------------------------------------------------------------------------------

    const SendChat = ()=>{
        console.log(chatMsg);
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


        <div className='chatRoomBody'>

        </div>


        <div className='chatFooter'>

            <textarea value={chatMsg} onChange={(e)=>{setChatMsg(e.target.value)}}>
                
            </textarea>

            <div className='ChatsendBtn' onClick={SendChat}>
                전송
            </div>

        </div>

    </div>
  )
}

export default PrivateChatPage
