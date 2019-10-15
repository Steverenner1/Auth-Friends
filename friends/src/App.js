import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       Friends List
       <button>
         <Link to='/login'>Login</Link>
       </button>
      </header>
    </div>
  );
}

export default App;
