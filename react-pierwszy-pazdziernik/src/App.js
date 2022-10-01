import logo from './logo.svg';
import React from 'react';
import './App.css';
import { createdId } from './helper'
import Posts from './router/posts/Posts';
import Contact from './view/Contact/Constact';
function App() {
  return (
    <div className="App">
 <Contact ></Contact>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {createdId()}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Posts
        value='opis działania cepa' 
        >

      </Posts>
      {/* <Posts.Provider  value='instrukacja telewizora' infoDoSpanaOdAppJs="Fajna komunikacja bez propsów po drodze"></Posts.Provider> */}
   
    </div>
  );
}
export const AppProvider = App.Provider
export default App;
