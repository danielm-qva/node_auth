import express from 'express';
import dbconect, { sequelize } from './config/config.database'
import cors from 'cors'

// import router
import auth_Router from './router/auth.router';

const app = express();

//models
import './model/rol.model'
import './model/user.model'
//cors 
app.use(cors());

//body Parse
app.use(express.json());

//router 
app.use(auth_Router);

//server
app.listen(3000, async () => {
    dbconect();
    await sequelize.sync(); // sync dbconect with db 
    console.log("Listes");
});