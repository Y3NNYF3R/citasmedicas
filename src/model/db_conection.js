import mysql from 'mysql2';

var myconnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'V1s10n_23*',
    port: 330,
    database:'citas_medicas'
});

myconnection.connect(function (err){
    if(err){
        console.error('Error en la conexión' + err.stack)
        return;
    }
    console.log('Conexión exitosa ID:' + myconnection.threadId);
})

export default myconnection;