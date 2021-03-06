import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const increment2 = () => setCount(previousCount => previousCount + 1);
  const decrement2 = () => setCount(previousCount => previousCount - 1);
  const reset = () => setCount(previousCount => 0);
  const doubleCount = () => setCount(previousCount => previousCount * 2);
  const devideThree = () => setCount(previousCount => devideThreeMultiple(previousCount));

  const devideThreeMultiple = (num) => (num % 3 === 0) ? (num / 3) : num;

  return (
    <>
      <div className="App">
        count: {count}
      </div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
        <button onClick={doubleCount}>x2</button>
      </div>
      <div>
        <button onClick={devideThree}>/3</button>
      </div>
    </>
  );
}

export default App;
