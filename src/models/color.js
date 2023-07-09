import {Schema,model} from 'mongoose'

const colorSchema = new Schema({
    nombre:{
        type:String,
        minLength:2,
        maxLength:20,
        required:true
    },
    codigoHexa:{
        type:String,
        minLength:2,
        maxLength:20,
        required:true
    }
});

const Color = model('color',colorSchema);
export default Color