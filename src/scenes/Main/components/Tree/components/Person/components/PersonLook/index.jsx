import React from 'react';
export default class PersonLook extends React.Component {
    render() {
        return (
            <div className="person-info-look">
                <div className="person-info-look-img">
                    <img src={this.props.image} alt="" />
                </div>
                {this.props.isDead ? <img src="img/dead-icon.png" alt="" className="dead-icon"/> : ""}
                {this.props.isBlood ? <img src="img/blood-icon.png" alt="" className="blood-icon"/> : ""}
                <div className="person-info-look-controls">
                    <button className="person-info-look-controls-left" onClick={(e) => this.props.changeImage(e, "left")}>
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    </button>
                    <button className="person-info-look-controls-right" onClick={(e) => this.props.changeImage(e, "right")}>
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        );
    }
}