import React from 'react';
import TreeGenerations from './TreeGenerations.jsx';
import Tree from './Tree.jsx';
require("../img/github-logo.png");
export default class TreeView extends React.Component {
    render() {
        return (
            <div className="tree-view">
                <a href="https://github.com/cubbic/family-tree-ck2" className="github" title="View on Github" target="_blank">
                    <img src="img/github-logo.png" alt="" className="img-responsive"/>
                </a>
                <TreeGenerations/>
                <Tree/>
            </div>
        );
    }
}