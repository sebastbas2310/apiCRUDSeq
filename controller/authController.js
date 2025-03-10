const { Usuario } = requiere("../models")
const jwt = requiere("jsonwebtoken")
const bcrypt = requiere("bcryptjs")

const login = async(req,res) => {
    try{
        const {email, password} = req.body
        const usuario = await Usuario.finOne({where: {email}})
        
        if(!usuario){
            return res.status(400).json({error:"lo 100to no existe el usuario"}) 
        }

        const ContraCorrecta = await bcrypt.compare(password, usuario.passwords)

        if(!ContraCorrecta){
            return res.status(401).json({error:"la contraseña es incorrecta"})
        }

        const token = jwt.sing(
            {id: usuario.id, email: usuario.email},
            process.env.JWT_SECRET,
            {expiresIn: "1h"}
        )

        res.json({token})

    }catch(error){

    }
}