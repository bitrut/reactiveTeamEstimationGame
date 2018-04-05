import React from 'react';

const Card = ({id, title}) => (
    <div className="card">
        <div className="card-title">
            {title}
        </div>
    </div>
);

export default Card;