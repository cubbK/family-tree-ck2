import React from 'react';
import ReactDOM from 'react-dom';
import Tree from './components/TreeView.jsx';
require('./styles/index.styl');


class Main extends React.Component {
  render() {
    return (
      <div>
        <Tree/>
        <h1>HEy dude</h1>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);