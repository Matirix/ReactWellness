import logo from './logo.svg';
import Navbar from './navbar';
import Home from './home';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import axios from 'axios';

function App() { 
  return (
    <div className="App">
      <div className="content">
      <Router>
          <Navbar />
          <Home />
          {/* <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path='/pokemon/:pid' element={<PokeDetails />}></Route>
          </Routes> */}
          {/* <Footer/> */}
        </Router>
      </div>
    </div>
  );
}

export default App;
