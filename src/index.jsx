import React from 'react';
import ReactDOM from 'react-dom';
import TreeView from './scenes/Main/index.jsx';
require('./styles/index.styl');


class Main extends React.Component {
  render() {
    return (
      <div>
        <TreeView/>
        <h1>HEy dudee Pal</h1>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);