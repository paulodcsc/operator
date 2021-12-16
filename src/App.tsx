import {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(1);

  function handleButtonClickSum() {
    setCount(count + 1);
  }

  function handleButtonClickMinus() {
    setCount(count - 1);
  }

  function handleButtonClickMultiply() {
    setCount(count * 2);
  }

  function handleButtonClickDivide() {
    setCount(count / 2);
  }

  return ( 
    <div className='container'>
      <p>{count}</p>
      <footer>
      <button onClick={handleButtonClickSum}>+1</button>
      <button onClick={handleButtonClickMinus}>-1</button>
      <button onClick={handleButtonClickMultiply}>x2</button>
      <button onClick={handleButtonClickDivide}>/1</button>

      </footer>
    </div>
    );
  }
  
  export default App;
