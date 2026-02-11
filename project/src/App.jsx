// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import DataTable from './components/DataTable'
import MediaCard from './components/Mediacard'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import Example from './components/Example'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Nav/> <br />
     {/* <MediaCard/> */}
     <Routes>
      <Route path='/' element={<MediaCard/>}/>
      <Route path='/t' element={<DataTable/>}/>
       <Route path='/c' element={<StateBasics/>}/>  
        <Route path='/b' element={<Counter/>}/>
     <Route path='/e' element={<Example/>}/>
     </Routes>
      {/* <DataTable/> */}

    </>
  )
}

export default App
