const express = requiere("express")
const router = express.Router()
const controller = require("../controller/usuarioController")

router.get("/", usuarioController.getUsers)
router.post("/", usuarioController.addUsers)
router.post("/", usuarioController.updateUsers)

module.exports = router

