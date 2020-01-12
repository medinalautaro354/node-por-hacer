
const create = {
    description: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la terea por hacer'
    }
}

const deleted = {
    description: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la terea por hacer a borrar'
    }
}

const update = {
    description: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completed: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const argv = require('yargs')
    .command('actualizar', 'Actualiza el estado completado de una tarea', update)
    .command('crear', 'Crear un elemento por hacer', create)
    .command('borrar', 'Borra una tarea por hacer', deleted)
    .help()
    .argv;

module.exports = {
    argv
}