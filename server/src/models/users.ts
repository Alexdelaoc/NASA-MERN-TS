const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('./../config/elephantsql');

export interface IUser {
    user_id?: number | null
    firstName: string
    lastName: string
    email: string
    password: string
    refreshToken: string
    isAdmin: boolean
};

const User = db.define('User', {
    user_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    refreshToken: {
        type: DataTypes.STRING,
        allowNull: true
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
},
    {
        underscored: true,
        tableName: 'Users'
    });

module.exports = User;