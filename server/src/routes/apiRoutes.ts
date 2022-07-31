import { Router, Request, Response, NextFunction } from "express"; // Creating a new Router() object. Importing Express Types.
const apiRouter: Router = Router();

// Controllers here 👇
apiRouter.get('/', (req: Request, res: Response) => {
    res.send("Hello World").json;
});

export default apiRouter