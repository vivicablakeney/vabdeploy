import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Plans from './pages/Plans';
// import Services from './pages/Services';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';




function App() {
  
  return (
  <div className="App"> 
<Router>
  <Navbar/>

  <Routes>
       <Route path='/' element={ <Home/> }/>    
       {/* <Route path='/services' element={<Services/>}/>  */}
       <Route path='/plans' element={<Plans/>}/>
       <Route path='/products' element={<Products/>}/>
       <Route path='/contact' element={< Contact/> }/> 
       </Routes>  
  
       <Footer/>
       </Router>
    
  </div>
      );
}

export default App;