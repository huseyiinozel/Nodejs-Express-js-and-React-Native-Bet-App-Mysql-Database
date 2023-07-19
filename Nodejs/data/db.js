const config = require("../config")
const Sequelize =require("sequelize")
const sequelize = new Sequelize(config.db.database,config.db.user,config.db.password,{
    dialect:"mysql",
    host: config.db.host,
    define:{
        timestamps:false
    }
})


async function connect () {
try {
    await sequelize.authenticate()
    console.log("baglanti yapidi")
}

catch(err){
    console.log("baglanti hatası",err)
}
}

connect();
module.exports = sequelize;
