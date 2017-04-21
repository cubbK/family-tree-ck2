import React from 'react';
export default class Header extends React.Component {
    render() {
        return(
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-5">
                            <h1>Hey</h1>
                        </div>
                        <div className="col-xs-7">
                            <h1>Dude</h1>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}