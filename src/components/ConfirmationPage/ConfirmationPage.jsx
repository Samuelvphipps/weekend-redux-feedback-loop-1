import React from 'react';
import { useHistory } from "react-router-dom";

function ConfirmationPage() {

    const history = useHistory();

    const handleSubmit = () => {

        history.push('/');
    }

    return (
        <>
        <h1>Feedback Submitted!</h1>
        <section className="thanksSection">
            <h1>Thank You!</h1>
            <button type="button" onClick={(evt) => handleSubmit(evt)}>
                Leave New Feedback
            </button>
        </section>
        </>
    );
}

export default ConfirmationPage;