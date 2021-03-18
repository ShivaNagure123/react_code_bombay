import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
    id,
    size,
    image,
    imageSrc,
    content,

}) => (
    <div className={`card ${size}`} id={id}>
        <main className='card-content'>
            {image && <section className='card-content-image-container'>
                <img src={imageSrc} alt='cardImage'></img>
            </section>}
            <section className='card-content-container'>
                {content}
            </section>
        </main>
    </div >);

Card.propTypes = {
    id: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    image: PropTypes.bool.isRequired,
    imageSrc: PropTypes.string,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object,
    ]).isRequired,
};

export default Card;
