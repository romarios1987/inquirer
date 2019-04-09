import React from 'react';
import styles from './AnswerItem.module.css';

const AnswerItem = ({answer, onAnswerClick, answerState}) => {


  const cls = [styles.AnswerItem];

  if (answerState) {
    cls.push(styles[answerState])
  }

  return (
        <li
              className={cls.join(' ')}
              onClick={() => onAnswerClick(answer.id)}
        >
          {answer.text}
        </li>
  );
};

export default AnswerItem;
