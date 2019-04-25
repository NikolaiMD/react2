import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button/Button.js';
import CountButton from './button/CountButton.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Button text="OK" type="danger"/>
        <Button text="CANCEL"/>
        <Button text="SUBMIT" disabled={true}/>
        <hr/>
        <CountButton text="please wait..." delay="10" disabled={true}/>

      </header>
    </div>
  );
}

export default App;
