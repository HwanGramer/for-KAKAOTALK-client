import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ChatPage.css';

function PrivateChatPage() {
    const {receiver} = useParams(); //? receiver유저에게 챗을 보내야됨.

    const [chatMsg , setChatMsg] = useState('');

//* ------------------------------------------------------------------------------------------ 
    // useEffect(()=>{ //? 로그인되지 않았거나 채팅할 유저가 일치하지않으면 브라우저는 닫힘
    //     axios.post('/api/user/check' , {userId : receiver}).then((result)=>{
    //         if(!result.data.suc){alert(result.data.msg); return window.close();} //? 유저가 없으면 강제종료 

    //         //? 대화 내용 불러와야됨. 
    //     })
    // })
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
            <img src='/img/UserDefaultImg.png'></img>
            {/* 이름 */}
            <div className='chatRoomName'>사용자이름</div>
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
