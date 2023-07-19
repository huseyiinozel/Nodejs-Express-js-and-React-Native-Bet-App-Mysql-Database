const sequelize = require("../data/db")
const {DataTypes} = require("sequelize")

const Football = sequelize.define("football",{
    matchname:{
        type: DataTypes.STRING,
        allowNull:false
    },
    code:{
        type: DataTypes.STRING,
        allowNull:false

    },
    date:{
        type: DataTypes.STRING,
        allowNull:false
    },
    guess:{
        type: DataTypes.STRING,
        allowNull:false

    },
    bet:{
        type: DataTypes.STRING,
        allowNull:false
    },
    rate:{
        type: DataTypes.STRING,
        allowNull:false
    },
    played:{
        type: DataTypes.STRING,
        allowNull:false
        
    }
},
{timestamps:true}
);

module.exports = Football;