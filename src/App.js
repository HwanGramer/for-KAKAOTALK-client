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
