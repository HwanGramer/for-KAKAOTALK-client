import React, { useEffect, useState } from 'react'
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const navi = useNavigate();
  const [btnClass , setBtnClass] = useState('LoginPageLoginBtn');
  const [id , setId] = useState('');
  const [pw , setPw] = useState('');

  const LoginBtnClicked = ()=>{ //* 로그인 버튼 클릭
    if(btnClass === 'LoginPageLoginBtn') return
    const loginInfo = {id , pw};

    axios.post('/api/user/login' , loginInfo).then((result)=>{
      if(!result.data.suc) return alert(result.data.msg);
      alert(result.data.msg);
      return navi('/main');
    })
  }

  useEffect(()=>{
    if(id.length > 7 && pw.length > 7)setBtnClass('LoginPageSucLoginBtn');
    else setBtnClass('LoginPageLoginBtn');
  },[id , pw])

  return (
    <div className='LoginPage'>
      <img className='LoginPageKaKaoLogoImg' alt='kakaoLogo' src='img/kakaoLogo.png'></img>

      <div className='LoginPageLoginBox'>
        <input value={id} onChange={(e)=>{setId(e.target.value)}} placeholder='카카오계정 (이메일 또는 전화번호)' type={'text'} maxLength='20' className='id' ></input>

        <div className='LoginPageLoginBoxLine'></div>

        <input value={pw} onChange={(e)=>{setPw(e.target.value)}} placeholder='비밀번호' type={'password'} className='pw'></input>
      </div>

      <div onClick={LoginBtnClicked} className={btnClass}>
          로그인
      </div>

      <div className='LoginPageFooter'>
          <div onClick={()=>{navi('/signUp')}} className='SignUp'>회원가입</div>
          <div className='FindKakaoId'>카카오계정 찾기</div>
          <p className='SetPassword'>비밀번호 재설정</p>
      </div>

    </div>
  )
}

export default LoginPage
