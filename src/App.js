import {Navbar} from './containers';
import {Home, MyBooks, Reviews, Search, Login, Signup} from './components';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function App() {


  return (

    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/books" element={<MyBooks />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/users/login" element={<Login />} />
          <Route path='/users/register' element={<Signup/>} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
