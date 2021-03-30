import React from 'react';
import PropTypes from 'prop-types';

export const LabelledInputTypeText = 'text';
export const LabelledInputTypeTel = 'tel';
export const LabelledInputTypeEmail = 'email';
export const LabelledInputTypePassword = 'password';
export const LabelledInputTypeSubmit = 'submit';
export const LabelledInputTypeReset = 'reset';


const LabelledInput = ({
    id,
    type,
    label,
    value,
    onChange,
    breakColumn,
    placeholder,
}) => (<>
    {label && <label className='form-label title' id={`${id}-input-label`} htmlFor={`${id}-input`}>{label}</label>}
    <input type={type} className={type === LabelledInputTypeText || LabelledInputTypePassword ? 'form-input body-small' : 'title'} id={`${id}-input`} name={id}
        value={value} placeholder={placeholder} autoComplete='off' onChange={(event) => onChange(event)} required />
    {breakColumn && <div className='flex-break' />}
</>);

LabelledInput.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    breakColumn: PropTypes.bool.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};

export default LabelledInput;
