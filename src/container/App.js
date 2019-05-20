import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom' 
import '../App.css';
import Home from '../container/Home';
import Cart from '../container/Cart';
import Shop from '../container/Shop'
import Nav from '../component/Nav';
import '../style/Export.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
      </div>
      <Route path="/" exact component = {Home}/>
      <Route path="/cart" exact component = {Cart}/>
      <Route path="/shop" exact component = {Shop}/>
    </BrowserRouter>
  );
}

export default App;
