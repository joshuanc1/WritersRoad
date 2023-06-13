import Register from './components/User/Register';
import Login from './components/User/Login';
import Library from './components/Library/Libary';
import Search from './components/Search/Search';
import Review from './components/Review/Review';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import AuthRoute from './AuthRoute/AuthRoute';
import BookDetails from './components/BookDetails/BookDetails';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import {loadUser} from './actions/userActions';






function App() {

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(loadUser)
  },[dispatch]);


  return (

    <div className="App">
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/user/register' element={<Register/>} />
          <Route path='/user/login' element={<Login/>} />
          
          <Route path='/library' element= {
            <AuthRoute>
              <Library/> 
          </AuthRoute>
            }
          />
          
          <Route path='/search' element={<Search/> } />
          <Route path='/review' element={<Review/> } />
          <Route path='/book/:isbn' element={<BookDetails/> } />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
