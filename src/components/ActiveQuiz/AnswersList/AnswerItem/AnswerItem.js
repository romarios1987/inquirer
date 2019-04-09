import React from 'react';
import styles from './AnswerItem.module.css';

const AnswerItem = ({answer, onAnswerClick}) => {
  return (
        <li
              className={styles.AnswerItem}
              onClick={() => onAnswerClick(answer.id)}
        >
          {answer.text}
        </li>
  );
};

export default AnswerItem;
