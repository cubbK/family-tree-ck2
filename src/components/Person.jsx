import React from 'react';
import PersonInfo from './PersonInfo.jsx';
require('../img/portrait.png');

export default class Person extends React.Component {
    constructor(){
        super();
        this.image = 'img/portrait.png';
        this.state = {
            isPersonInfoVisible: false
        }
    }
    render() {
        let personThumbnail = (
            <div className={"person person-" + this.props.class}>
                <img src={this.image} alt="" className="img-responsive" onClick={this.handleClick.bind(this)}/>
                <div className="person-name">{this.props.name}</div>
            </div>
        );
        let visibleInfo = (
            <div className="person-zone">
                {personThumbnail}
                <PersonInfo onClose={this.handleClick.bind(this)}/>
            </div>    
        )
        return (
            this.state.isPersonInfoVisible ? visibleInfo : personThumbnail
        );
    }
    handleClick() {
        this.setState({
            isPersonInfoVisible: !this.state.isPersonInfoVisible
        });
    }
}