import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ChatPage.css';
function ChatPage({userInfo}) {

  const [chatRoomList , setChatRoomList] = useState([]);

  useEffect(()=>{
    //? 나와 채팅하고있는사람의 채팅리스트 불러오기. 즉 채팅 룸리스트임
    axios.get(`/api/chat/roomList`).then((result)=>{
      if(!result.data.suc) return alert(result.data.msg);
      setChatRoomList(result.data.roomList);
    })

  },[])

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
              el.member_A_id === userInfo.user_id ?             
              <div key={i} className='ChatListElement'>
                <img src='/img/UserDefaultImg.png'></img>
                <div className='chatNameAndChat'> 
                  <div >{el.member_B_id}</div>
                  <div className='chatRoomChatMsg'>{el.last_msg}</div>
                </div>
              </div>
              // 문제점 ... 여기서 DB가져올때 사용자 정보도 같이 JOIN햐서 가져와야됨 . 
              :
              <div key={i} className='ChatListElement'>
                <img src='/img/UserDefaultImg.png'></img>
                <div className='chatNameAndChat'> 
                  <div >{el.member_A_id}</div>
                  <div className='chatRoomChatMsg'>{el.last_msg}</div>
                </div>
              </div>
            )

          })}

        </div>


        
    </div>
  )
}

export default ChatPage
