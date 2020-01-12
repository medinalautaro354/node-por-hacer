const fs = require('fs');

let backLog = [];

const saveDb = () => {
    let data = JSON.stringify(backLog);

    fs.writeFile('db/data.json', data, (err) => {
        if (err)
            throw err;
    })

}

const updateBackLog = () => {
    try {

        backLog = require('../db/data.json');
    } catch (error) {
        backLog = [];
    }

}
const create = (description) => {

    updateBackLog();

    let toDo = {
        description,
        completed: false
    };

    backLog.push(toDo);

    saveDb();

    return toDo;
}

const getBackLog = () =>{

    updateBackLog();
    return backLog;
}


const update = (description, completed = true) => {

    updateBackLog();

    let index = backLog.findIndex(homeWork => homeWork.description === description);

    if (index >= 0) {
        backLog[index].completed = completed;
        saveDb();
        return true;
    } else {
        return false;
    }
}

const deleted = (description) =>{

    updateBackLog();

    let newBackLog = backLog.filter(homeWork => homeWork.description !== description);

    if(backLog.length === newBackLog.length){
        return false;
    }else{
        backLog = newBackLog;
        saveDb();
        return true;
    }
}

module.exports = {
    create,
    getBackLog,
    update,
    deleted
}