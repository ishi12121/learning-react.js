
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
  const [step, setStep] = useState(1);

  function handleReset() {
    setCount(0);
    setStep(1);
  }
  const incrementCount = () => {
    setCount(count + step);
  };
  const decrementCount = () => {
    setCount(count - step);
  };
  const positiveCount = Math.abs(count); // Ensure the displayed count is always positive
  const today = new Date();
  const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + count);
 
  return (
    <div>
      <div>
        <input type='range' min='0' max='10' value={step} onChange={(e) => setStep(Number(e.target.value))} />
        <span>Step: {step}</span>
      </div>
      <div>
      <h1 className='h1'>Count: {count}</h1>
        <button className='increment-btn' onClick={incrementCount}>Increment</button>
        <input 
          className='input_ele'
          type='text'
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
  
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
    {(count !== 0 || step !==1  )?  (<button className='reset-btn' onClick={handleReset}>Reset</button>) : null}
      </div>
  );
}

export default App;
