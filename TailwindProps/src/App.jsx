import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {

  let obj = {
    name: 'Vishal',
    Age: 22
  }

  let arr = [1,2,3]

  return (
    <>
      <div className="cards flex gap-10">
        <Card price = {25} tagname={345}/>
        <Card price={35}/> 
      </div>
    </>
  )
}

export default App
