import React from "react";
import classes from './Card.module.css'

const Card = (props) => {

    return ( 
    <React.Fragment>
        {props.loading ? <p>Loading...</p> 
        : props.pokemon.map(item => {
            return(
                <>
                    <div key={item.id} className={classes.card}>
                        <h2>{item.id}</h2>
                        <img src={item.sprites.front_default} alt="" />
                        <h2>{item.name}</h2>
                    </div>
                </>
        )})
        }

    </React.Fragment>
     );
}
 
export default Card;