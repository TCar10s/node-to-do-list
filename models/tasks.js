/* 
    _list: {
        uuid-22a3-asd3-232s: { id:  12, desc: 'asd', completedIn: 18/07/2021 },
        uuid-324c-74g7-785l: { id:  13, desc: 'asd2', completedIn: 19/07/2021 },
        uuid-126g-126r-2fg5: { id:  14, desc: 'asd3', completedIn: 20/07/2021 },
    }
*/

const Task = require('./task');
const colors = require('colors');

class Tasks {
  _list = {};

  get listArray() {
    const list = [];
    Object.keys(this._list).forEach((key) => list.push(this._list[key]));

    return list;
  }

  constructor() {
    this._list = {};
  }

  loadTasksFromArray(tasks = []) {
    tasks.forEach((task) => (this._list[task.id] = task));
  }

  createTask(desc = '') {
    const task = new Task(desc);
    this._list[task.id] = task; // New uudi property
  }

  listTasks() {
    console.log('');
    this.listArray.forEach((task, i) => console.log(this.formatTask(task, i)));
  }

  formatTask(task, i) {
    const idx = `${i + 1}`.green;
    const { desc, completedIn } = task;
    const status = `${completedIn ? completedIn.green : 'Pending'.red}`;

    return `${idx}.${desc} :: ${status}`;
  }

  listTypeTask(completed = true) {
    console.log('');

    let tempArray = this.listArray.filter((task) =>
      completed ? task.completedIn : task.completedIn === null
    );

    tempArray.forEach((task, i) => console.log(this.formatTask(task, i)));
  }

  deleteTask(id = '') {
    if (this._list[id]) {
      delete this._list[id];
    }
  }

  toggleCompletedTasks(ids = []) {
    ids.forEach((id) => {
      const task = this._list[id];

      if (!task.completedIn) {
        task.completedIn = new Date().toISOString();
      }
    });

    Object.keys(this._list).forEach((key) => {
      if (!ids.includes(key)) {
        this._list[key].completedIn = null;
      }
    });
  }
}

module.exports = Tasks;
