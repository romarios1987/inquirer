import React from 'react';
import './AnswerItem.css';


const AnswerItem = ({text}) => {
    return (
        <li className='AnswerItem'>
            {text}
        </li>
    )
};

export default AnswerItem;