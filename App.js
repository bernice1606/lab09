import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // This has some code quality issues for demonstration
  var unused_variable = "test";
  
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default App;