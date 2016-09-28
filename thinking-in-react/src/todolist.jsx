var React = require('react');
var ReactDOM = require('react-dom');
var Store = require('./store.js');
var PureRenderMixin = require('react-addons-pure-render-mixin');

var store = new Store();
console.log(React.addons);

var ActionList = React.createClass({
  render() {
    return (
      <div>
        <div>
          <input type="text"
            ref="todoInput"
            placeholder="Create new TODO item ..." />
        </div>
        <div>
          <button onClick={this.addItem}>Add New Item</button>
          <button onClick={this.addManyItems}>Add Many Items</button>
          <button onClick={this.clearItems}>Remove All Items</button>
        </div>
        <div>Count: {this.props.count}</div>
      </div>
    );
  },
  addItem() {
    var title = this.refs.todoInput.value;
    var due = (new Date()).toDateString();
    if (title) {
      store.addItem(title, due, false);
    }
  },
  clearItems() {
    store.clearItems();
  },
  addManyItems() {
    let i = 0;
    let due = (new Date()).toDateString();
    for (i = 0; i < 1000; i ++) {
      store.addItem("Todo Item #" + i, due);
    }
  }
});

var TodoItem = React.createClass({
  mixins: [PureRenderMixin],

  render() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.due}</td>
        <td>
          <input type="checkbox"
            checked={this.props.finished}
            onChange={this.handleChange} />
        </td>
      </tr>
    );
  },
  handleChange(e) {
    var finished = e.target.checked;
    store.changeItem(this.props.id, this.props.title, this.props.due, finished);
  }
});

var TodoList = React.createClass({
  render() {
    var items = [];
    this.props.items.forEach((item) => {
      if (item.title.includes(this.props.filterText)) {
        if (this.props.showFinished || !item.finished) {
          items.push(<TodoItem
            id={item.id}
            key={item.id}
            title={item.title}
            due={item.due}
            finished={item.finished} />);
        }
      }
    });

    return (
      <table cellSpacing="10">
        <thead>
          <tr>
            <th>Title</th>
            <th>Due-Date</th>
            <th>Finished</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
    );
  }
});

var SearchBar = React.createClass({
  propTypes: {
    filterText: React.PropTypes.string,
    showFinished: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired
  },
  getDefaultProps() {
    return {
      filterText: '',
      showFinished: true
    }
  },
  render() {
    return (
      <form>
        <input type="text"
          ref="filterTextInput"
          placeholder="Search ..."
          value={this.props.filterText}
          onChange={this.handleChange} />
        <p>
          <input type="checkbox"
            ref="showFinishedInput"
            checked={this.props.showFinished}
            onChange={this.handleChange} />
          Show finished items
        </p>
      </form>
    );
  },
  handleChange() {
    this.props.onChange(
      this.refs.filterTextInput.value,
      this.refs.showFinishedInput.checked);
  }
});

var FilterableTodoList = React.createClass({
  getInitialState() {
    return {
      filterText: '',
      showFinished: true
    };
  },
  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          showFinished={this.state.showFinished}
          onChange={this.handleChange} />
        <TodoList
          items={this.props.items}
          filterText={this.state.filterText}
          showFinished={this.state.showFinished} />
        <ActionList count={this.props.items.length} />
      </div>
    );
  },
  handleChange(filterText, showFinished) {
    this.setState({
      filterText: filterText,
      showFinished: showFinished
    })
  }
});

var renderApp = () => {
  ReactDOM.render(<FilterableTodoList items={store.items} />,
    document.getElementById('container'));
}

store.on('change', renderApp);
renderApp()
