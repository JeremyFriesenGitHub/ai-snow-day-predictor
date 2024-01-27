const express = require('express');
const router = express.Router();
const axios = require('axios');

const FLASK_API_URL = 'http://flask-app:5000/predict';


router.post('/submit-weather-data', async (req, res) => {
    const { temperature, windChill, visibility, rain, snow, snowOnGround } = req.body;

    const inputData = preprocessData({ temperature, windChill, visibility, rain, snow, snowOnGround });

    try {
        const response = await axios.post(FLASK_API_URL, inputData);
        const prediction = response.data;

        // Store prediction in session
        req.session.predictionResult = prediction;
        req.session.dateForPrediction = req.body.date;

        // Redirect to dashboard
        return res.redirect('/dashboard');
    } catch (error) {
        console.error('Error calling Flask API:', error);
        return res.status(500).send('Error in getting prediction');
    }
});
function preprocessData(data) {
    // Keep your existing preprocessing logic here
    return Object.values(data).map(value => parseFloat(value) || 0);
}

module.exports = router;
