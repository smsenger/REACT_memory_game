import React, { Component } from 'react';
import './Card.css';
import numeral from 'numeral';

class Card extends Component {
    render() {
        // const title = 'Card Title';
        return (
            <div className="Card">{ this.props.name }
            <br></br>
            {this.props.likes >= 0 ? (           //how to do an if/else. if stmt true, then output using code below
                <sup>
                    likes: { numeral(this.props.likes).format('0.0a') }
                </sup>  //sup stands for supertext

            ) : ''}                          
            </div>
        )
    }
}

export default Card;