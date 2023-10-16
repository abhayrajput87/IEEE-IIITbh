
import './App.css';
import AboutPage from './Pages/AboutPage';
import Home from './Pages/Home';
import { Routes,Route,Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/aboutus' element={ <AboutPage/> } />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </div>
  );
}

export default App;
