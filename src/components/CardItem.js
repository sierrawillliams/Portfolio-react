import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function CardItem(props) {
  return (
    <>
    <li className='cards__item' style={{backgroundColor: '#ffffff'}}>
        <Link className='cards__item__link' to={props.path}>
            <figure className='cards__item__pic-wrap' style={{fontFamily: 'Montserrat'}} data-category={props.label}>
                <img className='cards__item__img' src={props.src} alt="travel image"/>
            </figure>
            <div className='cards__item__info'>
                <h5 className='cards__item__text' style={{fontFamily: 'Montserrat'}}>{props.text}</h5>
            </div>
            <div className='cards__item__languages'>
              <p className='cards__item__language__text' style={{fontFamily: 'Montserrat'}}>{props.language}</p>
            </div>
        </Link>
    </li>
    </>
  )
}

export default CardItem