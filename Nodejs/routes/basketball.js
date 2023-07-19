const express = require("express")
const router = express.Router()

const basketballcontroler = require("../controllers/basketball")


router.get("/basketball",basketballcontroler.get_data)
router.get("/basketball/api",basketballcontroler.get_apidata)

module.exports = router;