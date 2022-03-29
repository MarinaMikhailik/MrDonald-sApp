import {useState} from "react";


export function useCount(openOrder){
  const countOpenOrder = openOrder.count || 1; 
  const [count, setCount] = useState(countOpenOrder);

  const onChange = e => setCount(+e.target.value);
  return {
    count,
    setCount,
    onChange
  }
}