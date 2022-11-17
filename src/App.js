import { Routes , Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage"; 
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/signUp" element={<SignUpPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
