import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Register from './SharedPages/Register/Register';
import Login from './SharedPages/Login/Login';
import Contact from './SharedPages/Contact/Contact';
import Blog from './SharedPages/Blog/Blog';
import Destination from './SharedPages/Destination/Destination';
import News from './SharedPages/News/News';
import NotFound from './components/NotFound/NotFound';
 
 

function App() {
  return (
    <div className="App">
      <Header></Header>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/register' element={<Register></Register>}></Route>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/contact' element={<Contact></Contact>}></Route>
         <Route path='/blog' element={<Blog></Blog>}></Route>
         <Route path='/destination' element={<Destination></Destination>}></Route>
         <Route path='/news' element={<News></News>}></Route>
         <Route path='*' element={<NotFound></NotFound>}></Route>
       </Routes>
    </div>
  );
}

export default App;
