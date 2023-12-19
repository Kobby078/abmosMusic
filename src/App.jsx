import { Route, Routes } from "react-router-dom";
import './App.css';
import './index.css'
import Navigation from './component/Navigation/Navigation';
import { Homepage, About, Artists, Services, Contact } from './pages'


function App() {
  return (
    <div className="app">
      <div className="b-trans">ABMOS</div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/artists" element={<Artists />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <div className="b-trans-bottom">MUSIC</div>
    </div>
  )
}

export default App;