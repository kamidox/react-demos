import React from 'react';
import StoryStore from './StoryStore';

export default React.createClass({
  propTypes: {
    type: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      type: 'newstories'
    };
  },

  getInitialState() {
    return {
      ids: [],
      stories: []
    };
  },

  componentWillMount() {
    this.store = new StoryStore(this.props.type);
    this.store.addListener('update', this.handleStoryUpdate);
    this.store.fetchStory();
    this.setState(this.store.getState());
  },

  componentWillUnmount() {
    this.store.removeListener('update', this.handleStoryUpdate);
    this.store.stop();
    this.store = null;
  },

  handleStoryUpdate(state) {
    this.setState(state);
  },

  render() {
    const ids = [];
    for (let i = 0; i < this.state.ids.length; i += 1) {
      ids.push(<li key={this.state.ids[i]}>{this.state.ids[i]}</li>);
    }
    return (
      <div>
        <div>Hacker News Home</div>
        <ul>
          {ids}
        </ul>
      </div>
    );
  },
});
