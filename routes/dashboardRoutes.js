//constants
const express = require('express');
const router = express.Router();
const db = require('../database'); // Ensure this points to your database module

router.post('/dashboard/get-prediction', (req, res) => {
  const { date } = req.body;
  
  // Check if the date exists in the database
  db.get("SELECT * FROM Historical_Data WHERE Date = ?", [date], (err, row) => {
    if (err) {
      res.status(500).send('Database error');
      return;
    }

    // Pass both existingOutcome and dateForPrediction regardless of the condition
    res.render('dashboard', { 
      existingOutcome: row ? row.Outcome : undefined,
      dateForPrediction: date
    });
  });
});

module.exports = router;