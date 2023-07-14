import myconnection from '../model/db_conection.js';
const controller = {};


controller.list = ((req, res) =>{
        myconnection.query('SELECT * FROM cita', (err, citas)=>{
            if(err){
                throw(err);
            } else {res.render('cita',{
                dataList:citas
            });}               
        });
});


controller.save = (req,res)=>{
    const data = req.body;
    req.getConnection((err, conn) =>{
        conn.query ('INSERT INTO cita set ?', [data], (err, cita)=>{
            res.redirect('cita');
        })
    })
};

controller.edit = (req,res)=>{
    const{id} = req.params;

    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM cita WHERE id_cita = ?',[id], (err, citas)=> {
            res.render('cita',{
                data:citas [0]
            });
        });
    })
};

controller.update = (req,res)=>{
    const{id} = req.params;
    const newcita = req.body;

    req.getConnection((err, conn)=>{
        conn.query('UPDATE cita SET ? WHERE id_cita = ?',[newcita, id], (err, rows)=> {
            res.redirect('cita');
            });
    });
};

controller.delete = (req,res)=>{
    const{id} = req.params;

    req.getConnection((err, conn)=>{
        conn.query('DELETE FROM cita WHERE id_cita = ?',[id], (err, rows)=> {
            res.redirect('cita');
        });
    })
};


export default controller;