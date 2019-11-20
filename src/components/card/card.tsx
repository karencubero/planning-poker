import React from 'react';
import {Props} from "./card.type";
import './card.css';

export const Card: React.FC<Props> = ({imageUrl, imageAlt}) => {
    return (
        <div className="card">
            <img className="card-image" src={imageUrl} alt={imageAlt}/>
        </div>
    );
};