import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModel } from '../models/usersModel.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  const user = await UserModel.findOne({ email });
  if (user) {
    return res.status(400).json({ message: 'Email already exists' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({ username, password: hashedPassword });
  await newUser.save();
  res.json({ message: 'User registered successfully' });
});

router.post('/login', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name) {
       return res.json({ error: 'Name is required' });
     }
  const user = await UserModel.findOne({ email });

  if (!email) {
    return res.json({ message: 'Email or password is incorrect' });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.json({ message: 'Email or password is incorrect' });
  }
  const token = jwt.sign({ id: user._id }, 'secret');
  res.json({ token, userID: user._id });
});

export { router as registerUser };

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, 'secret', (e) => {
      if (e) {
        return res.sendStatus(403);
      }
      next();
    });
  } else {
    res.sendStatus(401);
  }
};










// // const jwt = require('json-web-token')
// // const bcrypt = require('bcrypt');
// const { db } = require('../models/usersModel');
// // const jwt = require('jsonwebtoken');
// // const router = require('express').Router();
// const { UserModel } = db;
// const User = require('../models/usersModel');

// const test = (req, res) => {
//   res.json('Hello World!');
// };

// const registerUser = async (req, res) => {
//   try {
//     const {name, email, password} = req.body;
//     if (!name) {
//       return res.json({ error: 'Name is required' });
//     }   
//     if (!password || password.length < 6) {
//       return res.json({ error: 'Password must be at least 6 characters long' });
//     }
//     // const exist = await User.findOne({ email });
//     // if (exist) {
//     //   return res.json({ error: 'Email already exists' });
//     // }
//     res.json({ message: 'User registered successfully' });
//     const user = await User.create({
//       name,
//       email,
//       password,
//     });
//     return res.json(user);
//   } catch (error) {
//   console.log(error);
// }
// };

// module.exports = { test, registerUser };

// const hashedPassword = await bcrypt.hash(password, 10);
// const newUser = new User({ email, password: hashedPassword });
// await newUser.save();



// router.post('/signup', async (req, res) => {
  //   const { email , password } = req.body;
  
  //   const user = await UserModel.findOne({ email });
  //   if (user) {
    //     return res.status(400).json({ message: 'Email already exists' });
    //   }
    //   const hashedPassword = await bcrypt.hash(password, 10);
    //   const newUser = new UserModel({ email, password: hashedPassword });
    //   await newUser.save();
    //   res.json({ message: 'User registered successfully' });
    // });
    
    // router.post('/login', async (req, res) => {
      //   const { email, password } = req.body;
      
      //   const user = await UserModel.findOne({ email });
      
      //   if (!user) {
        //     return res.json({ message: 'Email or password is incorrect' });
        //   }
        //   const isPasswordValid = await bcrypt.compare(password, user.password);
        //   if (!isPasswordValid) {
          //     return res.json({ message: 'Email or password is incorrect' });
//   }
//   const token = jwt.sign({ id: user._id }, 'secret');
//   res.json({ token, userID: user._id });
// });

// export { router as userRouter };

// export const verifyToken = (req, res, next) => {
  //   const token = req.headers.authorization;
  //   if (token) {
    //     jwt.verify(token, 'secret', (err) => {
      //       if (err) {
//         return res.sendStatus(403);
//       }
//       next();
//     });
//   } else {
//     res.sendStatus(401);
//   }
// };
