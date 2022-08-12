import { Router } from "express"; // Creating a new Router() object. Importing Express Types.
import { getAllLandings, getLandingsByName, getLandingsByMass, getLandingsByClass, createLanding, editLanding, deleteLanding, getAllNeas, createNeas } from "../controllers/apiControllers";
const apiRouter: Router = Router();


// Controllers here 👇
apiRouter.get('/landings', getAllLandings);
apiRouter.get('/landings/name/:name', getLandingsByName);
apiRouter.get('/landings/mass/:mass', getLandingsByMass);
apiRouter.get('/landings/class/:class', getLandingsByClass);
apiRouter.post('/landings/create', createLanding);
apiRouter.put('/landings/edit', editLanding);
apiRouter.delete('/landings/delete/:id', deleteLanding);

apiRouter.get('/neas', getAllNeas);
apiRouter.post('/neas/create', createNeas)

export default apiRouter;