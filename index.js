const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const USER_ID = "john_doe_17091999";
const EMAIL = "john@xyz.com";
const ROLL_NUMBER = "ABCD123";

app.post('/bfhl', (req, res) => {
    let numbers = [];
    let alphabets = [];
    let highest_alphabet = '';

    for (let item of req.body.data) {
        if (isNaN(item)) {
            alphabets.push(item);
            if (!highest_alphabet || item.toLowerCase() > highest_alphabet.toLowerCase()) {
                highest_alphabet = item;
            }
        } else {
            numbers.push(item);
        }
    }

    res.json({
        is_success: true,
        user_id: USER_ID,
        email: EMAIL,
        roll_number: ROLL_NUMBER,
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highest_alphabet ? [highest_alphabet] : []
    });
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
