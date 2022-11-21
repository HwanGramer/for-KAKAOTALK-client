import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../MainPage.css';

function AddFriendBar() {
    const [findType , setFindType] = useState(1); //? 1 : 연락처로알기  , 2 : id로 알기 , 3 : 찾았을때 친구정보
    const [addBtnActiTel,setAddBtnActitel] = useState(false);
    const [addBtnActiId , setAddBtnActiId] = useState(false);
    
    const [notFindTelUser , setNotFindUser] = useState(false);
    
    const [name , setName] = useState('');
    const [tel , setTel]  = useState('');
    const [id , setId] = useState('');

    const [friendInfo , setFriendInfo] = useState({});

    const ChangeFindType = (type)=>{ //? 친구찾는 타입
        setFindType(type);
    }

    const AddFriendClicked = (type)=>{ //? 유저 찾기
        setNotFindUser(false);
        if(type===1 && addBtnActiTel){  //? 전화번호로 유저찾기
            axios.post('/api/user/findUserInfo/tel' , {tel}).then((result)=>{
                if(!result.data.suc){
                    return setNotFindUser(true); //? 유저가 없다면 문구 띄움 
                }
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                console.log(result.data.user)
                setFindType(3);
                setFriendInfo({...result.data.user});
            })
        }
        
        else if(type === 2 && addBtnActiId){ //? 아이디로 유저찾기
            axios.post('/api/user/findUserInfo/id' , {id}).then((result)=>{
                if(!result.data.suc){
                    return setNotFindUser(true); //? 유저가 없다면 문구 띄움 
                }
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                //? 여기서부터 유저가 있으면 자동으로 친추를 할것이냐 말것이냐 정하자. 일단 카톡은 누르는순간 걍 친추걸림
                console.log(result.data.user);
                setFindType(3);
                setFriendInfo({...result.data.user});
            })
        }
    }
    
    useEffect(()=>{ //? 연락처 친구추가 버튼활성화
        if(findType === 1 && name && tel)
            setAddBtnActitel(true);
        else
            setAddBtnActitel(false);
    } , [name , tel])

    useEffect(()=>{ //? 아이디 친구추가 버튼 활성화
        if(findType === 2 && id)
            setAddBtnActiId(true)
        else
            setAddBtnActiId(false);
    },[id])



    return (
        <div className='AddFirendBar'>
            <p>친구추가</p>
            <div className='AddFirendCategory'>
                <div style={findType === 1 ? {'borderBottom' : '1px solid black'} : null} onClick={()=>{ChangeFindType(1)}}>연락처</div>
                <div style={findType === 2 ? {'borderBottom' : '1px solid black'} : null} onClick={()=>{ChangeFindType(2)}}>ID</div>
            </div>
    
            {
                findType === 1 && 
                <div className='FindFriendTel'>
                    <input value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='친구 이름' className='FindFriendTelInput'></input>
                    <input value={tel} onChange={(e)=>{setTel(e.target.value)}} placeholder='전화번호' className='FindFriendTelInput'></input>
    
                    <div className='FindFriendTelComent'>{notFindTelUser ? `유효하지않는 전화번호입니다.  입력하신 번호를 다시한번 확인해주세요`  :'친구의 이름과 전화번호를 입력해주세요.'}</div>

                    <div onClick={()=>{AddFriendClicked(1)}} style={addBtnActiTel ? {'backgroundColor' : 'rgb(254 229 2)' , color : 'black'} : null} className='AddFriendBtn'>친구 추가</div>
                </div>
            }
    
            {
                findType === 2 && 
                <div className='FindFriendTel'>
                    <input value={id} onChange={(e)=>{setId(e.target.value)}} placeholder='친구 카카오톡 ID' className='FindFriendTelInput'></input>
    
                    <div className='FindFriendTelComent'>{notFindTelUser ? '유효하지않는 아이디입니다.  입력하신 아이디를 다시한번 확인해주세요':'카카오톡 ID를 등록하고 검색을 허용한 친구만 찾을 수 있습니다.'}</div>

                    <div onClick={()=>{AddFriendClicked(2)}} style={addBtnActiId ? {'backgroundColor' : 'rgb(254 229 2)' , color : 'black'} : null} className='AddFriendBtn'>친구 추가</div>
                </div>
            }

            {/* //? 친구정보가 성공적으로 나타났을때  */}

            { 
                findType === 3 &&
                <div className='FindFriendTel'>
                    <div className='FindFrindInfoBox'>
                        <img className='FindFriendImg' src={friendInfo.user_img===null ? '/img/UserDefaultImg.png' : friendInfo.user_img}></img> 
                    {/* <img src={friendInfo?.user_img === null ? '/img/UserDefaultImg.png' : friendInfo?.user_img}></img> */}
                        <div className='FindFriendName'>{friendInfo.user_name}</div>
                        <div className='FindFriendComent'>*이 코멘트는 이미 친추가되있다면 바뀌어야됨.*</div>
                        <div style={{'textAlign':'center' , 'marginTop':'6px' , 'color':'#a59f9ffc' , 'fontSize':'14px'}}> 친구에게 보여줄 프로필을 변경하거나 <br></br>1:1 채팅을 바로 시작해보세요. </div>
                    </div>
                </div>
            }
    
    
            
        </div>
      )
}

export default AddFriendBar
