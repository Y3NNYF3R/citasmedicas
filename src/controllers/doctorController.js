import myconnection from '../model/db_conection.js';
const controller = {};


controller.list = ((req, res) =>{
        myconnection.query('SELECT * FROM doctor', (err, doctores)=>{
            if(err){
                throw(err);
            } else {res.render('doctor',{
                dataList:doctores
            });}               
        });
});


controller.save = (req,res)=>{
    const data = req.body;
    req.getConnection((err, conn) =>{
        conn.query ('INSERT INTO doctor set ?', [data], (err, doctor)=>{
            res.redirect('doctor');
        })
    })
};

controller.edit = (req,res)=>{
    const{id} = req.params;

    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM doctor WHERE id_doctor = ?',[id], (err, doctores)=> {
            res.render('doctor',{
                data:doctores [0]
            });
        });
    })
};

controller.update = (req,res)=>{
    const{id} = req.params;
    const newDoctor = req.body;

    req.getConnection((err, conn)=>{
        conn.query('UPDATE doctor SET ? WHERE id_doctor = ?',[newDoctor, id], (err, rows)=> {
            res.redirect('doctor');
            });
    });
};

controller.delete = (req,res)=>{
    const{id} = req.params;

    req.getConnection((err, conn)=>{
        conn.query('DELETE FROM doctor WHERE id_doctor = ?',[id], (err, rows)=> {
            res.redirect('doctor');
        });
    })
};


export default controller;