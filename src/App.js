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
import UserReview from './components/UserReview/UserReview';
import Footer from './components/Footer/Footer';






function App() {


  return (

    <div className="App">
      
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element = {<Home/>} />
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
          <Route path='/me/reviews' element={
            <AuthRoute>
              <UserReview/> 
            </AuthRoute>
            }
          />
        </Routes>
        <Footer/>
      </Router>
    </div>
    
  );
}

export default App;
