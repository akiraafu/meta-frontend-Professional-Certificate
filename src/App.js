import { BrowserRouter, Route, Routes } from "react-router-dom";
import Image from './assets/1.jpg';
import './App.css';
import Form from './components/Form';
import ConfirmedBooking from './components/ConfirmedBooking';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <header className="App-header">
        <h1 className="title text-3xl font-bold" >Little Lemon</h1>
        <p className='city'>Chicago</p>
        <div className='description-area'>
          <p className='description'>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <div className='description-img'>
            <img src={Image} alt='restaurant'/>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/confirmed" element={ <ConfirmedBooking/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
