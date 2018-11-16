import React from 'react';
import './AnswerItem.css';

const AnswerItem = ({text, onAnswerClick, id}) => {
    return (
        <li className='AnswerItem' onClick={() => onAnswerClick(id)}>
            {text}
        </li>
    )
};
export default AnswerItem;