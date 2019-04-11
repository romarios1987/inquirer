import React, {Component} from 'react';
import styles from './QuizList.module.css'

import {NavLink} from "react-router-dom";

class QuizList extends Component {


  renderQuizzes() {
    return [1, 2, 4].map((quiz, index) => {
      return (
            <li key={index}>
              <NavLink to={'/quiz/' + quiz}>Test {quiz}</NavLink>
            </li>
      )
    })
  }

  render() {
    return (
          <div className={styles.QuizList}>
            <div>
              <h1>Quiz List</h1>

              <ul>
                {this.renderQuizzes()}
              </ul>
            </div>

          </div>
    );
  }
}

export default QuizList;
