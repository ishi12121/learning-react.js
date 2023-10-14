
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  const positiveCount = Math.abs(count); // Ensure the displayed count is always positive
  const today = new Date();
  const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + count);
 
  return (
    <div>
      <div>
        
      <h1 className='h1'>Count: {count}</h1>
      <button className='increment-btn' onClick={incrementCount}>Increment</button>
      <button className='decrement-btn' onClick={decrementCount}>Decrement</button>
      </div>
      <p>
        <h1 className='h1'>
          <span>
          {
              count === 0
              ? "Today is"
              : count > 0 ?
                `${positiveCount} days from today is`
                : `${positiveCount} days ago was`
            }
          </span>
        </h1>
        <span className="date-block">
          {date.toDateString()}
      </span>
       
       </p>
      </div>
  );
}

export default App;
