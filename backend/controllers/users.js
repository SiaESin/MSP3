const User = require('../models/usersModel');
const { hashPassword, comparePassword } = require('../helper/hash');
const jwt = require('jsonwebtoken');

//registering user
const bookBoulevard = (req, res) => {
  res.json('Hello World!');
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation checks
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters long' });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({ name, email, password: hashedPassword });

    return res.status(201).json({ success: true, message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

//logging in user

const loginUser = async (req, res) => {
    try{ 
      const { email, password } = req.body;

      const user = await User.findOne({ email })
      if(!user) {
        return res.json({
          error: 'Email or password is incorrect'
        })
      }

      const match = await comparePassword(password, user.password)
      if(match){
      jwt.sign({email: user.email, id: user._id, name: user.name },process.env.JWT_SECRET, {}, (error, token) => {
        if(error) throw error;
        res.cookie('token', token).json(user)
      })
      }
      if (!match) {
        res.json({
          error: 'Email or password is incorrect'
        })
      }
    } catch(error){

    }
}

const getProfile = (req, res) => {
const {token} = req.cookies
if(token) {
  jwt.verify(token, process.env.JWT_SECRET, {}, (error, user) => {
    if(error) throw error;
    res.json(user)
  })
} else {
  res.json(null)
} 
}

module.exports = { bookBoulevard, registerUser, loginUser, getProfile };

