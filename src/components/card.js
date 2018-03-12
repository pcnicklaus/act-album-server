import React, { Component } from 'react';
import './card.css';

const Card = ({ act }) => {

    return (
        <div className="card">
            <div className="card__side card__side--front">
                <div className="card__picture card__picture--1" style={{ backgroundImage: `url(${act.image})`}}>
                    &nbsp;
                </div>
                <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">{act.kind}</span>
                </h4>
            </div>
            <div className="card__side card__side--back card__side--back-1">
                
                <div className="card__details">
                    <h6>{act.title}</h6>
                    <p>{ act.description }</p>
                </div>
            </div>
        </div>
    )
}

export default Card;