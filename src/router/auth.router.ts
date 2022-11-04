import { Router } from 'express'

const auth_Router = Router();

auth_Router.get('', (req, res) => {
    console.log(req.body);
    res.send("hola mundo ")
})


export default auth_Router;