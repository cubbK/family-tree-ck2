import React from 'react';
require('../img/portrait.png');

export default class Person extends React.Component {
    constructor(){
        super();
        this.image = 'img/portrait.png';
        
    }
    render() {
        return (
            <div className={"person person-" + this.props.parentProps.class}>
                <img src={this.image} alt="" className="img-responsive" onClick={this.props.toggleVisibility}/>
                <div className="person-name">{this.props.parentProps.name}</div>
            </div>
        );
    }
    
}