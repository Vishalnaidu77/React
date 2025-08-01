import { useState } from 'react';
import './App.css'
import AddTodo from './Components/AddTodo';
import SimpleTodo from './Components/SimpleTodo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddTodo />
      <SimpleTodo />
    </>
  )
}

export default App
