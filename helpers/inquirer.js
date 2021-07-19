const inquirer = require('inquirer');
require('colors');

const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'What would you like to do?',
    choices: [
      {
        value: 1,
        name: '1. Create task',
      },
      {
        value: 2,
        name: '2. List tasks',
      },
      {
        value: 3,
        name: '3. List completed tasks',
      },
      {
        value: 4,
        name: '4. List pending tasks',
      },
      {
        value: 5,
        name: '5. Complete task(s)',
      },
      {
        value: 6,
        name: '6. Delete task',
      },
      {
        value: 0,
        name: '0. Leave',
      },
    ],
  },
];


const inquirerMenu = async () => {
  // console.clear();

  // Title
  console.log('┌─────── •✧✧• ───────┐'.green);
  console.log('   Select an option');
  console.log('└─────── •✧✧• ───────┘\n'.green);

  const { option } = await inquirer.prompt(questions);

  return option;
};

const pausa = async () => {

    
    const question = [
        {
            type: 'input',
            name: 'message',
            message: `Press ${'ENTER'.green} to continue`
        }
    ];

    await inquirer.prompt(question);
};

module.exports = {
  inquirerMenu,
  pausa
};
