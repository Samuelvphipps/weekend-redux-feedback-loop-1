import React from 'react';
import axios from 'axios';
import {Route, HashRouter as Router, Link} from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import FeelingForm from '../FeelingForm/FeelingForm';

function App() {



  return (
    
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
    <Route exact path = "/feeling">
      <FeelingForm />
    </Route>

    
    </Router>
  );
}

export default App;