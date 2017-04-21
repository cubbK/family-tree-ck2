import React from 'react';
import TreeGenerations from './TreeGenerations.jsx';
export default class Tree extends React.Component {
    render() {
        return (
            <div className="tree-view">
                <TreeGenerations/>
            </div>
        );
    }
}