import { Router } from 'express'
import { login, register } from '../controller/user.controller';
const auth_Router = Router();

auth_Router.get('/login', login)
auth_Router.post('/register', register)

export default auth_Router;