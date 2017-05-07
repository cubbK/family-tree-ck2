import React from 'react';
require('../img/portrait.png');

export default class Person extends React.Component {
    constructor(){
        super();
        
    }
    render() {
        return (
            <div className={"person person-" + this.props.parentProps.class}>
                <img src={this.props.parentState.image} alt="" className="img-responsive" onClick={this.props.toggleVisibility}/>
                <div className="person-name">{this.props.parentState.name}</div>
            </div>
        );
    }    
}