import express from "express";
import pacienteController from "../controllers/pacienteController.js";

const routerPaciente = express.Router();

//Rutas CRUD

routerPaciente.get ('paciente', pacienteController.list);

routerPaciente.post('paciente/add', pacienteController.save);

routerPaciente.get('paciente/delete/:id', pacienteController.delete);

routerPaciente.get('paciente/update/:id', pacienteController.edit);

routerPaciente.post('paciente/update/:id', pacienteController.update);

export default routerPaciente;