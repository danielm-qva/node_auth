import { Router } from 'express'
import handeError from '../util/HandlError';

const auth_Router = Router();

auth_Router.get('', (req, res) => {
    throw handeError(res, "Hola mundane", 404, req.body);
})


export default auth_Router;