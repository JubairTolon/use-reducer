import { useReducer, useState } from 'react'
import './App.css'

const initialState = 0;
const reducer = (state, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }
  if (action.type === 'DECREMENT') {
    return state - 1;
  }

  return state;
}

function App() {
  // const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <h1>Counter: {state}</h1>
      <div className="card">
        <button onClick={() => dispatch({ type: 'DECREMENT' })} > -</button>
        <button onClick={() => dispatch({ type: 'INCREMENT' })} > +</button>
      </div >
    </div >
  )
}

export default App
