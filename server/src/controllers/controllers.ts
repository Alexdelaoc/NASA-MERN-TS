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

