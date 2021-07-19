require('colors');
const {
    showMenu,
    pausa
} = require('./helpers/messages');

console.clear();

const main = async () => {
    let opt = '';

    do {

        opt = await showMenu();
        if(opt !== '0') await pausa();

    } while (opt !== '0');

    // pausa();
};

main();