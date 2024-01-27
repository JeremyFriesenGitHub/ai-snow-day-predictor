//constants
const express = require('express');
const router = express.Router();
const db = require('../database'); 

router.post('/dashboard/get-prediction', (req, res) => {
  const { date } = req.body;
  
  
  
  db.get("SELECT * FROM Historical_Data WHERE Date = ?", [date], (err, row) => {
    if (err) {
      res.status(500).send('Database error');
      return;
    }

    // Pass both existingOutcome and dateForPrediction regardless of the condition
    res.render('dashboard', { 
      existingOutcome: row ? row.Outcome : undefined,
      dateForPrediction: date ? date : undefined
    });
  });
});

module.exports = router;