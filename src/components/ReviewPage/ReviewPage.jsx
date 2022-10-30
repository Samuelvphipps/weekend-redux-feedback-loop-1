import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";

function ReviewPage({submitRatings}) {

    const history = useHistory();

    const feelingRating = useSelector((store) => store.feelingRating); 
    const understandingRating = useSelector((store) => store.understandingRating);
    const supportedRating = useSelector((store) => store.supportedRating);
    const commentsRating = useSelector((store) => store.commentsRating);

    const handleSubmit = () => {
        submitRatings();
        history.push('/confirmation');
    }

    return (
        <>
            <h1>Review your Feedback</h1>
            <h2>Feelings: {feelingRating}</h2>
            <h2>Understanding: {understandingRating}</h2>
            <h2>Support: {supportedRating}</h2>
            <h2>Comments: {commentsRating}</h2>

            <Button 
                type="submit" 
                variant="contained"
                onClick={(evt)=>handleSubmit(evt)}>
                Submit
            </Button>
        </>
    );
}

export default ReviewPage;