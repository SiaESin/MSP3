const User = require('../models/usersModel');
const { hashPassword, comparePassword } = require('../helper/hash');

//registering user
const bookBoulevard = (req, res) => {
  res.json('Hello World!');
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      return res.json({ error: 'Name is required' });
    }   
    if (!password || password.length < 6) {
      return res.json({ error: 'Password must be at least 6 characters long' });
    }
    // const exist = await User.findOne({ email });
    // if (exist) {
    //   return res.json({ error: 'Email already exists' });
    // }
    
    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.json(user);
  } catch (error) {
  console.log(error);
}
};

//logging in user

const loginUser = async (req, res) => {
    try{ 
      const { email, password } = req.body;

      const user = await User.findOne({ email })
      if(!user) {
        return res.json({
          error: 'Email not found'
        })
      }

      const match = await comparePassword(password, user.password)
      if(match){
        res.json('matched')
      }
    } catch(error){

    }
}

module.exports = { bookBoulevard, registerUser, loginUser };

