import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

const feelingRating = (state = 0, action) => {
    switch(action.type) {
        case 'SET_FEELING':
            return action.payload;
        default: 
            return state;
    }
}

const understandingRating = (state = 0, action) => {
    switch(action.type) {
        case 'SET_UNDERSTANDING':
            return action.payload;
        default: 
            return state;
    }
}

const supportedRating = (state = 0, action) => {
    switch(action.type) {
        case 'SET_SUPPORTED':
            return action.payload;
        default: 
            return state;
    }
}

const commentsRating = (state = '', action) => {
    switch(action.type) {
        case 'SET_COMMENTS':
            return action.payload;
        default: 
            return state;
    }
}

const store = createStore(
    combineReducers({
    feelingRating,
    understandingRating,
    supportedRating,
    commentsRating
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
