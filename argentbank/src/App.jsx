import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/Profile";
import './App.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">

            <Router>
                  <Header/>
                        <Routes>
                              <Route path="/" element={<Home/>}/>
                              <Route path="/login" element={<Login/>}/>
                              <Route path="/register" element={<Register/>}/>
                              <Route path="/profile" element={<Profile/>}/>
                        </Routes>
                  
                  <Footer />
            </Router>
            
    </div>
  );
}

export default App;
