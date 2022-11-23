import React, { useEffect, useState } from 'react'
import './MainPage.css';
import ChatPage from './ChatPage/ChatPage';
import OptionPage from './OptionPage/OptionPage';
import UserPage from './UserPage/UserPage';
import axios from 'axios';

function MainPage() {
    const [userInfo , setUserInfo] = useState({});
    const [friendList , setFriendList] = useState([]);
    const [pageNum , setPageNum] = useState(0);
    const [menuImg , setMenuImg] = useState(['/img/clickeduser.png' , '/img/chatt.png','/img/option.png']);
    const clickMenuImg = ['/img/clickeduser.png' , '/img/clickedChat.png','/img/clickedoption.png'];

    const menuClick = (num)=>{ //? 버튼눌렀을때의 모션
        setPageNum(num);
        const arr = ['/img/userImg.png' , '/img/chatt.png','/img/option.png'];
        arr[num] = clickMenuImg[num];
        setMenuImg(arr);
    }

    useEffect(()=>{ //? 여기서 유저정보랑 챗팅방 같은거 싹다 모아서 Props로 전달해주자.
      axios.get('/api/user/myinfo').then((myinfo)=>{ //? 유저정보 
        if(!myinfo.data.suc) return alert(myinfo.data.msg);
        axios.get('/api/user/friend/list').then((fList)=>{
          if(!fList.data.suc) return alert(fList.data.msg);
          setFriendList(fList.data.data)
        })
        setUserInfo({...myinfo.data.data});
      })
    },[])

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
              {pageNum === 0 && <UserPage userInfo={userInfo} setUserInfo={setUserInfo} friendList={friendList} setFriendList={setFriendList}></UserPage>}
              {pageNum === 1 && <ChatPage></ChatPage>}
              {pageNum === 2 && <OptionPage></OptionPage>}
      </div>

    </div>
  )
}

export default MainPage
