const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const region = process.env.AWS_REGION || 'unknown';
  res.send(`<h1>Hello from ${region}!</h1>`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
