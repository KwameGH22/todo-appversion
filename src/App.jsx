import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import Form from './components/form';
import FilterScreen from './components/filterScreen';
import StatsStatus from './components/StatsStatus';
import Items from './components/items';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Form />
      <Items/>
      <FilterScreen/>
      <StatsStatus/>
    </>
  )
}

export default App
