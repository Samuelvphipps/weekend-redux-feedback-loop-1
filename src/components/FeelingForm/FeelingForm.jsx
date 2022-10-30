import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {Route, HashRouter as Router, Link} from 'react-router-dom';


function FeelingForm() {

    const history = useHistory();
    const dispatch = useDispatch();

    let [feelingRating, setFeelingRating] = useState(0);

    const handleInput = (evt) => {
        evt.preventDefault();
        setFeelingRating(event.target.value);
        console.log('feelingrating', feelingRating);
    }

    const onNext = (evt) => {
        evt.preventDefault();
        if (feelingRating == ''){
            alert('Please enter a number between 0 and 5!');
            return;
        }

        dispatch({
            type: 'SET_FEELING',
            payload: feelingRating
        })
        //history.push('/understanding');
    }

    return (
        <form className='feeling' onSubmit={(evt)=>onNext(evt)}>
            <h1>How are you feeling today?</h1>
            <label htmlFor="feelingInput">Feeling?</label>
            <input onChange={(evt)=>handleInput(evt)} id="feelingInput" 
                type="number" min="0" max="5" value={feelingRating}
                required
            />           
            <button type="submit">Next</button>
        </form>
    )
}

export default FeelingForm;