import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

function CommentsForm() {

    const history = useHistory();
    const dispatch = useDispatch();

    let [commentsRating, setCommentsRating] = useState('');

    const handleInput = (evt) => {
        evt.preventDefault();
        setCommentsRating(event.target.value);
        console.log('commentsRating', commentsRating);
    }

    const onNext = (evt) => {
        evt.preventDefault();
        if (commentsRating == ''){
            alert('Please enter a comment!');
            return;
        }
        dispatch({
            type: 'SET_COMMENTS',
            payload: commentsRating
        })
        history.push('/review');
    }

    // go to previous page
    const goBack = (evt) => {
        evt.preventDefault();
        history.push('/supported');
    }

    return (
        <>
        <form className='comments' onSubmit={(evt)=>onNext(evt)}>
            <h1>Any comments you want to leave?</h1>
            {/* <label htmlFor="commentsInput">Comments</label>
            <input onChange={(evt)=>handleInput(evt)} id="commentsInput" 
                type="text" value={commentsRating}
                required
            />            */}
            <TextField
            required
            id="commentsInput"
            label="Comments?"
            variant="standard"
            type="text"
            onChange={(evt)=>handleInput(evt)}
            value={commentsRating}
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

export default CommentsForm;