import React from 'react';
import './AnswersList.css';
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = ({answers}) => {
    return (
        <div className='AnswersList'>
            <ul>
                {answers.map((answer) => {

                    const {id, ...answerProps} = answer;
                    return (
                        <AnswerItem key={answer.id}
                                    {...answerProps}
                            // key={answerProps.index}
                            // text={answerProps.text}
                        />
                    )

                })}
            </ul>
        </div>
    )
};


export default AnswersList;