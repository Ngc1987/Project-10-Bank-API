import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home"
import SignIn from "./Pages/SignIn/SignIn";
import Register from "./Pages/Register/Register";
import User from "./Pages/User/User";
import './App.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import history from "./Services/history";

function App() {
  return (
    <div className="App">


            <Router history={history}>
                  <Header/>
                        <Routes>
                              <Route path="/" element={<Home/>}/>
                              <Route path="/signin" element={<SignIn/>}/>
                              <Route path="/register" element={<Register/>}/>
                              <Route path="/dashboard" element={<User/>}/>
                        </Routes>
                  
                  <Footer />
            </Router>
            

      
    </div>
  );
}

export default App;
