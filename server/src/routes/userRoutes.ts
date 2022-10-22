import { signUp } from './../controllers/userControllers';
import { Router } from "express";

const userRouter: Router = Router();


userRouter.post('/signup', signUp);
userRouter.get('/login');
userRouter.get('/logout');


export default userRouter;