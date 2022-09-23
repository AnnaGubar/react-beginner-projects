import { useState } from 'react';
import '../styles/counter.scss';

export function CounterPage() {
const [count, setCount] = useState(0);

  return (
    <div className="CounterPage">
      <div>
        <h2>Counter:</h2>
        <h1>{count}</h1>
        <button onClick={()=>setCount(prev=>prev-1)} className="minus">- Minus</button>
        <button onClick={()=>setCount(prev=>prev+1)} className="plus">Plus +</button>
      </div>
    </div>
  );
}
