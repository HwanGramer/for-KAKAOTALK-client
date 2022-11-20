import axios from 'axios';
import React, { useState } from 'react';
import '../MainPage.css';
import UserInfo from '../UserInfo';

function UserPage() {
    const [userName , setUserName] = useState(UserInfo.USER_NAME);
    const [profileImg , setProfileImg] = useState(UserInfo.USER_PROFILEIMG);

    const ChangeName = ()=>{ //? 이름 바꾸는 함수 
        const newName = prompt('입력바람').trim();
        if(newName.length <= 20 && window.confirm(newName+'으로 바꾸시겠습니까?')){
            axios.post('/api/user/changeName' , {newName:newName} ).then((result)=>{
                if(!result.data.suc) return alert(result.data.msg);
                UserInfo.USER_NAME = newName
                setUserName(UserInfo.USER_NAME);
            })
        }else{
            alert('이름의 길이가 알맞지 않습니다');
        }
    }


  return (
    <div>
        <div className='MainPageHeader'>
            <div className='MainPageHeaderName'>
                친구
            </div>

            <div className='MainPageHeaderMenu'>
                <img alt='친구찾기이미지' src='/img/clickedloupe.png'></img>
                <img alt='친구추가이미지' src='/img/clickedadd-friend.png'></img>
            </div>
        </div>

        <div className='UserPageBody'>

            <div className='MyInfo'>
                <img alt='프로필이미지' src={profileImg === null ? '/img/UserDefaultImg.png' : profileImg}></img>
                <div onClick={ChangeName} className='MyInfoName'>{userName === null ? '이름 등록 필수' : userName}</div>
            </div>

            <div className='FirendList'>
                <div className='UserPageListName'>친구 {110}</div>


                {
                    [1,2,3,4].map(()=>{
                        return(
                            <div className='Firend'>
                                <img src='/img/UserDefaultImg.png'></img>
                                <div className='FirendStatus'>
                                    <div className='FirendName'>강병창</div>
                                    <div className='FirendStatusMsg'>안녕하세요</div>

                                    {/* 여기 친구 데이터 받아와서 만들어야됨  */}
                                    {/* 여기 친구 데이터 받아와서 만들어야됨  */}
                                    {/* 여기 친구 데이터 받아와서 만들어야됨  */}
                                    {/* 여기 친구 데이터 받아와서 만들어야됨  */}
                                    {/* 여기 친구 데이터 받아와서 만들어야됨  */}
                                    {/* 여기 친구 데이터 받아와서 만들어야됨  */}
                                    {/* 여기 친구 데이터 받아와서 만들어야됨  */}
                                    {/* 여기 친구 데이터 받아와서 만들어야됨  */}
                                    {/* 여기 친구 데이터 받아와서 만들어야됨  */}
                                    {/* 여기 친구 데이터 받아와서 만들어야됨  */}
                                    {/* 여기 친구 데이터 받아와서 만들어야됨  */}
                                    {/* 여기 친구 데이터 받아와서 만들어야됨  */}
                                    {/* 여기 친구 데이터 받아와서 만들어야됨  */}
                                    {/* 여기 친구 데이터 받아와서 만들어야됨  */}
                                    {/* 여기 친구 데이터 받아와서 만들어야됨  */}
                                    {/* 여기 친구 데이터 받아와서 만들어야됨  */}
                                    {/* 여기 친구 데이터 받아와서 만들어야됨  */}
                                    {/* 여기 친구 데이터 받아와서 만들어야됨  */}
                                    {/* 여기 친구 데이터 받아와서 만들어야됨  */}
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
