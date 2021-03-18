import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    id,
    variant = 'primary',
    additionalVariant = '',
    size = 'regular',
    label,
    disabled = false,
    handleClick,
}) => (<button
    className={`button title ${size} ${variant} ${additionalVariant}${disabled ? ' disabled' : ''}`}
    id={id}
    onClick={handleClick}
    disabled={disabled}>
    {label}
</button>);

Button.propTypes = {
    id: PropTypes.string.isRequired,
    variant: PropTypes.string,
    additionalVariant: PropTypes.string,
    size: PropTypes.string,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    handleClick: PropTypes.func.isRequired,
};

export default Button;
