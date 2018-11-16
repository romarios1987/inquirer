import React from 'react';
import './ActiveInquirer.css';
import AnswersList from "./AnswersList/AnswersList";


const ActiveInquirer = ({answers, question, onAnswerClick}) => {

    return (
        <div className='ActiveInquirer'>
            <h3 className='Question'>
                <span><strong>3.</strong>&nbsp;{question}</span>
                <small>4 of 12</small>
            </h3>
            <AnswersList
                answers={answers}
                onAnswerClick={onAnswerClick}
            />
        </div>
    )
};


export default ActiveInquirer;