import React from 'react';
import Proptypes from 'prop-types';

const PageHeader = ({ title, placeholder }) => (
    <section id='pageHeader'>
        <p className='body'>{placeholder}</p>
        <h1>{title}</h1>
    </section>
);

export default PageHeader;

PageHeader.propTypes = {
    title: Proptypes.string,
    placeholder: Proptypes.string,
};
