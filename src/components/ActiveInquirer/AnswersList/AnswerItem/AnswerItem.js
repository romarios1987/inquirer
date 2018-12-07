import React from 'react';
import './AnswerItem.css';
import {ListGroupItem} from 'reactstrap';


const AnswerItem = ({text, onAnswerClick, id, state}) => {

    const stateClass = ['AnswerItem'];


    if (state) {
        stateClass.push(state)
    }

    return (
        <ListGroupItem className={stateClass.join(' ')} onClick={() => onAnswerClick(id)}>
            {text}
        </ListGroupItem>
    )
};
export default AnswerItem;