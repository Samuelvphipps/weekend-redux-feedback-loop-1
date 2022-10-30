import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';

function SupportedForm() {

    const history = useHistory();
    const dispatch = useDispatch();

    let [supportedRating, setSupportedRating] = useState(0);

    const handleInput = (evt) => {
        evt.preventDefault();
        setSupportedRating(event.target.value);
        console.log('supportedRating', supportedRating);
    }

    const onNext = (evt) => {
        evt.preventDefault();
        if (supportedRating == ''){
            alert('Please enter a number between 0 and 5!');
            return;
        }
        dispatch({
            type: 'SET_SUPPORTED',
            payload: supportedRating
        })
        history.push('/comments');
    }

    return (
        <form className='supported' onSubmit={(evt)=>onNext(evt)}>
            <h1>How well are you being supported?</h1>
            <label htmlFor="supportedInput">Supported?</label>
            <input onChange={(evt)=>handleInput(evt)} id="supportedInput" 
                type="number" min="0" max="5" value={supportedRating}
                required
            />           
            <button className='nextBtn' type="submit">Next</button>
        </form>
    )
}

export default SupportedForm;