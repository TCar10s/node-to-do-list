require('colors');

const showMenu = () => {
    console.clear();

    return new Promise((resolve, reject) => {

        // Title
        console.log('┌─────── •✧✧• ───────┐'.green);
        console.log('   Select an option'.green);
        console.log('└─────── •✧✧• ───────┘\n'.green);

        // Menu
        console.log(`${'1.'.green} Create task`);
        console.log(`${'2.'.green} List tasks`);
        console.log(`${'3.'.green} List completed tasks`);
        console.log(`${'4.'.green} List pending tasks`);
        console.log(`${'5.'.green} Complete task(s)`);
        console.log(`${'6.'.green} Delete task`);
        console.log(`${'0.'.green} Leave\n`);

        const readLine = require('readline').createInterface({
            input: process.stdin, // Pause app execution
            output: process.stdout, // Show message
        });

        readLine.question('Select an option: ', (opt) => {
            readLine.close();
            resolve(opt);
        });

    });


};

const pausa = () => {

    return new Promise((resolve, reject) => {

        const readLine = require('readline').createInterface({
            input: process.stdin, // Pause app execution
            output: process.stdout, // Show message
        });

        readLine.question(`\nPress ${'ENTER'.green} to continue\n`, () => {
            readLine.close()
            resolve();
        });

    });
};

module.exports = {
    showMenu,
    pausa
};