import express from 'express';

import { registerUser, loginUser, verifyOTP } from '../controllers/userAuth.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/verify', verifyOTP);
userRouter.post('/login', loginUser);

export default userRouter;