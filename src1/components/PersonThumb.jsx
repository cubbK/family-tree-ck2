import React from 'react';
require('../img/portrait.png');

export default class Person extends React.Component {
    constructor(){
        super();
        
    }
    render() {
        let parentProps = this.props.parentProps;
        let parentState = this.props.parentState;

        return (
            <div className={"person person-" + parentProps.class}>
                <img src={parentState.image} alt="" className="img-responsive" onClick={this.props.toggleVisibility}/>
                <div className="person-name">{parentState.name}</div>
                {parentState.isDead ? <img src="img/dead-icon.png" alt="" className="dead-icon"/> : ""}
                {parentState.isBlood ? <img src="img/blood-icon.png" alt="" className="blood-icon"/> : ""}
            </div>
        );
    }    
}