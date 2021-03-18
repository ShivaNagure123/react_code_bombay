import React from 'react';
import PropTypes from 'prop-types';

const LabelledTextarea = ({
    id,
    label,
    breakColumn,
    onChange,
    value,
    placeholder,
    currentCharCount = 0,
    maxCharCount = 512,
}) => (<>
    {label && <label className='form-label title' id={`${id}-textarea-label`} htmlFor={`${id}-textarea`}>{label}</label>}
    <textarea className='form-textarea body-small' id={`${id}-textarea`} name={id} value={value} placeholder={placeholder} maxLength={maxCharCount} onChange={(event) => onChange(event)} required />
    <div id='char-count'>
        <span id='current'>{currentCharCount}</span>
        <span id='maximum'> / {maxCharCount}</span>
    </div>
    {breakColumn && <div className='flex-break' />}
</>);

LabelledTextarea.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    breakColumn: PropTypes.bool.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    currentCharCount: PropTypes.number,
    maxCharCount: PropTypes.number,
};

export default LabelledTextarea;
