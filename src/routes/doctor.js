import express from "express";
import doctorController from "../controllers/doctorController.js";

const routerDoctor = express.Router();

//Rutas CRUD

routerDoctor.get ('doctor', doctorController.list);

routerDoctor.post('doctor/add', doctorController.save);

routerDoctor.get('doctor/delete/:id', doctorController.delete);

routerDoctor.get('doctor/update/:id', doctorController.edit);

routerDoctor.post('doctor/update/:id', doctorController.update);

export default routerDoctor;