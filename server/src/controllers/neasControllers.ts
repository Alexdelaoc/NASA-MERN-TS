import { getNeasInRange, getNeasFromYear } from './../utils/neasUtils';
import { CallbackError } from 'mongoose';
import { Request, Response } from "express";
import NeaSchema, { INea } from './../models/neas';

export const getNeas = async (req: Request, res: Response) => {
    try {
        if (req.query.from && req.query.to) {
            const years = {
                from: req.query.from,
                to: req.query.to
            };
            const data = await getNeasInRange(years);
            if (!data || data.length === 0) {
                res.status(400).json({ msg: "Something went wrong" })
            } else {
                res.status(200).json(data)
            }
        } else if (req.query.from) {
            const years = { from: req.query.from };
            const data = await getNeasFromYear(years);
            if (!data || data.length === 0) {
                res.status(400).json({ msg: "Something went wrong" })
            } else {
                res.status(200).json(data)
            }
        } else if (req.query.to) {
            const years = { from: req.query.to };
            const data = await getNeasFromYear(years);
            if (!data || data.length === 0) {
                res.status(400).json({ msg: "Something went wrong" })
            } else {
                res.status(200).json(data)
            }
        } else if (req.query.class) {
            
        } else {
            let data = await NeaSchema.find({}, "-_id");
            data.length == 0
                ? res.status(400).json({ msg: "Something went wrong" })
                : res.status(200).json(data)
        }
    } catch (error) {
        console.error(error);
        res.status(400).json({ msg: "Something went wrong. Bad request." })
    }
};

export const createNeas = async (req: Request, res: Response) => {
    try {
        const { designation, discovery_date, h_mag, moid_au, q_au_1, q_au_2, period_yr, i_deg, pha, orbit_class } = req.body;
        const newNea: INea = await new NeaSchema(req.body);
        newNea.save((err: CallbackError, newNea: INea) => {
            err
                ? res.status(200)
                : res.status(201).json({ msg: `${newNea.designation}, ${newNea.orbit_class} saved in the database successfully.` })
        })
    } catch (error) {
        res.status(400).json({ msg: "Something went wrong. Bad request." })
    }
};

export const editNea = async (req: Request, res: Response) => {
    try {
        const { designation, discovery_date, h_mag, moid_au, q_au_1, q_au_2, period_yr, i_deg, pha, orbit_class } = req.body;
        const update = req.body;
        const filter = { designation: designation };
        await NeaSchema.findOneAndUpdate(filter, update, { new: true })
            .then(result => {
                res.status(201).json({ msg: `Near Earth Object with designation ${filter.designation} was updated successfully: ${result}` })
            })
    } catch (error) {
        console.error(error);
        res.status(400).json({ msg: "Something went wrong. Bad request." })
    }
};

export const deleteNeas = async (req: Request, res: Response) => {
    try {
        const { designation } = req.body;
        const filter = { designation: designation }
        NeaSchema.deleteMany(filter)
            .then(result => {
                result.deletedCount == 1
                    ? res.status(200).json({ msg: `${result.deletedCount} landing deleted.` })
                    : res.status(200).json({ msg: `${result.deletedCount} landings deleted.` })
            })
    } catch (error) {
        console.error(error);
        res.status(400).json({ msg: "Something went wrong. Bad request." })
    }
};