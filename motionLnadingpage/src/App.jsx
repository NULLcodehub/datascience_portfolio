import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Layout from './pageComponents/Layout'
import Header from './pageComponents/LandingPage/Components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={<Header/>}/>
              
          </Route>
      </Routes>  
  	</> 
  )
}

export default App
