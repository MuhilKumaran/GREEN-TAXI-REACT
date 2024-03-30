import "./App.css";

import Home from "./Components/Home";
import Booking from "./Components/Booking";
import Contact from "./Components/Contact";
import AboutUS from "./Components/AboutUS";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Support from "./Components/Support";
import Driver from "./Components/Driver";
import PrivacyAndPolicy from "./Components/PrivacyAndPolicy";
import TermsAndCondition from "./Components/TermsAndCondition";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/booking" Component={Booking} />
        <Route path="/contact" Component={Contact} />
        <Route path="/aboutus" Component={AboutUS} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/login" Component={Login} />
        <Route path="/support" Component={Support} />
        <Route path="/becomeDriver" Component={Driver}/>
        <Route path="/privacyAndPolicy" Component={PrivacyAndPolicy}/>
        <Route path="/termsAndCondition" Component={TermsAndCondition}/>
      </Routes>
    </>
  );
}

export default App;
