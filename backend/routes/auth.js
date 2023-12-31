const express = require('express')
const router = express.Router()
const cors = require('cors')
const { bookBoulevard, registerUser, loginUser, getProfile } = require('../controllers/users')

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000',
    })
)

router.get('/', bookBoulevard)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', getProfile)

module.exports = router

//crash 45:30