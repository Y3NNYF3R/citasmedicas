import myconnection from '../model/db_conection.js';
const controller = {};


controller.list = ((req, res) =>{
        myconnection.query('SELECT * FROM paciente', (err, pacientes)=>{
            if(err){
                throw(err);
            } else {res.render('paciente',{
                dataList:pacientes
            });}               
        });
});


controller.save = (req,res)=>{
    const data = req.body;
    req.getConnection((err, conn) =>{
        conn.query ('INSERT INTO paciente set ?', [data], (err, paciente)=>{
            res.redirect('paciente');
        })
    })
};

controller.edit = (req,res)=>{
    const{id} = req.params;

    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM paciente WHERE id_paciente = ?',[id], (err, paciente)=> {
            res.render('paciente',{
                data:paciente [0]
            });
        });
    })
};

controller.update = (req,res)=>{
    const{id} = req.params;
    const newPaciente = req.body;

    req.getConnection((err, conn)=>{
        conn.query('UPDATE paciente SET ? WHERE id_paciente = ?',[newPaciente, id], (err, rows)=> {
            res.redirect('paciente');
            });
    });
};

controller.delete = (req,res)=>{
    const{id} = req.params;

    req.getConnection((err, conn)=>{
        conn.query('DELETE FROM paciente WHERE id_paciente = ?',[id], (err, rows)=> {
            res.redirect('paciente');
        });
    })
};


export default controller;