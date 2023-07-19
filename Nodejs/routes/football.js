const express = require("express")
const router = express.Router()

const footballcontroler = require("../controllers/football")


router.get("/football",footballcontroler.get_data)
router.get("/football/api",footballcontroler.get_apidata)

module.exports = router;