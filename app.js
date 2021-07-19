require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Task = require('./models/task');
const Tasks = require('./models/tasks');

const main = async () => {
    let option = '';

    do {

        option = await inquirerMenu();
        if(option !== 0) await pausa();

    } while (option !== 0);

    // pausa();
};

main();