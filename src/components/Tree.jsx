import React from 'react';
import Person from './Person.jsx';

export default class Tree extends React.Component {
    constructor() {
        super();
        this.persons = [
            {
                name: 'Jane',
                class: 'main'
            },
            {
                name: 'James',
                class: 'father'
            },
            {
                name: 'James',
                class: 'mother'
            }
        ]
    }
    render() {
        let persons = this.persons.map((val,index)=>{
            return (
                <Person class={val.class} name={val.name} key={index.toString()}></Person>
            )
        })
        return (
            
            <div className="content">
                {persons}
            </div>
        )
    }
}

