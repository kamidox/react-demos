var EventEmitter = require("events").EventEmitter;

var id = 1;

var TODOITEMS = [
  {title: 'Thinking-in-react demo', finished: true, due: 20160928},
  {title: 'react-primer demo', finished: false, due: 20160930},
  {title: 'react-starter-kit examples', finished: false, due: 20160930},
  {title: 'react-howto', finished: false, due: 20160930},
  {title: 'react', finished: false, due: 20160928},
  {title: 'npm', finished: true, due: 20160928},
  {title: 'JavaScript bundles', finished: false, due: 20160928},
  {title: 'ES6', finished: false, due: 20160928},
  {title: 'Routing', finished: false, due: 20160928},
  {title: 'Flux', finished: false, due: 20160928}
];

class Store extends EventEmitter {
  constructor() {
    super();
    this.items = [];
    this.itemsById = {};
    TODOITEMS.forEach((item) => {
      this.addItem(item.title, item.due, item.finished);
    });
  }

  // Any time an item is added, removed, or changed,
  // we emit a "change" event, which is used in the React component.
  addItem(title, due, finished=false) {
    var item = {id: ++id, title: title, due: due, finished: finished};
    this.items.push(item);
    this.itemsById[id] = item;
    this.emit("change");
  }

  removeItem(itemId) {
    var item = this.itemsById[itemId],
        index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
      delete this.itemsById[itemId];
      this.emit("change");
    }
  }

  changeItem(itemId, title, due, finished) {
    var item = this.itemsById[itemId];
    item.title = title;
    item.due = due;
    item.finished = finished;
    this.emit("change");
  }

  clearItems() {
    this.items = [];
    this.itemsById = {};
    this.emit("change");
  }
}

module.exports = Store;
