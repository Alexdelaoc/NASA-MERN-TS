import { Router } from "express"; // Creating a new Router() object. Importing Express Types.
import { getAllLandings,} from "../controllers/controllers";
const apiRouter: Router = Router();


// Controllers here 👇
apiRouter.get('/landings', getAllLandings);

export default apiRouter