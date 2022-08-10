import { Router } from "express"; // Creating a new Router() object. Importing Express Types.
import { getAllLandings, getLandingsByName, getLandingsByMass, getLandingsByClass} from "../controllers/controllers";
const apiRouter: Router = Router();


// Controllers here 👇
apiRouter.get('/landings', getAllLandings);
apiRouter.get('/landings/name/:name', getLandingsByName);
apiRouter.get('/landings/mass/:mass', getLandingsByMass);
apiRouter.get('/landings/class/:class', getLandingsByClass);


export default apiRouter