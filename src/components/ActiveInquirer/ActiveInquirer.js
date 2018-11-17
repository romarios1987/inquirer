import React from 'react';
import './ActiveInquirer.css';
import AnswersList from "./AnswersList/AnswersList";


const ActiveInquirer = ({answers, question, onAnswerClick, inquirerLength, answerNumber}) => {

    return (
        <div className='ActiveInquirer'>
            <h3 className='Question'>
                <span><strong>{answerNumber}.</strong>&nbsp;{question}</span>
                <small>{answerNumber} of {inquirerLength}</small>
            </h3>
            <AnswersList
                answers={answers}
                onAnswerClick={onAnswerClick}
            />
        </div>
    )
};


export default ActiveInquirer;