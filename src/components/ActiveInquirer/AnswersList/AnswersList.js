import React from 'react';
import './AnswersList.css';
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = ({answers, onAnswerClick}) => {
    //console.log(onAnswerClick);
    return (
        <div className='AnswersList'>
            <ul>
                {answers.map((answer) => {

                    const {id, ...answerProps} = answer;
                    //console.log(id);
                    return (
                        <AnswerItem key={id}
                                    {...answerProps}
                                    id={id}
                            // text={answerProps.text}
                                    onAnswerClick={onAnswerClick}
                        />
                    )

                })}
            </ul>
        </div>
    )
};


export default AnswersList;