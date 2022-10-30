import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';

function CommentsForm() {

    const history = useHistory();
    const dispatch = useDispatch();

    let [commentsRating, setCommentsRating] = useState(0);

    const handleInput = (evt) => {
        evt.preventDefault();
        setCommentsRating(event.target.value);
        console.log('commentsRating', commentsRating);
    }

    const onNext = (evt) => {
        evt.preventDefault();
        if (commentsRating == ''){
            alert('Please enter a number between 0 and 5!');
            return;
        }
        dispatch({
            type: 'SET_COMMENTS',
            payload: commentsRating
        })
        //history.push('/review');
    }

    return (
        <form className='comments' onSubmit={(evt)=>onNext(evt)}>
            <h1>Any comments you want to leave?</h1>
            <label htmlFor="commentsInput">Comments</label>
            <input onChange={(evt)=>handleInput(evt)} id="commentsInput" 
                type="text" value={commentsRating}
                required
            />           
            <button type="submit">Next</button>
        </form>
    )
}

export default CommentsForm;