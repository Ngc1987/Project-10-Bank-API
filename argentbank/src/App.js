import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home"
import SignIn from "./Pages/SignIn/SignIn";
import User from "./Pages/User/User";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">


            <Router>
                  <Header/>
                        <Routes>
                              <Route path="/" element={<Home/>}/>
                              <Route path="/signin" element={<SignIn/>}/>
                              <Route path="/user" element={<User/>}/>
                        </Routes>
                  <Footer />
            </Router>
            

      
    </div>
  );
}

export default App;
