import React from 'react';
import PropTypes from 'prop-types'
import playIcon from '../assets/static/playicon.png'
import plusIcon from '../assets/static/plus.png'
import '../assets/styles/components/CarruselItem.scss'
const CarruselItem = ({ cover, title, year, contentRating, duration}) => (
    <div className="carrusel-item">
    <img src={cover} alt="img1" className={title} />
    <div className="carrusel-img_details">
        <div className="carrusel-img-container">
            <img className="carrusel-img-icon" src={playIcon} alt="Play" />
            <img className="carrusel-img-icon" src={plusIcon} alt="plus" />   
        </div>
        <p className="carrusel-details-title">{title}</p>
        <p className="carrusel-details-subtitle">
            {`${year} ${contentRating} ${duration}`}
        </p>
    </div>  
</div> 
)

CarruselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
}

export default CarruselItem;