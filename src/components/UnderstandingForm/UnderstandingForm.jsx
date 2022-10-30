import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {Route, HashRouter as Router, Link} from 'react-router-dom';


function UnderstandingForm() {

    const history = useHistory();
    const dispatch = useDispatch();

    let [understandingRating, setUnderstandingRating] = useState(0);

    const handleInput = (evt) => {
        evt.preventDefault();
        setUnderstandingRating(event.target.value);
        console.log('understanding', understandingRating);
    }

    const onNext = (evt) => {
        evt.preventDefault();
        if (understandingRating == ''){
            alert('Please enter a number between 0 and 5!');
            return;
        }
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understandingRating
        })
        history.push('/supported');
    }

    return (
        <form className='understanding' onSubmit={(evt)=>onNext(evt)}>
            <h1>How well are you understanding the content? </h1>
            <label htmlFor="understandingInput">Understanding?</label>
            <input onChange={(evt)=>handleInput(evt)} id="understandingInput" 
                type="number" min="0" max="5" value={understandingRating}
                required
            />           
            <button className='nextBtn' type="submit">Next</button>
        </form>
    )
}

export default UnderstandingForm;