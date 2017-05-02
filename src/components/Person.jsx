import React from 'react';
import Draggable from 'react-draggable'; // The default 
import PersonThumb from './PersonThumb.jsx';
require('../img/close-btn.png');
export default class PersonInfo extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isPersonInfoVisible: false,
            name: props.name
        }
    }

    render() {
        console.log(this.state.name)
        let person = (
            <Draggable >
                <div className="person-info">
                    <input type="text" className="person-info-name" defaultValue={this.state.name} onChange={this.handleName.bind(this)}/>   
                    <button className="close-btn" onClick={this.handleVisibility.bind(this)}>
                        <img src="img/close-btn.png" alt=""/>
                    </button>
                </div>
            </Draggable> 
        );
        let personThumb = (<PersonThumb toggleVisibility={this.handleVisibility.bind(this)} parentProps={this.props}/>);
        let visibleAll = (
            <div className="person-zone">
                {person}
                {personThumb}
            </div> 
        );
        
        return this.state.isPersonInfoVisible ? visibleAll : personThumb;
    }

    handleVisibility() {
        this.setState({
            isPersonInfoVisible: !this.state.isPersonInfoVisible
        });
    }
    handleName (event) {
        this.setState({name: event.target.value});
    }
}