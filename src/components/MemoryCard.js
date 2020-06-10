// import React from 'react';
import '../App.css';
import './MemoryCard.css';
import React, { Component } from 'react';

class MemoryCard extends Component {
    render() {
        let innerClass = "MemoryCard_inner"
        if(this.props.isFlipped) {
            innerClass += " flipped";
        }
        return (
            <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={innerClass}>
                    <div className="MemoryCard_back">
                        <img src="../spacecat.png" alt="cat in space"></img>
                    </div>
                    <div className="MemoryCard_front">
                    {this.props.symbol}
                    </div>
                </div>
            </div>
        );
    };
};


export default MemoryCard;
