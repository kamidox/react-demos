import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    const userName = this.props.params.userName
    const repoName = this.props.params.repoName
    const url = `https://github.com/${userName}/${repoName}`
    return (
      <div>
        <h2>
          <Link to={url}>{userName}/{repoName}</Link>
        </h2>
      </div>
    )
  }
})
