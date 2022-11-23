import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import '../MainPage.css';
import AddFriendBar from '../Components/AddFriendBar';

function UserPage({userInfo , setUserInfo,friendList,setFriendList}) {
    const [openAddFriend , setOpenAddFriend] = useState(false);
    const [newFriendList , setNewFriendList] = useState([]);

// * --------------------------------------------------------------------------------------
    const ChangeName = ()=>{ //? 이름 바꾸는 함수 
        const newName = prompt('입력바람').trim();
        if(newName.length <= 20 && window.confirm(newName+'으로 바꾸시겠습니까?')){
            axios.post('/api/user/changeName' , {newName:newName} ).then((result)=>{
                if(!result.data.suc) return alert(result.data.msg);
                const obj = {...userInfo};
                obj.user_name = newName;
                setUserInfo(obj);
            })
        }else{
            alert('이름의 길이가 알맞지 않습니다');
        }
    }
// * --------------------------------------------------------------------------------------

    const Addfriend = ()=>{
        setOpenAddFriend(!openAddFriend);
    }

  return (
    <div>
        <div className='MainPageHeader'>
            <div className='MainPageHeaderName'>
                친구
            </div>

            <div className='MainPageHeaderMenu'>
                <img alt='친구찾기이미지' src='/img/clickedloupe.png'></img>
                <img onClick={Addfriend} alt='친구추가이미지' src='/img/clickedadd-friend.png'></img>
            </div>
        </div>

        {openAddFriend && <AddFriendBar setFriendList={setFriendList}  setNewFriendList={setNewFriendList}  newFriendList={newFriendList}></AddFriendBar>}  
        {/* 친구추가 컴포넌트 */}

        <div className='UserPageBody'>

            <div className='MyInfo'>
                <img alt='프로필이미지' src={userInfo.user_img === null ? '/img/UserDefaultImg.png' : userInfo.user_img}></img>
                <div onClick={ChangeName} className='MyInfoName'>{userInfo.user_name === null ? '이름 등록 필수' : userInfo.user_name}</div>
            </div>

        { //? 새로운 친구 리스트 
            newFriendList.length > 0 && 
            <div className='FirendList'>
                <div className='UserPageListName'>새로운친구 {newFriendList.length}</div>
                {newFriendList.map((el,i)=>{
                    return(
                        <div key={i} className='Firend'>
                            <img src='/img/UserDefaultImg.png'></img>
                            <div className='FirendStatus'>
                                <div className='FirendName'>{el.user_name}</div>
                                <div className='FirendStatusMsg'>{el.user_status_msg}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        }

            <div className='FirendList'>
                <div className='UserPageListName'>친구 {friendList.length}</div>
                {
                    friendList.map((el,i)=>{
                        return(
                            <div key={i} className='Firend'>
                                <img src='/img/UserDefaultImg.png'></img>
                                <div className='FirendStatus'>
                                    <div className='FirendName'>{el.user_name}</div>
                                    <div className='FirendStatusMsg'>{el.user_status_msg}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
        
    </div>
  )
}

export default UserPage
