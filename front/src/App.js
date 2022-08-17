import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/Profile/ProfilePage";

function App() {
  return (
         <BrowserRouter>
             <Routes>
                 <Route path="/" element={<LoginPage/>} />
                 <Route path="/register" element={<RegisterPage/>} />
                 <Route path="/user" element={<RegisterPage/>}/>
                 <Route path="/home" element={<HomePage/>}/>
                 <Route path="/profile" element={<ProfilePage/>}/>
             </Routes>
         </BrowserRouter>
  );
}

export default App;
