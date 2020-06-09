// import React from 'react';
import '../App.css';
import './MemoryCard.css';
import React, { Component } from 'react';



class MemoryCard extends Component {
    constructor() {
        super()
        this.state={ isFlipped:false }
    }

    clickHandler() {
        this.setState({ isFlipped: !this.state.isFlipped});
    }

    render() {
        let innerClass = "MemoryCard_inner"
        if(this.state.isFlipped) {
            innerClass += " flipped";
        }
        return (
            <div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
                <div className={innerClass}>
                    <div className="MemoryCard_back">
                        <img src="../cartoon-pow.png" alt="pow! star"></img>
                    </div>
                    <div className="MemoryCard_front">
                    ∆
                    </div>
                </div>
            </div>
        );
    };
};


export default MemoryCard;
