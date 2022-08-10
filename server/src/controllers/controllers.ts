// REQUERIMENTOS
import { Request, Response, NextFunction } from "express";
import landingSchema, { iLanding } from './../models/landings';

// LANDINGS //

export const getAllLandings = async (req: Request, res: Response) => {
    let data;
    try {
        data = await landingSchema.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error })
    }
};

export const getLandingsByName = async (req: Request, res: Response) => {
    try {
        const name  = req.params.name;
        const query = { name: name };
        const data = await landingSchema.find(query).exec();
        if (data.length === 0) {
            res.status(200).json({msg: "No such landings for the name provided"})
        } else {
            res.status(200).json(data)
        }
    } catch (error) {
        res.status(400).json({error: `${error}`})
    }
}