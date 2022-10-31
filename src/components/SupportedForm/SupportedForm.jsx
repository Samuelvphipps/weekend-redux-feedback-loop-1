import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

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
        if (supportedRating == ''|| supportedRating < 1 || supportedRating > 5){
            alert('Please enter a number between 1 and 5!');
            return;
        }
        dispatch({
            type: 'SET_SUPPORTED',
            payload: supportedRating
        })
        history.push('/comments');
    }

    // go to previous page
    const goBack = (evt) => {
        evt.preventDefault();
        history.push('/understanding');
    }

    return (
        <>
        <form className='supported' onSubmit={(evt)=>onNext(evt)}>
            <h1>How well are you being supported?</h1>         
            <TextField
            required
            id="supportedInput"
            label="Supported?"
            variant="standard"
            type="number" min="0" max="5"
            onChange={(evt)=>handleInput(evt)}
            value={supportedRating}
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
    );
}

export default SupportedForm;