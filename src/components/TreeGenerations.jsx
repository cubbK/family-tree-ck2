import React from 'react';
export default class TreeGenerations extends React.Component {
    render() {
        return (
            <ul className="tree-generations">
                <li>Children</li>
                <li>Family Tree</li>
                <li>Parents</li>
                <li>Grandparents</li>
                <li>Great Grandparents</li>
            </ul>
        );
    }
}