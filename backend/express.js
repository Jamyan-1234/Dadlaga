/*
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://tester:tester123456789@database.jm0jwxa.mongodb.net/Parent_Database?retryWrites=true&w=majority&appName=Database', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ email, password: hashedPassword });
  await newUser.save();
  res.status(201).send('User Registered');
});

app.post('/loginn', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' });
    res.status(200).json("Success");
  } else if (user) {
    res.status(401).json("Wrong password");
  } else {
    res.status(404).json("User not found");
  }
});

app.get('/profile', (req, res) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
      if (err) {
        res.status(401).send('Unauthorized');
      } else {
        res.status(200).send(`Welcome User ${decoded.id}`);
      }
    });
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
*/
