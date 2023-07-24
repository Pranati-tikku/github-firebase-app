import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css"

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from './config/FirebaseConfig';

import './App.css';
import userContext from './context/UserContext';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import NotFound from './Pages/NotFound';
import Footer from './Layout/Footer';
import Header from './Layout/Header';

firebase.initializeApp(firebaseConfig);
function App() {
  const [user,setUser]=useState(null);
  return (
    <Router>
      <ToastContainer/>
     <userContext.Provider value={{user,setUser}}>
      <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="signup" element={<SignUp/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
   </userContext.Provider>
   </Router>
  );
}

export default App;
