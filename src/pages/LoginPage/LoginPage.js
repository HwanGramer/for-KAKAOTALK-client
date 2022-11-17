import React from 'react'
import './LoginPage.css';

function LoginPage() {
  return (
    <div className='LoginPage'>
      <img className='LoginPageKaKaoLogoImg' alt='kakaoLogo' src='img/kakaoLogo.png'></img>

      <div className='LoginPageLoginBox'>
        <input placeholder='카카오계정 (이메일 또는 전화번호)' type={'text'} className='id' ></input>

        <div className='LoginPageLoginBoxLine'></div>

        <input placeholder='비밀번호' type={'password'} className='pw'></input>
      </div>

      <div className='LoginPageLoginBtn'>
          로그인
      </div>

      <div className='LoginPageFooter'>
          <div className='SignUp'>회원가입</div>
          <div className='FindKakaoId'>카카오계정 찾기</div>
          <p className='SetPassword'>비밀번호 재설정</p>
      </div>

    </div>
  )
}

export default LoginPage
