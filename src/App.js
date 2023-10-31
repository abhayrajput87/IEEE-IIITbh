
import './App.css';
import React, { useEffect, useState } from "react";
import Home from './Pages/Home';
import { Routes,Route,Navigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import UpdatePage from './Pages/UpdatePage';

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
    <>
     {/* <Navbar/> */}
    <Routes>
     
      <Route path='/' element={ <Home/> } />
      <Route path='/committees' element={ <UpdatePage name={"Committees"} />   } />
      <Route path='/papers' element={<UpdatePage name={"Papers"} />   } />
      <Route path='/program' element={<UpdatePage name={"Program"} />   } />
      <Route path='/conferences' element={<UpdatePage name={"Conferences"} />  } />
      <Route path='/contact' element={<UpdatePage name={"Contact"} />   } />
     
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </>
  )}
  </div>
  );
}

export default App;
