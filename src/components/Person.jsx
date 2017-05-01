import React from 'react';
import Draggable from 'react-draggable'; // The default 
import PersonThumb from './PersonThumb.jsx';
require('../img/close-btn.png');
export default class PersonInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            isPersonInfoVisible: false
        }
    }
    render() {
        let person = (
            <Draggable >
                <div className="person-info">
                    <button className="close-btn" onClick={this.handleClick.bind(this)}>
                        <img src="img/close-btn.png" alt=""/>
                    </button>
                </div>
            </Draggable> 
        );
        let personThumb = (<PersonThumb toggleVisibility={this.handleClick.bind(this)} parentProps={this.props}/>);
        let visibleAll = (
            <div className="person-zone">
                {person}
                {personThumb}
            </div> 
        );
        
        return this.state.isPersonInfoVisible ? visibleAll : personThumb;
    }
    handleClick() {
        this.setState({
            isPersonInfoVisible: !this.state.isPersonInfoVisible
        });
    }
}