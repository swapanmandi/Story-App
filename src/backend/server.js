const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());

app.post('/api/data', (req, res) => {
  // Step 3: Validate the incoming data
  // ...
  
  // Step 4: Write the data to the JSON file
  fs.writeFile('data.json', JSON.stringify(req.body), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving data');
    } else {
      res.send('Data saved successfully');
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
