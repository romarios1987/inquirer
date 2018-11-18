import React, {Component} from 'react';
import './Inquirer.css';
import ActiveInquirer from "../../components/ActiveInquirer/ActiveInquirer";

class Inquirer extends Component {

    state = {
        activeQuestion: 0,
        answerState: null, // {[id]:'success' || 'error'}
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

        if(this.state.answerState){
            const key = Object.keys(this.state.answerState)[0];
            if(this.state.answerState[key] === 'success'){
                return
            }
        }


        //console.log(`answerId: ${answerId}`);

        const question = this.state.inquirer[this.state.activeQuestion];

        if (question.rightAnswerId === answerId) {
            // если ответили правильно

            this.setState({
                answerState: {[answerId]: 'success'}
            });
            const timeout = window.setTimeout(() => {
                if (this.isInquirerFinished()) {
                    console.log('Finished');
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 500);

        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            });
        }


    };


    isInquirerFinished() {
        return this.state.activeQuestion + 1 === this.state.inquirer.length;
    }


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
                    state={this.state.answerState}
                />
            </div>
        )
    }
}


export default Inquirer;