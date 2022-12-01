import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ChatPage.css';
function ChatPage({userInfo , socket}) {

  const [chatRoomList , setChatRoomList] = useState([]);

  useEffect(()=>{
    //? 나와 채팅하고있는사람의 채팅리스트 불러오기. 즉 채팅 룸리스트임
    axios.get(`/api/chat/roomList`).then((result)=>{
      if(!result.data.suc) return alert(result.data.msg);
      setChatRoomList(result.data.roomList);
    })

    //? 라스트 메시지를 클라이언트에서 바꿔보자 myId는 보낸쪽 아이디
    socket.on('onLastMsg' , ()=>{
      axios.get(`/api/chat/roomList`).then((result)=>{
        if(!result.data.suc) return alert(result.data.msg);
        setChatRoomList(result.data.roomList);
      })
    })


  },[])

  useEffect(()=>{
    // console.log(chatRoomList);
    //? 만약 라스트 메시지가 내가보낸 메시지라면 띄울필요가없다. 그것은  chatRoomList에서 sender를 이용하여 내가 보낸메시지는 알람이 뜨지 않게 해야된다.
  },[chatRoomList])

//* -----------------------------------------------------------------------------------------------

  const ChatOpen = (targetId)=>{
    window.open(`/chatRoom/${targetId}/${userInfo.user_id}`, '' , ''); //? 채팅창 열기
  }

//* -----------------------------------------------------------------------------------------------

  return (
    <div>
        <div className='MainPageHeader'>
            <div className='MainPageHeaderName'>
                채팅
            </div>

            <div className='MainPageHeaderMenu'>
                <img src='/img/clickedloupe.png'></img>
                <img style={{marginBottom:'1px' }} src='/img/clickAddchat.png'></img>
            </div>
        </div>


        <div className='ChatPageBody'>
          {chatRoomList.map((el , i)=>{
            return(
              <div onClick={()=>{ChatOpen(el.user_id)}} key={i} className='ChatListElement'>
                <img src={el.user_img}></img>
                <div className='chatNameAndChat'> 
                  <div >{el.user_name}</div>
                  <div className='chatRoomChatMsg'>{el.last_msg}</div>
                </div>

                {/* 이게 채팅방 알람인데 안본상태가 1이다. 그리고 내쪽에서도 뜨기때문에 sender(보낸사람id)와 달라야지 보낸상대에게만 알람이간다. */}
                {el.sender !== userInfo.user_id && (el.saw_chat === '1' &&  <div className='newMsgAlarm'></div>)}
              </div>
            )
          })}

        </div>


        
    </div>
  )
}

export default ChatPage
