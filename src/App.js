import Register from './components/User/Register';
import Login from './components/User/Login';
import Library from './components/Library/Libary';
import Search from './components/Search/Search';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';




function App() {


  return (

    <div className="App">
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/user/register' element={<Register/>} />
          <Route path='/user/login' element={<Login/>} />
          <Route path='/library' element={<Library/> } />
          <Route path='/search' element={<Search/>} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
