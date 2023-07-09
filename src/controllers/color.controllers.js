import Color from '../models/color'

export const obtenerColores= async (req,res)=>{
    try{
        const colores = await Color.find()
        res.status(200).json(colores);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje:'Error al buscar los colores'
        })
    }
}
export const obtenerColor = async(req,res) =>{
    try{
        const color = await Color.findById(req.params.id)
        res.status(200).json(color);
    }catch(error){
        res.status(404).json({
            mensaje:'Error al buscar el color'
        })
    }
}

export const crearColor = async (req,res)=>{
    try{
        const color = new Color(req.body)
        await color.save();
        res.status(200).json({
            mensaje:'Color creado exitosamente'
        })
    }catch(error){
        console.log(error);
        req.status(404).json({
            mensaje:'Error al crear el color'
        });
    }
}

export const borrarColor = async(req,res)=>{
    try{
        Color.findByIdAndRemove(req.params.id);
        res.status(201).json({
            mensaje:'Borrado exitosamente'
        })
    }catch(error){
        res.status(404).json({
            mensaje:'Error al borrar el Color'
        })
    }
}

export const modificarColor = async(req,res)=>{
    try{
        Color.findOneAndUpdate(req.params.id,req.body)
        res.status(201).json({
            mensaje:'Exito al modificiar el color'
        })
    }catch(error){
        res.status(404).json({
            mensaje:'Error al modificar Color'
        })
    }
}

