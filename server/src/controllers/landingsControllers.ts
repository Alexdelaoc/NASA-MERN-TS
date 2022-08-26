// REQUERIMENTOS
import { Request, Response } from "express";
import LandingSchema, { ILanding } from "../models/landings";
import { getLandingsByParams, getLandingsByQuery, getLandingsFromYear, getLandingsToYear, getLandingsInRange } from "../utils/landingUtils";

// Defining the Interfaces from the Request Object so it gives no errors:
interface RequestParams {
    name: string,
    mass: number,
    class: string
};
interface ResponseBody { };
interface RequestBody { };
interface RequestQuery {
    minimum_mass: number,
    from: number,
    to: number,
    page: number,
    limit: number
};

export const getLandings = async (req: Request<RequestParams, ResponseBody, RequestBody, RequestQuery>, res: Response) => {
    try {
        if (req.query.minimum_mass) {
            const minimum_mass = req.query.minimum_mass;
            const data = await getLandingsByQuery(minimum_mass);
            if (!data || data.length === 0) {
                res.status(200).json({ msg: "No such landings for the mass provided." })
            } else {
                res.status(200).json(data)
            }

        } else if (req.query.from && req.query.to) {
            const years = {
                from: req.query.from,
                to: req.query.to
            };
            const data = await getLandingsInRange(years);
            if (!data || data.length === 0) {
                res.status(200).json({
                    msg: "No such landings for the mass provided.",
                    log: `${console.log(data)}`
                })
            } else {
                res.status(200).json(data)
            }

        } else if (req.query.from) {
            const years = { from: req.query.from };
            const data = await getLandingsFromYear(years);
            if (!data || data.length === 0) {
                res.status(200).json({
                    msg: "No such landings for the mass provided.",
                    log: `${console.log(data)}`
                })
            } else {
                res.status(200).json(data)
            }

        } else if (req.query.to) {
            const years = { to: req.query.to };
            const data = await getLandingsToYear(years);
            if (!data || data.length === 0) {
                res.status(200).json({
                    msg: "No such landings for the mass provided.",
                    log: `${console.log(data)}`
                })
            } else {
                res.status(200).json(data)
            }

        } else {
            const { page = 1, limit = 10 } = req.query
            let data = await LandingSchema.find({}, "-_id")
                .limit(limit * 1)
                .skip((page - 1) * limit);
            res.status(200).json(data);
        }

    } catch (error) {
        console.log(error)
        res.status(400).json({
            msg: "Something went wrong. Bad request.",
            error: `${error}`
        })
    }
};

export const getLandingsByName = async (req: Request<RequestParams, ResponseBody, RequestBody, RequestQuery>, res: Response) => {
    try {
        const name = req.params.name;
        const filter = { name: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() };
        const data = await LandingSchema.find(filter, "-_id");
        if (!data || data.length == 0) {
            res.status(200).json({ msg: "No such landings for the name provided" });
        } else {
            res.status(200).json(data);
        };
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: "Something went wrong. Bad request.",
            error: `${error}`
        })
    }
};

export const getLandingsByMass = async (req: Request<RequestParams, ResponseBody, RequestBody, RequestQuery>, res: Response) => {
    try {
        const mass = req.params.mass;
        
        const { page = 1, limit = 10 } = req.query
        const data = await getLandingsByParams(mass, req.query.page, req.query.limit);
        if (!data || data.length === 0) {
            res.status(200).json({ msg: "No such landings for the mass provided" })
        } else {
            res.status(200).json(data)
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: "Something went wrong. Bad request.",
            error: `${error}`
        })
    }
};

export const getLandingsByClass = async (req: Request<RequestParams, ResponseBody, RequestBody, RequestQuery>, res: Response) => {
    try {
        const recclass = req.params.class;
        const filter = { recclass: recclass.toUpperCase() };
        const { page = 1, limit = 10 } = req.query
        const data = await LandingSchema.find(filter, "-_id")
            .limit(limit * 1)
            .skip((page - 1) * limit);;
        if (data.length == 0) {
            res.status(200).json({ msg: "No such landings for the class provided." })
        } else {
            res.status(200).json(data)
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ msg: "Something went wrong. Bad request." })
    }
};

export const createLanding = async (req: Request, res: Response) => {
    try {
        const { name, id, nametype, recclass, mass, fall, reclat, reclong, geolocation } = req.body;
        const newLanding: ILanding = await new LandingSchema(req.body);
        newLanding.save((err, newLanding) => {
            err
                ? res.status(200).json({ msg: `${err}` })
                : res.status(201).json({ msg: `${newLanding.name} saved in the database successfully.` })
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "Something went wrong. Bad request." })
    }
};

export const editLanding = async (req: Request, res: Response) => {
    try {
        const { name, id, nametype, recclass, mass, fall, reclat, reclong, geolocation } = req.body;
        const update = req.body;
        const filter = { id: id };
        await LandingSchema.findOneAndUpdate(filter, update, { new: true })
            .then(result => {
                res.status(201).json({ msg: `Landing with ID ${filter.id} was updated successfully: ${result}` })
            })
    } catch (error) {
        console.error(error);
        res.status(400).json({ msg: "Something went wrong. Bad request." })
    }
};

export const deleteLanding = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;
        const filter = { id: id };
        LandingSchema.deleteMany(filter)
            .then(result => {
                result.deletedCount == 1
                    ? res.status(200).json({ msg: `${result.deletedCount} landing deleted.` })
                    : res.status(200).json({ msg: `${result.deletedCount} landings deleted.` })
            });
    } catch (error) {
        console.error(error);
        res.status(400).json({ msg: "Something went wrong. Bad request." });
    }
};