const express = require('express');
const app = express();
const port = 8080;

// MYSQL CONNECTION---------------------------------
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'clothingstore.caxmmj0d1kas.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'ClothingStore2shirt',
  database: 'clothingstoredb',
  port: '3306'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to the database');
  }
});

//API CONNECTION TEST-----------------------------
app.get('/api/fetch-user-data', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
      if (err) {
        console.error('Error fetching data:', err);
        res.status(500).send('Error fetching data');
      } else {
        res.json(results);
      }
    });
  });

  //API REQUESTS (messing around with stuff)------------------------------------
app.use( express.json() )

app.get('/tshirt', (req, res) => {
  res.status(200).send({
    tshirt: '👕',
    size: 'large'
  })
});

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!'})
    }

    res.send({
        tshirt: `👕 with your ${logo} and ID of ${id}`
    })
});

app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}`);
});
