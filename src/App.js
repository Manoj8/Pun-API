import React, { Component } from 'react';
import logo from './logo.svg';
import Punk from './Punk';
import Favourites from './Favourites'
import './App.css';
import {
  Route,Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      

      <div className = "app" >
      <h1>Punk API</h1>
        <Route exact path = "/" component={Punk}/>   
                
        <Route exact path = "/favourites" component={Favourites}></Route>
        <Route exact path = "/" render = { () => ( 
          <Link className="open-search" to={"/Favourites"}>
              <button></button>
          </Link>
  )} />
            
      </div>
    );
  }
}

export default App;
