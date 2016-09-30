import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName"/> / {' '}
              <input type="text" placeholder="repo"/>{' '}
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>

        {this.props.children}

      </div>
    )
  },

  handleSubmit(ev) {
    ev.preventDefault();
    const userName = ev.target.elements[0].value
    const repo = ev.target.elements[1].value
    const path = `/repos/${userName}/${repo}`
    this.context.router.push(path)
  }
})
