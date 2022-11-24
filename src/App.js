import { Routes , Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage"; 
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import MainPage from "./pages/MainPage/MainPage";
import MyProfilePage from "./pages/MainPage/UserPage/MyProfilePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/signUp" element={<SignUpPage/>}></Route>
        <Route path='/main' element={<MainPage></MainPage>}></Route>
        {/* <Route path='/myProfile' element={<MyProfilePage></MyProfilePage>}></Route> */}

      </Routes>
    </div>
  );
}

export default App;
