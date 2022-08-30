import { Router } from "express";

const userRouter: Router = Router();

userRouter.get('/signup');
userRouter.get('/login');
userRouter.get('/logout');


export default userRouter;