import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete'

export default class PersonInputStats extends React.Component {
    constructor(props) {
        super(props)
        this.state = { address: 'San Francisco, CA' }
        this.onChange = (address) => this.setState({ address })
    }
    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
        }
        let state = this.props.state;

        return (
            <ul className="person-input-stats">
                <li>
                    <div className="text">
                        Birth Date:
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" value={state.birth} onChange={(e) => this.props.handleDateInput(e, 'birth')} />
                    </div>
                </li>
                <li>
                    <div className="text">
                        Death Date:
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" defaultValue={state.death} onChange={(e) => this.props.handleDateInput(e, 'death')} />
                    </div>
                </li>
                <li>
                    <div className="text">
                        Birthplace
                    </div>
                    <div className="form-group">
                        <PlacesAutocomplete inputProps={inputProps} />
                    </div>
                </li>
                <li>
                    <div className="text">
                        Death Place
                    </div>
                    <input type="text" defaultValue={state.death} />
                </li>
                <li>

                </li>
            </ul>
        );
    }
}