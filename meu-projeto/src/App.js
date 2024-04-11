import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {

  
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/sobre' element={<Empresa></Empresa>}/>
        <Route path='/contato' element={<Contato></Contato>}/>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
