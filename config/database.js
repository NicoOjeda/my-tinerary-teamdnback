const moongose = require('mongoose')

let conection = async () =>{
    try{
        //intento conectarme a la base de datos con el metodo conect de moongose
        moongose.connect(
            //requiere link conexion a base de datos
            process.env.DB_LINK,
            //objeto con conf de conexion
            {
                useUnifiedTopology: true,
                useNewUrlParser: true
        }
        )
        console.log('conected to database');
    } catch(error){
        console.log(error.message);
    }
}

conection()