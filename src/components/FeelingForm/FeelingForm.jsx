import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

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
            alert('Please enter a number between 1 and 5!');
            return;
        }
        dispatch({
            type: 'SET_FEELING',
            payload: feelingRating
        })
        history.push('/understanding');
    }

    return (
        <>
        <form className='feeling' onSubmit={(evt)=>onNext(evt)}>
            <h1>How are you feeling today?</h1>
            {/* <label htmlFor="feelingInput">Feeling?</label> */}
            <TextField
            required
            id="feelingInput"
            label="Feeling?"
            variant="standard"
            type="number" min="0" max="5"
            onChange={(evt)=>handleInput(evt)}
            value={feelingRating}
            />
            <Button type="submit" variant="contained">
                Next
            </Button>
        </form>
        </>
    );
}

export default FeelingForm;