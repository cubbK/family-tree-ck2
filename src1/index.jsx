import React from 'react';
import ReactDOM from 'react-dom';
import TreeView from './components/TreeView.jsx';
require('./styles/index.styl');


class Main extends React.Component {
  render() {
    return (
      <div>
        <TreeView/>
        <h1>HEy dudee</h1>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);