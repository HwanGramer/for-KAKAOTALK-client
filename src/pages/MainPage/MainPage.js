import React, { useState } from 'react'
import './MainPage.css';
import ChatPage from './ChatPage/ChatPage';
import OptionPage from './OptionPage/OptionPage';
import UserPage from './UserPage/UserPage';

function MainPage() {
    const [pageNum , setPageNum] = useState(0);
    const [menuImg , setMenuImg] = useState(['/img/clickeduser.png' , '/img/chatt.png','/img/option.png']);
    const clickMenuImg = ['/img/clickeduser.png' , '/img/clickedChat.png','/img/clickedoption.png'];

    const menuClick = (num)=>{ //? 버튼눌렀을때의 모션
        setPageNum(num);
        const arr = ['/img/userImg.png' , '/img/chatt.png','/img/option.png'];
        arr[num] = clickMenuImg[num];
        setMenuImg(arr);
    }
    
  return (
    <div className='MainPage'>

      <div className='MainPageSideBar'>
          <div className='SideBarMenu'>
            <img alt='userimg' onClick={()=>{menuClick(0)}} src={menuImg[0]}></img>
            <img alt='chatimg' onClick={()=>{menuClick(1)}} src={menuImg[1]}></img>
            <img style={{'marginTop' : '-9px' , width:'29px'}} alt='optionimg' onClick={()=>{menuClick(2)}} src={menuImg[2]}></img>
          </div>
      </div>

      <div className='MainPagebody'>

              {pageNum === 0 && <UserPage></UserPage>}
              {pageNum === 1 && <ChatPage></ChatPage>}
              {pageNum === 2 && <OptionPage></OptionPage>}
      </div>

    </div>
  )
}

export default MainPage
