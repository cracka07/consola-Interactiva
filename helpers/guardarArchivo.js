const fs=require("fs")
const archivo="./db/data.json";

const guardarDB=(data)=>{

    //convierte objeto en json
    fs.writeFileSync(archivo,JSON.stringify(data))
}

const leerDB=()=>{

    //ANTES DE LEER, pregunto si existe
    if( !fs.existsSync(archivo)){
        return null
    }
    const info=fs.readFileSync(archivo, {encoding:"utf-8"})
    const data=JSON.parse(info); //la info no me viene en formato json
    
    return data
}



module.exports={guardarDB,leerDB}