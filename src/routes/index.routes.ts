import { Express } from 'express';
import cors from 'cors';

const appRoutes = (app: Express) => {
    app.use(cors({ origin: '*', optionsSuccessStatus: 200 }))

}

export default appRoutes;