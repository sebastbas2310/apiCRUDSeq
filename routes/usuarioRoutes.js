const express = requiere("express")
const router = express.Router()
const controller = require("../controller/usuarioController")

router.get("/", usuarioController.getUsers)
router.post("/", usuarioController.addUser)

module.exports = router

