//constants
const express = require('express');
const router = express.Router();
const db = require('../database');
 

router.post('/add-historical-data', (req, res) => {
    
    if (!req.session.adminId) {
      res.redirect('/admin');
      return;
    }

    // Extract data from the form submission
    const { date, temperature, windChill, visibility, rain, snow, snowOnGround, outcome } = req.body;

    const safeOutcome = (outcome !== undefined && outcome !== '') ? outcome : 0;
  
    // SQL query to insert historical data
    const query = "INSERT INTO Historical_Data (Date, Temperature, Wind_Chill, Visibility, Rain, Snow, Snow_On_Ground, Outcome) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  
    // Execute the query
    db.run(query, [date, temperature, windChill, visibility, rain, snow, snowOnGround, safeOutcome], (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while submitting historical data');
            return;
        }
    
        // Redirect to admin dashboard or show success message
        res.redirect('/login');
    });
});


 //export route
 module.exports = router;