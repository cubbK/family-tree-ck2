import React from 'react';
import Draggable from 'react-draggable'; // The default 
require('../img/close-btn.png');
export default class PersonInfo extends React.Component {
    
    render() {
        return (
            <Draggable >
                <div className="person-info">
                    <button className="close-btn" onClick={this.props.onClose}>
                        <img src="img/close-btn.png" alt=""/>
                    </button>
                </div>
            </Draggable> 
        )
    }
}