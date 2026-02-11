// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'
import DataTable from './components/DataTable'
import MediaCard from './components/Mediacard'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Nav/> <br />
     {/* <MediaCard/> */}
     {/* <Routes>
      <Route path='/' element={<DataTable/>}/>
      <Route path='/data' element={<DataTable/>}/>

     </Routes> */}
      <DataTable/>

    </>
  )
}

export default App
