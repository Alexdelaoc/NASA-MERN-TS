import { Router } from "express"; // Creating a new Router() object. Importing Express Types.
import { getAllLandings, getLandingsByName} from "../controllers/controllers";
const apiRouter: Router = Router();


// Controllers here 👇
apiRouter.get('/landings', getAllLandings);
apiRouter.get('/landings/name/:name', getLandingsByName)

export default apiRouter