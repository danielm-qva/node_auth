import { Sequelize } from 'sequelize'

import env from 'dotenv'

env.config();


export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: String(process.env.user_PosgreSQL),
    password: String(process.env.password_PosgreSQL),
    port: 5432,
    database: 'node_auth'
})

//const sequelize = new Sequelize('postgres://dbnode_user:mjE7mZgtPiNcr6IoCIzpwoLunbDkVV45@dpg-cdi1dn2rrk06v9t52oug-a.oregon-postgres.render.com/dbnode');

const dbconnect = async () => {
    try {
        await sequelize.authenticate();
        console.log("db running");
    } catch (error) {
        console.log("Error connecting to", error);
    }
}

export default dbconnect