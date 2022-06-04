import React from 'react';
import './App.css';
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Form from './Form';
import Home from './Home';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
 <div className="App">
    <BrowserRouter>
     <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/form' element={<Form/>}/>
     </Routes>
     </BrowserRouter>

 </div>
 );
}

export default App;
