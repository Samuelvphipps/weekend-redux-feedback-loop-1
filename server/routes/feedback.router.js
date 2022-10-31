const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/submitratings', (req, res) => {
    console.log('in POST request');
    const sqlText = `
        INSERT INTO feedback ("feeling", "understanding", 
        "support", "comments")
        VALUES($1, $2, $3, $4);`
    const sqlParams = [
        req.body.feelingRating, 
        req.body.understandingRating,
        req.body.supportedRating, 
        req.body.commentsRating
    ]
    pool.query(sqlText, sqlParams)
    .then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error in POST feedbck', error)
        res.sendStatus(500);
    });
})

module.exports = router;