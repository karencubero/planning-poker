import React, {useState} from 'react';
import {Props} from "./card.type";
import './card.css';

export const Card: React.FC<Props> = ({imageUrl, backImageUrl, imageAlt}) => {
    const [isBackVisible, setBackVisible] = useState(false);
    const toggleVisibility = () => {
        setBackVisible(!isBackVisible)
    };

    return (
        <div className="card" style={{transform: isBackVisible ? 'rotateY(180deg)' : ''}}>
            <img className="card-image" src={imageUrl} alt={imageAlt}
                 onClick={toggleVisibility}/>
            <img className="card-image card-image-back" src={backImageUrl} alt="Back image" onClick={toggleVisibility}/>
        </div>
    );
};