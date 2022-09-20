import { useState } from 'react';
import '../styles/counter.scss';

export function CounterPage() {
const [count, setCount] = useState(0);

  return (
    <div className="CounterPage">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={()=>setCount(prev=>prev-1)} className="minus">- Минус</button>
        <button onClick={()=>setCount(prev=>prev+1)} className="plus">Плюс +</button>
      </div>
    </div>
  );
}
