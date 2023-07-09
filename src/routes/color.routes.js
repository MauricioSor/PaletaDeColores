import {Router} from 'express';

import{ obtenerColores,borrarColor, crearColor, obtenerColor, modificarColor } from '../controllers/color.controllers'

const router = Router();
router.use('/color/lista').get(obtenerColores);
router.use('/color/crear').post(crearColor);
router.use('/color/cambiar').put(modificarColor);
router.use('/color/buscar/:id').get(obtenerColor)
router.use('/color/borrar/:id').delete(borrarColor);

export default router;