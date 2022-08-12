// REQUERIMENTOS
import { Request, Response } from "express";
import LandingSchema, { ILanding } from '../models/landings';
import NeaSchema, { INea } from './../models/neas';


// LANDINGS //

export const getAllLandings = async (req: Request, res: Response) => {
    try {
        let data = await LandingSchema.find({}, "-_id");
        res.status(200).json(data);
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "Bad request."})
    }
};

export const getLandingsByName = async (req: Request, res: Response) => {
    try {
        const name  = req.params.name;
        const filter = { name: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() };
        const data = await LandingSchema.find(filter, "-_id");
        if (data.length == 0) {
            res.status(200).json({msg: "No such landings for the name provided"});
        } else {
            res.status(200).json(data);
        };
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: "Something went wrong. Bad request."})
    }
};

export const getLandingsByMass = async (req: Request, res: Response) => {
    try {
        const mass = parseInt(req.params.mass);
        const filter = { mass: mass };
        const data = await LandingSchema.find(filter, "-_id");
        if (!data) {
            res.status(200).json({msg: "No such landings for the mass provided"})
        } else {
            res.status(200).json(data)
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "Bad request." })
    }
};

export const getLandingsByClass = async (req: Request, res: Response) => {
    try {
        const recclass = req.params.class;
        const filter = { recclass: recclass.toUpperCase() };
        const query = await LandingSchema.find(filter, "-_id");
        if (query.length == 0) {
            res.status(200).json({ msg: "No such landings for the class provided." })
        } else {
            res.status(200).json(query)
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ msg: "Bad Request" })
    }
};

export const createLanding = async (req: Request, res: Response) => {
    try {
        const { name, id, nametype, recclass, mass, fall, reclat, reclong, geolocation } = req.body;
        const newLanding: ILanding = await new LandingSchema(req.body);
        newLanding.save((err, newLanding) => {
            err ? console.error(err) : console.log(`${newLanding.name} saved`)
        });
        res.status(201).json({msg: `${newLanding.name} saved in the database successfully.`})
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: "Bad request."})
    }
};

export const editLanding = async (req: Request, res: Response) => {
    try {
        const { name, id, nametype, recclass, mass, fall, reclat, reclong, geolocation } = req.body;
        const update = req.body;
        const filter = { id: id };
        await LandingSchema.findOneAndUpdate(filter, update, { new: true })
        .then(result =>{
            res.status(201).json({ msg: `Landing with ID ${filter.id} was updated successfully: ${result}`})
        })
    } catch (error) {
        console.error(error);
        res.status(400).json({msg: "Bad request."})
    }
};

export const deleteLanding = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await LandingSchema.deleteMany({ id: id })
        .then(result => {
            console.log(result);
            result.deletedCount == 1 
            ? res.status(200).json({ msg: `${result.deletedCount} landing deleted.` })
            : res.status(200).json({ msg: `${result.deletedCount} landings deleted.` })
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({msg: "Bad request"});
    }
};

export const getAllNeas = async (req: Request, res: Response) => {
    try {
        let data = await NeaSchema.find({}, "-_id");
        data.length == 0 ? res.status(400).json({msg: "Something went wrong"}) : res.status(200).json(data)
    } catch (error) {
        console.error(error);
        res.status(400).json({msg: "Bad Request"})
    }
};