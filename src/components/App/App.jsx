import React from 'react';
import axios from 'axios';
import {Route, HashRouter as Router, Link} from 'react-router-dom';
import './App.css';
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";

import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportedForm from '../SupportedForm/SupportedForm';
import CommentsForm from '../CommentsForm/ComentsForm';
import ReviewPage from '../ReviewPage/ReviewPage';
import ConfirmationPage from '../ConfirmationPage/ConfirmationPage';

function App() {

  const feelingRating = useSelector((store) => store.feelingRating); 
  const understandingRating = useSelector((store) => store.understandingRating);
  const supportedRating = useSelector((store) => store.supportedRating);
  const commentsRating = useSelector((store) => store.commentsRating);

  const submitRatings = () => {
    //evt.preventDefault();
    // create object to send to database
    const ratings = {
        feelingRating: feelingRating,
        understandingRating: understandingRating,
        supportedRating: supportedRating,
        commentsRating: commentsRating
    }

    // POST feedback endpoint
    axios({
        method: 'POST',
        url: '/',
        data: ratings
    })
    .then((response) => {
        console.log('feedback recorded:', ratings);
    })
    .catch((error) => {
        console.error('error posting feedback', error);
    });
}

  return (
    
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
    <Route exact path = "/">
      <FeelingForm />
    </Route>

    <Route exact path = "/understanding">
      <UnderstandingForm />
    </Route>

    <Route exact path = "/supported">
      <SupportedForm />
    </Route>

    <Route exact path = "/comments">
      <CommentsForm />
    </Route>

    <Route exact path = "/review">
      <ReviewPage submitRatings={submitRatings} />
    </Route>

    <Route exact path = "/confirmation">
      <ConfirmationPage />
    </Route>

    </Router>
  );
}

export default App;