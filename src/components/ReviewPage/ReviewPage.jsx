import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from 'axios';

function ReviewPage() {

    const history = useHistory();

    const feelingRating = useSelector((store) => store.feelingRating); 
    const understandingRating = useSelector((store) => store.understandingRating);
    const supportedRating = useSelector((store) => store.supportedRating);
    const commentsRating = useSelector((store) => store.commentsRating);

    const onSubmit = () => {
        //evt.preventDefault();

        // create object to send to database
        const ratings = {
            feelingRating: feelingRating,
            understandingRating: understandingRating,
            supportedRating: supportedRating,
            commentsRating: commentsRating
        }

        // POST feedback endpoint
        axios({
            method: 'POST',
            url: '/',
            data: ratings
        })
        .then((response) => {
            console.log('feedback recorded');
        })
        .catch((error) => {
            console.error('error posting feedback', error);
        });
        //history.push('/feedback');
    }

    return (
        <>
            <h1>Review your Feedback</h1>
            <h2>Feelings: {feelingRating}</h2>
            <h2>Understanding: {understandingRating}</h2>
            <h2>Support: {supportedRating}</h2>
            <h2>Comments: {commentsRating}</h2>
            <button className='submitBtn' onClick={(evt)=>onSubmit(evt)} type='submit'>
                Submit
            </button>
        </>
    );
}

export default ReviewPage;