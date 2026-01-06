const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const region = process.env.AWS_REGION || 'unknown';
  res.send(`<h1>Hello from ${region}!</h1>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
