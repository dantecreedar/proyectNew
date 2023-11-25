import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Dash from './Components/Dashboard/Dash'
import Home from './Components/Routes/Home'

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route index element={<Home/>} />
                  <Route path='dashboard' element={<Dash/>} />
              </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
