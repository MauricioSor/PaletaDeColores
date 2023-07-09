import express from 'express'
import morgan from 'morgan'
import path from 'path'
import cors from 'cors'
import 'dotenv/config'
import './src/database/db.connection'
import colorRouter from './src/routes/color.routes'

//Puerto
const app = express();

app.set('port',process.env.PORT || 4000);
app.listen(app.get('port'),()=>{
    console.log('Estoy en el puerto '+app.get('port'))
})

//Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'/public')));

//rutas
//http://127.0.0.1:27017/paletaDeColores
app.use('/apiColor',colorRouter);