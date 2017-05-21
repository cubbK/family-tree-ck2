import React from 'react';
export default class PersonInputStats extends React.Component {
    render() {
        let state = this.props.state;
        return (
            <ul className="person-input-stats">
                <li>
                    <div className="text">
                        Birth :
                    </div>
                    
                    <input type="text" defaultValue={state.birth}  />
                </li>
                <li>
                    <div className="text">
                        Death :
                    </div>
                    <input type="text" defaultValue={state.death}  />
                </li>
            </ul>
        );
    }
}