import './App.css';
import Auth from './components/SignupLogin/Auth';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route exact path="/" element={<Auth />} />
        <Route path="/home" element={<LandingPage />} />
      </Routes >
    </BrowserRouter>
  );
}

export default App;
