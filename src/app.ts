import express from 'express';
import dbconect from './config/config.database'
import cors from 'cors'

// import router
import auth_Router from './router/auth.router';

const app = express();

//cors 
app.use(cors());

//body Parse
app.use(express.json());

//router 
app.use(auth_Router);


//server
app.listen(3000, () => {
    dbconect();
    console.log("Listes");
});