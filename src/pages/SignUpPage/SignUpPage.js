import React from 'react'
import '../LoginPage/LoginPage.css';

function SignUpPage() {
  return (
    <div className='LoginPage'>
      <img className='LoginPageKaKaoLogoImg' alt='kakaoLogo' src='img/kakaoLogo.png'></img>

      <div className='LoginPageLoginBox'>
        <input placeholder='카카오계정' type={'text'} className='id' ></input> {/* //* 카카오계정 입력란 */}

          <div className='LoginPageLoginBoxLine'></div>

        <input placeholder='비밀번호' type={'password'} className='pw'></input>  {/* //* 비밀번호 입력란 */}

          <div className='LoginPageLoginBoxLine'></div>

        <input placeholder='비밀번호확인' type={'password'} className='pw'></input> {/* //* 비번확인 입력란 */} 

          <div className='LoginPageLoginBoxLine'></div>

        <input placeholder='전화번호' type={'password'} className='pw'></input>  {/* //* 전화번호 입력란 */}
      </div>

      <div className='LoginPageLoginBtn'>
          가입하기
      </div>

    </div>
  )
}

export default SignUpPage
