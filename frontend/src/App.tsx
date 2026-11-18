import './App.css'
import { Landing } from './components/landing'
import DeployDLanding from './components/landingmain'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DeployDLanding />} />
        <Route path="/deploy" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App