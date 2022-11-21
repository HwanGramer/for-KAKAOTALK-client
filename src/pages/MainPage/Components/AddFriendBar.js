import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../MainPage.css';

function AddFriendBar() {
    const [findType , setFindType] = useState(1); //? 1연락처로알기 2 id로 알기
    const [addBtnActiTel,setAddBtnActitel] = useState(false);
    const [addBtnActiId , setAddBtnActiId] = useState(false);
    
    const [name , setName] = useState('');
    const [tel , setTel]  = useState('');
    const [id , setId] = useState('');

    const ChangeFindType = (type)=>{
        setFindType(type);
    }

    const AddFriendClicked = (type)=>{
        if(type===1 && addBtnActiTel){ 
            axios.post('/api/user/addFriendTel' , {tel}).then(()=>{
                
            })
        }
        if(type === 2 && addBtnActiId){
            console.log(type);
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
    
                    <div className='FindFriendTelComent'>친구의 이름과 전화번호를 입력해주세요.</div>

                    <div onClick={()=>{AddFriendClicked(1)}} style={addBtnActiTel ? {'backgroundColor' : 'rgb(254 229 2)' , color : 'black'} : null} className='AddFriendBtn'>친구 추가</div>
                </div>
            }
    
            {
                findType === 2 && 
                <div className='FindFriendTel'>
                    <input value={id} onChange={(e)=>{setId(e.target.value)}} placeholder='친구 카카오톡 ID' className='FindFriendTelInput'></input>
    
                    <div className='FindFriendTelComent'>카카오톡 ID를 등록하고 검색을 허용한 친구만 찾을 수 있습니다.</div>

                    <div onClick={()=>{AddFriendClicked(2)}} style={addBtnActiId ? {'backgroundColor' : 'rgb(254 229 2)' , color : 'black'} : null} className='AddFriendBtn'>친구 추가</div>
                </div>
            }
    
    
            
        </div>
      )
}

export default AddFriendBar
