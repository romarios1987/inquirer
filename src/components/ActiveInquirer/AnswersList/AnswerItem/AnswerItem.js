import React from 'react';
import './AnswerItem.css';

const AnswerItem = ({text, onAnswerClick, id, state}) => {

    const stateClass = ['AnswerItem'];


    if (state) {
        stateClass.push(state)
    }

    return (
        <li className={stateClass.join(' ')} onClick={() => onAnswerClick(id)}>
            {text}
        </li>
    )
};
export default AnswerItem;