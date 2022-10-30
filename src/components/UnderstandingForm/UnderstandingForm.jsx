import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

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
            alert('Please enter a number between 1 and 5!');
            return;
        }
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understandingRating
        })
        history.push('/supported');
    }

    // go to previous page
    const goBack = (evt) => {
        evt.preventDefault();
        history.push('/');
    }

    return (
        <>
        <form className='understanding' onSubmit={(evt)=>onNext(evt)}>
            <h1>How well are you understanding the content? </h1>
            <TextField
            required
            id="understandingInput"
            label="Understanding?"
            variant="standard"
            type="number" min="0" max="5"
            onChange={(evt)=>handleInput(evt)}
            value={understandingRating}
            />     
            <Button type="submit" variant="contained">
                Next
            </Button>
        </form>
        <Button type="button" onClick={(evt)=>goBack(evt)} 
                variant="outlined" color="secondary">
                Back
        </Button>
        </>
    )
}

export default UnderstandingForm;