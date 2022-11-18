import React, { useState } from 'react'
import '../LoginPage/LoginPage.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function SignUpPage() {
  const navi = useNavigate();
  const [id , setId] = useState('');
  const [pw , setPw] = useState('');
  const [pwConfirm , setPwConfirm] = useState('');
  const [tel , setTel] = useState('');

  const signUpBtnClicked = ()=>{              //? 회원가입 버튼 클릭 
    if(id.length < 7) return alert('계정의 길이가 알맞지 않습니다 8자이상 입력해주세요');
    if(pw.length < 7) return alert('패스워드 길이가 알맞지 않습니다 8자이상 입력해주세요');
    if(pw !== pwConfirm) return alert('패스워드가 동일하지 않습니다');
    const userInfo = {id : id.trim() , pw , pwConfirm , tel : tel.trim()};
    axios.post('/api/user/signUp' , userInfo).then((result)=>{
      console.log(result.data);
    });
  }

  return (
    <div className='LoginPage'>
      <img className='LoginPageKaKaoLogoImg' alt='kakaoLogo' src='img/kakaoLogo.png'></img>

      <div className='LoginPageLoginBox'>
        <input onChange={(e)=>{setId(e.target.value)}} value={id} placeholder='카카오계정' type={'text'} className='id' ></input> {/* //* 카카오계정 입력란 */}

          <div className='LoginPageLoginBoxLine'></div>

        <input onChange={(e)=>{setPw(e.target.value)}} value={pw} placeholder='비밀번호' type={'password'} className='pw'></input>  {/* //* 비밀번호 입력란 */}

          <div className='LoginPageLoginBoxLine'></div>

        <input onChange={(e)=>{setPwConfirm(e.target.value)}} value={pwConfirm} placeholder='비밀번호확인' type={'password'} className='pw'></input> {/* //* 비번확인 입력란 */} 

          <div className='LoginPageLoginBoxLine'></div>

        <input onChange={(e)=>{setTel(e.target.value)}} value={tel} placeholder={`전화번호 '-' 없이 입력`} type={'tel'} className='pw'></input>  {/* //* 전화번호 입력란 */}
      </div>

      <div onClick={signUpBtnClicked} className='LoginPageLoginBtn'>
          가입하기
      </div>

      <div style={{'justifyContent' : 'center'}} className='LoginPageFooter'>
          <div style={{'border':'none'}} onClick={()=>{navi('/')}} className='SignUp'>로그인</div>
      </div>

    </div>
  )

}

export default SignUpPage
