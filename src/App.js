import { Routes , Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage"; 
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import MainPage from "./pages/MainPage/MainPage";
import PrivateChatPage from "./pages/ChatPage/PrivateChatPage";
import {io} from 'socket.io-client';

let socket = io('http://localhost:8080' , {transports:["websocket"]}); //? 랜딩페이지 접속시 소켓연결 소켓아이디 DB에 넣어야됨.

// window.addEventListener('focusout', function() {
//   window.location.reload();
// }, false);


//! 지금 찾아봐야될거는 웹페이지가 포커싱되었을때 한번만 새로고침이 되어야 한다  다른페이지에있다가 딱 들어오면 딱 한번 새로고침되어야됨
//! 지금 찾아봐야될거는 웹페이지가 포커싱되었을때 한번만 새로고침이 되어야 한다  다른페이지에있다가 딱 들어오면 딱 한번 새로고침되어야됨
//! 지금 찾아봐야될거는 웹페이지가 포커싱되었을때 한번만 새로고침이 되어야 한다  다른페이지에있다가 딱 들어오면 딱 한번 새로고침되어야됨
//! 지금 찾아봐야될거는 웹페이지가 포커싱되었을때 한번만 새로고침이 되어야 한다  다른페이지에있다가 딱 들어오면 딱 한번 새로고침되어야됨
//! 지금 찾아봐야될거는 웹페이지가 포커싱되었을때 한번만 새로고침이 되어야 한다  다른페이지에있다가 딱 들어오면 딱 한번 새로고침되어야됨
//! 지금 찾아봐야될거는 웹페이지가 포커싱되었을때 한번만 새로고침이 되어야 한다  다른페이지에있다가 딱 들어오면 딱 한번 새로고침되어야됨
//! 지금 찾아봐야될거는 웹페이지가 포커싱되었을때 한번만 새로고침이 되어야 한다  다른페이지에있다가 딱 들어오면 딱 한번 새로고침되어야됨
//! 지금 찾아봐야될거는 웹페이지가 포커싱되었을때 한번만 새로고침이 되어야 한다  다른페이지에있다가 딱 들어오면 딱 한번 새로고침되어야됨
//! 지금 찾아봐야될거는 웹페이지가 포커싱되었을때 한번만 새로고침이 되어야 한다  다른페이지에있다가 딱 들어오면 딱 한번 새로고침되어야됨
//! 지금 찾아봐야될거는 웹페이지가 포커싱되었을때 한번만 새로고침이 되어야 한다  다른페이지에있다가 딱 들어오면 딱 한번 새로고침되어야됨
//! 지금 찾아봐야될거는 웹페이지가 포커싱되었을때 한번만 새로고침이 되어야 한다  다른페이지에있다가 딱 들어오면 딱 한번 새로고침되어야됨
//! 지금 찾아봐야될거는 웹페이지가 포커싱되었을때 한번만 새로고침이 되어야 한다  다른페이지에있다가 딱 들어오면 딱 한번 새로고침되어야됨
//! 지금 찾아봐야될거는 웹페이지가 포커싱되었을때 한번만 새로고침이 되어야 한다  다른페이지에있다가 딱 들어오면 딱 한번 새로고침되어야됨
//! 지금 찾아봐야될거는 웹페이지가 포커싱되었을때 한번만 새로고침이 되어야 한다  다른페이지에있다가 딱 들어오면 딱 한번 새로고침되어야됨
//! 지금 찾아봐야될거는 웹페이지가 포커싱되었을때 한번만 새로고침이 되어야 한다  다른페이지에있다가 딱 들어오면 딱 한번 새로고침되어야됨

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/signUp" element={<SignUpPage/>}></Route>
        <Route path='/main' element={<MainPage socket={socket}></MainPage>}></Route>
        {/* <Route path='/myProfile' element={<MyProfilePage></MyProfilePage>}></Route> */}

      {/* chat  */}
        <Route path='/chatRoom/:receiver/:myId' element={<PrivateChatPage socket={socket}></PrivateChatPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
