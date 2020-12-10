import React from 'react';

export default class BombTimer extends React.Component{

    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render(){
        return this.state.secondsLeft > 0 ? <p>{this.state.secondsLeft} seconds left before I go boom!</p> : <p>Boom!</p>
    }
}
