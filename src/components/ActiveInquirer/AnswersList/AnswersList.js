import React from 'react';
import './AnswersList.css';
import AnswerItem from "./AnswerItem/AnswerItem";
import {ListGroup} from 'reactstrap';

const AnswersList = ({answers, onAnswerClick, state}) => {
    return (
        <div className='AnswersList'>
            <ListGroup>
                {answers.map((answer) => {

                    const {id, ...answerProps} = answer;
                    return (
                        <AnswerItem key={id}
                                    {...answerProps}
                                    id={id}
                            // text={answerProps.text}
                                    onAnswerClick={onAnswerClick}
                                    state={state ? state[id] : null}
                        />
                    )

                })}
            </ListGroup>
        </div>
    )
};


export default AnswersList;