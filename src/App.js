import Form from './components/Form';
import Image from './assets/1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title text-3xl font-bold" >Littile Lemon</h1>
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
      <Form/>
    </div>
  );
}

export default App;
