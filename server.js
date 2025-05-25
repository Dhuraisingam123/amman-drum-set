const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3001;

// In-memory storage
let users = [];

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Home page route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Sign Up (store in memory)
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  const exists = users.find(user => user.email === email);
  if (exists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  users.push({ username, email, password });
  res.json({ message: 'Signup successful' });
});

// Login (check against memory)
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
