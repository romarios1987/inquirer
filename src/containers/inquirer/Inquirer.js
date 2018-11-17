import React, {Component} from 'react';
import './Inquirer.css';
import ActiveInquirer from "../../components/ActiveInquirer/ActiveInquirer";

class Inquirer extends Component {

    state = {
        activeQuestion: 0,
        inquirer: [
            {
                question: 'Headline question 1?',
                rightAnswerId: 3,
                id: 1,
                answers: [
                    {text: 'Answer 1', id: 1},
                    {text: 'Answer 2', id: 2},
                    {text: 'Answer 3', id: 3}
                ]
            },
            {
                question: 'Headline question 2?',
                rightAnswerId: 1,
                id: 2,
                answers: [
                    {text: 'Answer 1', id: 1},
                    {text: 'Answer 2', id: 2},
                    {text: 'Answer 3', id: 3}
                ]
            }
        ]
    };


    onAnswerClickHandler = (answerId) => {
        console.log(`answerId: ${answerId}`);

        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    };


    render() {
        return (
            <div className='Inquirer'>
                <h1>Inquirer</h1>
                <ActiveInquirer
                    answers={this.state.inquirer[this.state.activeQuestion].answers}
                    question={this.state.inquirer[this.state.activeQuestion].question}
                    onAnswerClick={this.onAnswerClickHandler}
                    inquirerLength={this.state.inquirer.length}
                    answerNumber={this.state.activeQuestion + 1}
                />
            </div>
        )
    }
}


export default Inquirer;