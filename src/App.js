// import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home} from './Pages/Home';
import {ReferPage} from './Pages/ReferPage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar />
        <Routes>
          <Route index path ='/' element={<Home />} />
          <Route path ='refer' element={<ReferPage />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
