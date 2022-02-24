
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Offer from './components/Phones'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/phones" element={<Offer />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
