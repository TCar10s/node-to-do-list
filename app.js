require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const Task = require('./models/task');
const Tasks = require('./models/tasks');

const main = async () => {
    let option = '';
    const tasks = new Tasks();

    do {

        option = await inquirerMenu();

        switch (option) {
            case 1:
                // Create task
                const desc = await readInput('Description:');
                tasks.createTask(desc);
                break;
            case 2:
                // List
                console.log(tasks._list);
        
            default:
                break;
        }

        if(option !== 0) await pause();

    } while (option !== 0);

    // pausa();
};

main();