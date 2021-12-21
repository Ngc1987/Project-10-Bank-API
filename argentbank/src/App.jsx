import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import React from "react"
import Profile from "./Pages/Profile/Profile";
import Error from "./Components/Error404/Error";
import './App.scss';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation} from "react-router-dom";
// import {library} from "@fortawesome/fontawesome-svg-core";
// import {fas} from "@fortawesome/free-solid-svg-icons";

// library.add(fas)

function App() {
  return (
    <div className="App">

            <Router>
                  <Header/>
                        <Routes>
                              <Route path="/" element={<Home/>}/>
                              <Route path="/login" element={<Login/>}/>
                              <Route path="/register" element={<Register/>}/>
                              
                              <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>} />
                              <Route path="/*" element={<Error/>}/>
                             
                        </Routes>
                  
                  <Footer />
            </Router>
            
    </div>
  );
}



function RequireAuth({ children }) {
      
      let token = JSON.parse(localStorage.getItem('token'));
      let location = useLocation();

      if (token === null) {
            // Redirect them to the /login page, but save the current location they were
            // trying to go to when they were redirected. This allows us to send them
            // along to that page after they login, which is a nicer user experience
            // than dropping them off on the home page.
            return <Navigate to="/login" state={{ from: location }} />;
      }

      return children;
}

// function PrivateRoute() {

//       let token = JSON.parse(localStorage.getItem('token'));
//       // const navigateTo = useNavigate()
//       if(token === null) {
//             // navigateTo("/login")
//             return <Login/>
//       } 
//       return (
//             <Profile />
//       )
// }

export default App;
