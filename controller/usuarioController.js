const { Usuario } = require("../models")

const getUsers = async (req,res) => {

    try{
        const usuarios = await Usuario.findAll()
        res.status(200).json(usuarios)
    }catch(error){
        res.status(500).json({error: error.message})
    }

}

const addUsers = async(req,res) =>{
    try {
        const {nombre, email} = req.body
        const usuario = await Usuario.create({nombre, email})
        res.status(201).json(usuario)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

const updateUsers = async(req,res) =>{
    try{
        const {id}= req.params;
        const{nombre, email} = req.body;

        const usuario = await Usuario.findBuPk(id)
        if(!usuario){
            return res.status(404).json({message:"Usuario no encontrado"})
        }

        if(nombre) usuario.nombre=nombre
        if(email) usuario.email=email

        await usuario.save
        return res.estatus(200).json({message})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }

}

/*const changeStatusUsuario (res,req)=>{
    try{

    }catch(error){
        res.status(500).json({error:error.message})
    } 

}*/

module.exports = { getUsers, addUsers, updateUsers  }

