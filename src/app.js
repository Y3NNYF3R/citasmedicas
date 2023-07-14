import express from 'express';

import path from 'path';
import  {fileURLToPath}  from'url';
import  {dirname, join}  from 'path';
import morgan from 'morgan';

const app = express();

//Importing routes

import navegacion from './routes/navegacion.js';
import routerPaciente from './routes/paciente.js';
import routerDoctor from './routes/doctor.js';
import routerCita from './routes/citas.js';

//Settigns

const __dirname= dirname(fileURLToPath(import.meta.url));
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middlewares

app.use(morgan('dev'));

app.use(express.urlencoded({extended:false}));

//Routes

app.use('/', navegacion);
app.use('./paciente', routerPaciente);
app.use('./doctor', routerDoctor);
app.use('./cita', routerCita);


//Static files
app.use(express.static(path.join(__dirname,'./views')));
app.use(express.static(path.join(__dirname,'./controllers')));
app.use(express.static(path.join(__dirname,'./model')));


//Starting the server

app.listen(app.get('port'),()=>{
    console.log('Listening on port', app.get('port'));
});

app.get('/', (req, res) =>{
    res.render('home');
});

