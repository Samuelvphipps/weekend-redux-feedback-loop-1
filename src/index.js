import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

const feelingRating = (state ='0', action) => {
    switch(action.type) {
        case 'SET_FEELING':
            return action.payload;
        default: 
            return state;
    }
}

const store = createStore(
    combineReducers({
    feelingRating,

    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
