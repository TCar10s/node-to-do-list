/* 
    _list: {
        uuid-22a3-asd3-232s: { id:  12, desc: 'asd', completedIn: 18/07/2021 },
        uuid-324c-74g7-785l: { id:  13, desc: 'asd2', completedIn: 19/07/2021 },
        uuid-126g-126r-2fg5: { id:  14, desc: 'asd3', completedIn: 20/07/2021 },
    }
*/

const Task = require('./task');

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

  createTask(desc = '') {
    const task = new Task(desc);
    this._list[task.id] = task; // New uudi property
  }

  listTasks() {}
}

module.exports = Tasks;
