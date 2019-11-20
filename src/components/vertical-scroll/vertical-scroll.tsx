import React from 'react';
import {Props} from "./vertical-scroll.type";
import './vertical-scroll.css'

export const VerticalScroll: React.FC<Props> = ({children}) => {
    return (
        <div className="vertical-scroll">
            {children}
        </div>
    )
};