
import './App.css';
import React, { useEffect, useState } from "react";
import AboutPage from './Pages/AboutPage';
import Home from './Pages/Home';
import { Routes,Route,Navigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[]);

  return (
    <div className= {`App ${
      loading &&
      "min-w-screen min-h-screen flex justify-center items-center"
    } bg-[#ffffff]`}
  >{loading ? ( 
<ThreeDots 
height="80" 
width="80" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
  ) :(
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/aboutus' element={ <AboutPage/> } />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )}
  </div>
  );
}

export default App;
