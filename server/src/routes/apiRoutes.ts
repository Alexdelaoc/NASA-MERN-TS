import { application, Router } from "express"; // Creating a new Router() object.
const apiRouter: Router = Router();

// Controllers here 👇
apiRouter.get('/', (req, res) => {
    res.send("Hello World").json;
});

// TELEFÉRICO DE FUENTEBÉ

export default apiRouter