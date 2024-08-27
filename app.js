const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Jenkins with Docker and Ansible!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

