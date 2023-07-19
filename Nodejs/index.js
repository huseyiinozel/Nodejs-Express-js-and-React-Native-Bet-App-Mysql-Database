const express = require("express")
const app =  express()
app.use(express.urlencoded({extended: false}));
const sequelize = require("./data/db")

const footballroutes = require("./routes/football")
const basketballroutes = require("./routes/basketball")
const Football= require("./models/football")
const Basketball= require("./models/basketball")
app.use(footballroutes)
app.use(basketballroutes)



sequelize
  .sync()
  .then(() => {
    console.log("Veritabanı tabloları eşitlendi.");
  })
  .catch((err) => {
    console.error("Veritabanı tabloları eşitleme hatası:", err);
  });

app.listen(3000,function(){
  console.log("port çalışıyor")
})