require("dotenv").config()

const express = require("express")
const cors = requiere("cors")
const helmet =require("helmet")
const morgan= requiere("morgan")
const bodyParser = requiere("body-parser")
const usuarioRoutes = require("../apiCRUDSeq/routes/usuarioRoutes")

const app = express()

//Middlewares
app.use(cors())
app.use(helmet())
app.use(morgan())
app.use(bodyParser())

app.use("api/usuarios", usuarioRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://`)
})