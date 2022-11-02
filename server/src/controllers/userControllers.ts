import { Request, Response } from "express";
import { User } from "./../models/users";

const bcrypt = require('bcrypt');

import { validateEmail, validatePassword } from "../utils/regex";

export const signUp = async (req: Request, res: Response) => {
    const { firstName, lastName, email, password } = req.body;

    // Storing hashed password.
    const hashedPassword = await bcrypt.hash(password, 10);

    // Making sure no repeated emails are saved.
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });

    if (!user && validateEmail(email) && validatePassword(password)) {

        try {
            console.log(User);
            User.create({ "firstName": firstName, "lastName": lastName, "email": email, "password": hashedPassword });
            res.status(200).json({ msg: `Welcome aboard ${req.body.firstName}, your user was created successfully.` })
        } catch (error) {
            console.log(error);
            res.status(400).json({ msg: "Something went wrong. Bad request. " + error })
        }

    } else {
        res.status(400).json({ msg: "Invalid email or password." })
    }
};