require("colors")


const mostrarMenu=()=>{
    return new Promise(resolve=>{
        console.clear();
        console.log("=======================".green);
        console.log("  Seleccione una opción".green);
        console.log("=======================\n".green)
    
        console.log(`${`1.`.green} Crear tarea`);
        console.log(`${`2.`.green} Listar tareas`);
        console.log(`${`3.`.green} Listar tareas completadas`);
        console.log(`${`4.`.green} Completar tarea/s`);
        console.log(`${`5.`.green} Borrar tarea`);
        console.log(`${`0.`.green} Salir \n`);
    
        const readline=require("readline").createInterface({
            input:process.stdin, //esperar la info que brinda el usuario    
            output:process.stdout //mostrar la info del usuario
        })
        readline.question("Seleccione una opción: ", (opt)=>{
        
            readline.close();
            resolve(opt)
        })
    })
    
}



module.exports={
    mostrarMenu,
    
}