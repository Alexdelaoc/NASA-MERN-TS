import { Router } from "express"; // Creating a new Router() object. Importing Express Types.
import { getLandings, getLandingsByName, getLandingsByMass, getLandingsByClass, createLanding, editLanding, deleteLanding  } from "../controllers/landingsControllers";
import { getAllNeas, createNeas, editNea, deleteNeas } from "../controllers/neasControllers";

const apiRouter: Router = Router();

// Controllers here 👇
apiRouter.get('/landings', getLandings);
apiRouter.get('/landings/name/:name', getLandingsByName);
apiRouter.get('/landings/mass/:mass', getLandingsByMass);
apiRouter.get('/landings/class/:class', getLandingsByClass);
apiRouter.post('/landings/create', createLanding);
apiRouter.put('/landings/edit', editLanding);
apiRouter.delete('/landings/delete', deleteLanding);

apiRouter.get('/neas', getAllNeas);
apiRouter.post('/neas/create', createNeas);
apiRouter.put('/neas/edit', editNea);
apiRouter.delete('/neas/delete', deleteNeas);

export default apiRouter;