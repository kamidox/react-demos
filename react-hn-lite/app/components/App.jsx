import React from 'react';
import NavLink from './NavLink';

require('./App.css');

const URL = 'https://github.com/kamidox/react-demos/tree/master/react-hn-lite';

export default React.createClass({
  render() {
    return (
      <div className="App">
        <div className="App__header">
          <a href={URL} className="App__homeicon">
            <img src="imgs/favicon.ico" alt="" width="16px" />
          </a>
          <NavLink to="/" onlyActiveOnIndex className="App__homelink">
          Hacker News</NavLink>{' | '}
          <NavLink to="/show">Show</NavLink>{' | '}
          <NavLink to="/ask">Ask</NavLink>{' | '}
          <NavLink to="/jobs">Jobs</NavLink>
        </div>
        <div className="App__content">
          {this.props.children}
        </div>
        <div className="App__footer">
          <a href={URL}>kamidox/react-hn-lite</a>
        </div>
      </div>
    );
  }
});
