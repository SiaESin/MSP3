import express from 'express';
import cors from 'cors';
import { registerUser } from '../controllers/users.js';

const router = express.Router()
//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000',
    })
)

// router.get('/', test)
router.post('/register', registerUser)
// router.post('/login', loginUser)

export { router as userRouter };

//crash 45:30