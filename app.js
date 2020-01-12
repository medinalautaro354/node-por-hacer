const argv = require('./config/yargs').argv;
const colors = require('colors');


const toDo = require('./por-hacer/por-hacer');
let command = argv._[0];

switch (command) {

    case 'crear':
        let homeWork = toDo.create(argv.description);
        console.log(homeWork);
        break;

    case 'listar':
        let backLog = toDo.getBackLog();

        console.log('====== Tareas por hacer ======'.green)

        backLog.forEach(element => {
            console.log(`Tarea: ${element.description.blue}. Completada: ${element.completed ? "Si".green : "No".red}`);
        });
        break;

    case 'actualizar':
        let update = toDo.update(argv.description, argv.completed);
        console.log(update ? "Se actualizo correctamente" : "No se pudo actualizar la tarea");
        break;

    case 'borrar':
        let deleted = toDo.deleted(argv.description);
        console.log(deleted ? "Se borro correctamente la tarea" : "No existe tarea con esa descripcion");
        break;

    default:
        console.log('Comando no reconocido');
}