require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const { saveDB } = require('./helpers/save-file');
const Task = require('./models/task');
const Tasks = require('./models/tasks');

const main = async () => {
    let option = '';
    const tasks = new Tasks();

    do {

        // Show menu
        option = await inquirerMenu();

        switch (option) {
            case 1:
                // Create task
                const desc = await readInput('Description:');
                tasks.createTask(desc);
                break;
            case 2:
                // List tasks
                console.log(tasks.listArray);
        
            default:
                break;
        }

        saveDB( tasks.listArray );

        // Message pause
        if(option !== 0) await pause();

    } while (option !== 0);

    // pausa();
};

main();