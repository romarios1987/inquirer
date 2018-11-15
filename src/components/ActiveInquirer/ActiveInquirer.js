import React from 'react';
import './ActiveInquirer.css';
import AnswersList from "./AnswersList/AnswersList";


const ActiveInquirer = (props) => {
    return (
        <div className='ActiveInquirer'>
            <h3 className='Question'>
                <span><strong>3.</strong>&nbsp;Headline question</span>
                <small>4 of 12</small>
            </h3>
            <AnswersList
                answers={props.answers}
            />
        </div>
    )
};


export default ActiveInquirer;