import HomePage from './pages/Home';
import AboutHomePage from './pages/About/index';
import PlanSection from './pages/Plan/index'
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {


  return (
   <>
     
     <Routes>
        <Route  path="/" element={<Navigate to="/Home" /> }></Route>
        <Route  path="/Home" element={<HomePage/> }></Route>
        <Route  path="/About-us" element={<AboutHomePage /> }></Route>
        <Route  path="/Plan" element={<PlanSection /> }></Route>
     </Routes>
    </>
  )
}

export default App
