import {Genre, Header, Footer, Navbar} from './containers';
import {Home, MyBooks, Reviews, Search, Login, Signup, Profile} from './components';
import './App.css';
import {Route, Routes, useHistory} from 'react-router-dom';
import { useEffect } from 'react';



function App() {


  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route exact path="/" component={Home}/>
          <Route path="/search" component={Search}/>
          <Route path="/books" component={MyBooks} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/login" component={Login} />
          <Route path='/signup'component={Signup} />
        </Routes>
      </Navbar>
      <Header></Header>
      <Genre></Genre>
      <Footer></Footer>
    </div>
  );
}

export default App;
