import React, { Component } from 'react';
import { Link } from 'react-router';
import './card.css';

const Card = ({ act }) => {

    console.log('act in card', act)

    return (
        <Link to={ `/act/${ act._id }` } className="card__detailLink">
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
                        
                        <h6 className="card__details__title">{act.title}</h6>
                        <p className="card__details__body">{ act.description }</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card;