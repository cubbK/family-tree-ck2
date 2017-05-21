import React from 'react';
import Draggable from 'react-draggable'; // The default 
import PersonThumb from './components/PersonThumb/PersonThumb.jsx';
import PersonInputStats from './components/PersonInputStats/index.jsx';
import PersonLook from './components/PersonLook/index.jsx';

var requireContext = require.context("./img", true, /^\.\/.*\.png$/); // Requires all pngs from img folder
requireContext.keys().map(requireContext);


export default class PersonInfo extends React.Component {
    constructor(props) {
        super();
        this.faceImgs = [
            'portrait.png',
            'portrait2.png',
            'portrait3.png'
        ],
            this.state = {
                isDead: false,
                isBlood:true,  //BloodRelative
                isPersonInfoVisible: false,
                name: props.name,
                image: 'img/' + this.faceImgs[0],
                birth: '1900',
                death : '1900',
            }
    }

    render() {
        console.log(this.state.name)
        let person = (
            <Draggable >
                <div className="person-info">
                    <input type="text" className="person-info-name" defaultValue={this.state.name} onChange={this.handleName.bind(this)} />
                    <button className="close-btn" onClick={this.handleVisibility.bind(this)}>
                        <img src="img/close-btn.png" alt="" />
                    </button>
                    <PersonLook image={this.state.image} isDead={this.state.isDead} isBlood ={this.state.isBlood} changeImage={this.changeImage.bind(this)} />
                    <div className="dead-blood">
                        <div className="dead">
                            Is Dead?
                             <input id="checkBox" type="checkbox" defaultChecked={this.state.isDead} onClick={(e) => this.toggleState(e, 'isDead')} />
                        </div>
                        <div className="blood">
                            Is Blood Relative?
                            <input id="checkBox" type="checkbox" defaultChecked={this.state.isBlood} onClick={(e) => this.toggleState(e, 'isBlood')}/>
                        </div>
                    </div>
                    <PersonInputStats state={this.state}/>
                </div>
            </Draggable>
        );
        let personThumb = (<PersonThumb toggleVisibility={this.handleVisibility.bind(this)} parentProps={this.props} parentState={this.state} />);
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
    handleName(event) {
        this.setState({ name: event.target.value });
        return this.state.name;
    }
    changeImage(event, direction) {
        if (direction == "right") {
            this.faceImgs = arrayRotate(this.faceImgs);
        } else {
            this.faceImgs = arrayRotate(this.faceImgs, true);
        }
        console.log(this.faceImgs)
        this.setState({
            image: 'img/' + this.faceImgs[0]
        })
    }
    toggleState(event, name) {
        console.log(name)
        let newState = {};
        newState[name] = !this.state[name];
        this.setState(newState);
    }
}

function arrayRotate(arr, reverse) {
    if (reverse) {
        arr.unshift(arr.pop())
    } else {
        arr.push(arr.shift())
    }
    return arr
} 