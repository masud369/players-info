import React from 'react';
import './players.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
// import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Players = (props) => {
    const player = props.player;
    const {img,first_name,last_name,id,email,oction_price} = player;
    const clickHandeler = props.clickHandeler;
    return (
        <div className='players bg-primary'>
            <img src={img} alt="" />
            <h4>Nmae:{" "+ first_name}{" "+last_name}</h4>
            <p><small> Id:{" "+id}</small></p>
            <p>E-mail:{" "+email}</p>
            <h5>Oction price {" "+ oction_price}</h5>
            <Button onClick={()=>clickHandeler(player)} variant="primary"><FontAwesomeIcon icon={faPlus} /></Button>
        </div>
    );
};

export default Players;