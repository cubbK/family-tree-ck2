import React from 'react';
import TreeGenerations from './TreeGenerations.jsx';
import Tree from './Tree.jsx';
export default class TreeView extends React.Component {
    render() {
        return (
            <div className="tree-view">
                <TreeGenerations/>
                <Tree/>
            </div>
        );
    }
}