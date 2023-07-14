import express from "express";
import citasController from "../controllers/citasController.js";

const routercitas = express.Router();

//Rutas CRUD

routercitas.get ('citas', citasController.list);

routercitas.post('citas/add', citasController.save);

routercitas.get('citas/delete/:id', citasController.delete);

routercitas.get('citas/update/:id', citasController.edit);

routercitas.post('citas/update/:id', citasController.update);

export default routercitas;