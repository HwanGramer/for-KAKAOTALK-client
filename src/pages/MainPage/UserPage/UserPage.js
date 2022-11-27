import axios from 'axios';
import React, { useState } from 'react';
import '../MainPage.css';
import AddFriendBar from '../Components/AddFriendBar';

function UserPage({userInfo , setUserInfo,friendList,setFriendList}) {
    const [openAddFriend , setOpenAddFriend] = useState(false);
    const [newFriendList , setNewFriendList] = useState([]);

// * --------------------------------------------------------------------------------------
    const ChangeName = ()=>{ //? 이름 바꾸는 함수 
        const newName = prompt('이름')?.trim();
        if(newName?.length <= 20 && newName?.length >= 1 && window.confirm(newName+'으로 바꾸시겠습니까?')){
            axios.put('/api/user/changeName' , {newName:newName} ).then((result)=>{
                if(!result.data.suc) return alert(result.data.msg);
                const obj = {...userInfo};
                obj.user_name = newName;
                setUserInfo(obj);
            })
        }else{
            return alert('이름의 길이가 알맞지 않습니다');
        }
    }
// * --------------------------------------------------------------------------------------


// * --------------------------------------------------------------------------------------
    const ChangeStatusMsg = ()=>{ //? 상태메세지 바꾸기
        const newStatusMsg = prompt('상태메세지')?.trim();
        if(newStatusMsg?.length <= 30 && newStatusMsg?.length >= 1){
            axios.put('/api/user/statusMsg' , {newStatusMsg}).then((result)=>{
                if(!result.data.suc) return alert(result.data.msg);
                const obj = {...userInfo}; //? 상태메세지 동기화
                obj.user_status_msg = newStatusMsg;
                setUserInfo(obj);
            })
        }else{
            return alert('상태메세지의 길이가 알맞지 않습니다');
        }
    }
// * --------------------------------------------------------------------------------------


// * --------------------------------------------------------------------------------------
    const ProfileImgUpdate = (e)=>{   //? 이미지 업로드 함수 프로필이름은 항상 같은이름이지만 변경시 사진만바뀐다. 이름은 그대로고
        //? 파일 올리면 여기로 들어온다 .
        if(!e.target.files) return
        let formData = new FormData; //* 파일을 폼데이터로 만들어준다.
        const config = {header: {"content-Type": "multipart/form-data"}}//* Content-Type을 반드시 이렇게 하여야 한다.
        //? 여기서 키와 벨류인데 앞에오는 KEY가 multer single('KEY')이거랑 동일해야된다.//? 여기서 키와 벨류인데 앞에오는 KEY가 multer single('KEY')이거랑 동일해야된다.
        //? multer.js -> const profileImgUpload = multer({storage : storage}).single('profileImgInput');
        formData.append('profileImgInput',e.target.files[0]);
        axios.post('/api/user/myinfo/profileImg' , formData , config).then((result)=>{ //? 이미지 DB에 저장 
            if(!result.data.suc) return alert(result.data.msg);
            //? result.data에 suc , msg , imgName 3개옴.
            return window.location.reload();
        })
    }
// * --------------------------------------------------------------------------------------


// * --------------------------------------------------------------------------------------
    const MakeChat = (receiverID) => {
        window.open(`/chatRoom/${receiverID}/${userInfo.user_id}`, '' , ''); //? 새창열기
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
                <label className='profileImgUpdateInput' name="profileImgInput" htmlFor='imgInput'></label>
                <input multiple={false} onChange={ProfileImgUpdate} name="profileImgInput" accept={'image/*'} type={'file'} id='imgInput' style={{'display':'none'}}></input>

                <img alt='프로필이미지' src={userInfo.user_img===null?'/img/UserDefaultImg.png' : userInfo.user_img}></img>

                <div>
                    <div onClick={ChangeName} className='MyInfoName'>{userInfo.user_name === null ? '이름 등록 필수' : userInfo.user_name}</div>
                    <div onClick={ChangeStatusMsg} className='MyStatusMsg'>{userInfo.user_status_msg===null ? '상태메세지를 입력해보세요!' : userInfo.user_status_msg}</div>
                </div>
            </div>


        { //? 새로운 친구 리스트 
            newFriendList.length > 0 && 
            <div className='FirendList'>
                <div className='UserPageListName'>새로운친구 {newFriendList.length}</div>
                {newFriendList.map((el,i)=>{
                    return(
                        <div key={i} className='Firend'>
                            <img alt='기본이미지' src='/img/UserDefaultImg.png'></img>
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
                            <div onDoubleClick={()=>{MakeChat(el.user_id)}} key={i} className='Firend'>
                                <img alt='기본이미지' src={el.user_img === null ? '/img/UserDefaultImg.png' : el.user_img}></img>
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
