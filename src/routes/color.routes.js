import {Router} from 'express';

import{ obtenerColores,borrarColor, crearColor, obtenerColor, modificarColor } from '../controllers/color.controllers'

const router = Router();
router.route('/color/lista').get(obtenerColores);
router.route('/color/crear').post(crearColor);
router.route('/color/cambiar/:id').put(modificarColor);
router.route('/color/buscar/:id').get(obtenerColor)
router.route('/color/borrar/:id').delete(borrarColor);

export default router;