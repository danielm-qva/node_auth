
import { sequelize } from '../config/config.database'
import { DataTypes } from 'sequelize'


export const Roles = sequelize.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nameRol: {
        type: DataTypes.STRING,
        allowNull: true,
    }
},
    {
        timestamps: false,
    })