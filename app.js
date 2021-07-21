require('colors');

const { inquirerMenu, pause, readInput, listDeleteTasks, confirmation, showListChecks } = require('./helpers/inquirer');
const { saveDB, readDB } = require('./helpers/save-file');
const Tasks = require('./models/tasks');

const main = async () => {
    let option = '';
    const tasks = new Tasks();

    const tasksDB = readDB();

    if(tasksDB) {
      tasks.loadTasksFromArray(tasksDB);
    }

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
                tasks.listTasks();
                break;
            case 3:
                // List completed tasks
                tasks.listTypeTask();
                break;
            case 4:
                // List pending tasks
                tasks.listTypeTask(false);
                break;
            case 5:
                // Completed task(s)
                const ids = await showListChecks(tasks.listArray);
                tasks.toggleCompletedTasks(ids);
                break;
            case 6:
                // Delete tasks
                const id = await listDeleteTasks(tasks.listArray);
                if(id === 0) continue;

                const ok = await confirmation('youre sure?');
                if(ok) {
                    tasks.deleteTask(id);
                    console.log('Task deleted!');
                }
            
                break;
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