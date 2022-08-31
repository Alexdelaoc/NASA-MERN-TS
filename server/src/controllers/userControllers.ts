import { Request, Response } from "express";
import { User } from "./../models/users";

export const signUp = async (req: Request, res: Response) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        console.log(User)
        await User.create(req.body);
        res.status(200).json({msg: `Welcome aboard ${req.body.firstName}, your user was created successfully.`})
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: "Something went wrong. Bad request." + error})
    }
}