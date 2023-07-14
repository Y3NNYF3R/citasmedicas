import express from "express";

const routerNav = express.Router();

routerNav.get('/inicio', (req, res) =>{
    res.render('../views/home.ejs');
});

routerNav.get('/paciente', (req, res) =>{
   res.render('../views/paciente.ejs');
});

routerNav.get('/doctor', (req, res) =>{
    res.render('../views/doctor.ejs');
});

routerNav.get('/citaMedica', (req, res) =>{
    res.render('../views/citaMedica.ejs');
});

export default routerNav;