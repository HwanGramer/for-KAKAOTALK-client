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


// * --------------------------------------------------------------------------------------
    const ProfileImgUpdate = (e)=>{   //? 이미지 업로드 함수 
        //? 파일 올리면 여기로 들어온다 .
        if(!e.target.files) return 
        const formData = new FormData();
        formData.append('image' , e.target.files[0]);
        const config = {headers: {'Content-Type': 'multipart/form-data',}};




        axios.post('/api/user/myinfo/profileImg' , formData , config).then((result)=>{
            console.log(result.data);
        })




        const obj = {...userInfo};
        obj.user_img = 'http://localhost:8080/profileImg/song.jpeg';
        setUserInfo(obj);
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


            <form name={'profileImgInput'} enctype="multipart/form-data" method="post">
                {/* 왜안돼는거야 이 시발  */}
                {/* 왜안돼는거야 이 시발  */}
                {/* 왜안돼는거야 이 시발  */}
                {/* 왜안돼는거야 이 시발  */}
                {/* 왜안돼는거야 이 시발  */}
                {/* 왜안돼는거야 이 시발  */}
                {/* 왜안돼는거야 이 시발  */}
                {/* 왜안돼는거야 이 시발  */}
                {/* 왜안돼는거야 이 시발  */}
                {/* 왜안돼는거야 이 시발  */}
                {/* 왜안돼는거야 이 시발  */}
                {/* 왜안돼는거야 이 시발  */}
                <label className='profileImgUpdateInput' htmlFor='imgInput'></label>
                <input onChange={ProfileImgUpdate} name="profileImgInput" accept={'image/*'} type={'file'} id='imgInput' style={{'display':'none'}}></input>
            </form>


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
