/**
 * Created by betty on 8/31/18.
 */
"use strict";

import React from 'react';
import ReactDOM from 'react-dom';


class LikeButton extends React.Component {
  constructor(props) { // add local state to a class component
    super(props);
    this.state = {liked: false};
  }

  render () {
    if (this.state) {
      return 'already liked';
    }
    return (
      <button onClick={() => this.setState({liked: true})}>Like</button>
    )
  }
}

const container = document.getElementById('like_button');
ReactDOM.render(<LikeButton/>, container);
