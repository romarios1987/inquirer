import React, {Component} from 'react';
import styles from './Quiz.module.css';
import ActiveQuiz from "../../ActiveQuiz/ActiveQuiz";

class Quiz extends Component {

  state = {
    activeQuestion: 0,
    answerState: null, // {[id]:'success' || 'error'}
    quiz: [
      {
        question: 'Headline question 1?',
        rightAnswerId: 3,
        id: 1,
        answers: [
          {text: 'Answer 1', id: 1},
          {text: 'Answer 2', id: 2},
          {text: 'Answer 3', id: 3},
          {text: 'Answer 4', id: 4}
        ]
      },
      {
        question: 'Headline question 2?',
        rightAnswerId: 1,
        id: 2,
        answers: [
          {text: 'Answer 1', id: 1},
          {text: 'Answer 2', id: 2},
          {text: 'Answer 3', id: 3},
          {text: 'Answer 4', id: 4}
        ]
      }
    ]
  };


  onAnswerClickHandler = (answerId) => {
    console.log(answerId);

    this.setState({
      activeQuestion: this.state.activeQuestion + 1
    })
  };

  render() {

    const {quiz, activeQuestion} = this.state;

    return (
          <div className={styles.Quiz}>
            <div className={styles.QuizWrapper}>
              <h1 className="align-center">Choose the correct answer</h1>

              <ActiveQuiz
                    answers={quiz[activeQuestion].answers}
                    question={quiz[activeQuestion].question}
                    onAnswerClick={this.onAnswerClickHandler}
                    quizLenght={quiz.length}
                    answerNumber={activeQuestion + 1}
              />

            </div>
          </div>
    );
  }
}

export default Quiz;
