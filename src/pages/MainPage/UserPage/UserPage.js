import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import '../MainPage.css';
import AddFriendBar from '../Components/AddFriendBar';

function UserPage({userInfo , setUserInfo,friendList,setFriendList}) {
    const [openAddFriend , setOpenAddFriend] = useState(false);

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

    const Addfriend = ()=>{
        setOpenAddFriend(!openAddFriend);
    }

    // useEffect(()=>{ //? 친구목록 불러오기
    //     axios.get('/api/user/friendList').then(()=>{

    //     })
    // },[])


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

        {openAddFriend && <AddFriendBar></AddFriendBar>}  
        {/* 친구추가 컴포넌트 */}

        <div className='UserPageBody'>

            <div className='MyInfo'>
                <img alt='프로필이미지' src={userInfo.user_img === null ? '/img/UserDefaultImg.png' : userInfo.user_img}></img>
                <div onClick={ChangeName} className='MyInfoName'>{userInfo.user_name === null ? '이름 등록 필수' : userInfo.user_name}</div>
            </div>

            <div className='FirendList'>
                <div className='UserPageListName'>친구 {110}</div>


                {
                    friendList.map((el,i)=>{
                        return(
                            <div key={i} className='Firend'>
                                <img src='/img/UserDefaultImg.png'></img>
                                <div className='FirendStatus'>
                                    <div className='FirendName'>{el.friend_id}</div>
                                    <div className='FirendStatusMsg'>안녕하세요</div>

                                    {/* 해야될거 유저 상태메세지 추가랑 친구정보랑 유저정보 조인 해서 가져와야됨 */}
                                    {/* 해야될거 유저 상태메세지 추가랑 친구정보랑 유저정보 조인 해서 가져와야됨 */}
                                    {/* 해야될거 유저 상태메세지 추가랑 친구정보랑 유저정보 조인 해서 가져와야됨 */}
                                    {/* 해야될거 유저 상태메세지 추가랑 친구정보랑 유저정보 조인 해서 가져와야됨 */}
                                    {/* 해야될거 유저 상태메세지 추가랑 친구정보랑 유저정보 조인 해서 가져와야됨 */}
                                    {/* 해야될거 유저 상태메세지 추가랑 친구정보랑 유저정보 조인 해서 가져와야됨 */}
                                    {/* 해야될거 유저 상태메세지 추가랑 친구정보랑 유저정보 조인 해서 가져와야됨 */}
                                    {/* 해야될거 유저 상태메세지 추가랑 친구정보랑 유저정보 조인 해서 가져와야됨 */}
                                    {/* 해야될거 유저 상태메세지 추가랑 친구정보랑 유저정보 조인 해서 가져와야됨 */}
                                    {/* 해야될거 유저 상태메세지 추가랑 친구정보랑 유저정보 조인 해서 가져와야됨 */}
                                    {/* 해야될거 유저 상태메세지 추가랑 친구정보랑 유저정보 조인 해서 가져와야됨 */}
                                    {/* 해야될거 유저 상태메세지 추가랑 친구정보랑 유저정보 조인 해서 가져와야됨 */}
                                    {/* 해야될거 유저 상태메세지 추가랑 친구정보랑 유저정보 조인 해서 가져와야됨 */}
                                    {/* 해야될거 유저 상태메세지 추가랑 친구정보랑 유저정보 조인 해서 가져와야됨 */}
                                    {/* 해야될거 유저 상태메세지 추가랑 친구정보랑 유저정보 조인 해서 가져와야됨 */}
                                    {/* 해야될거 유저 상태메세지 추가랑 친구정보랑 유저정보 조인 해서 가져와야됨 */}

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
