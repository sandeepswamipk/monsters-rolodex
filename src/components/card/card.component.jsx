import React from 'react';


import './card.styles.css';

const Card = function(props){
    console.log(props);
    console.log(props.monster.id);
    const roboHashURL = `https://robohash.org/${props.monster.id}?set=set2&size=180x180`;
    console.log(roboHashURL);
    return(
        <div className="card-container">
            <img 
                alt="monster" 
                src={roboHashURL} 
            />
            <h2>{ props.monster.name }</h2>
            <p> {props.monster.email} </p>
        </div>    
    );
};

export default Card;

