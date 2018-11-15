import React, {Component} from 'react';
import './Inquirer.css';
import ActiveInquirer from "../../components/ActiveInquirer/ActiveInquirer";

class Inquirer extends Component {

    state = {
        inquirer: [
            {
                question: 'Headline question??33?',
                rightAnswerId: 3,
                answers: [
                    {text: 'Answer 1', id:1},
                    {text: 'Answer 2', id:2},
                    {text: 'Answer 3', id:3}
                ]
            }
        ]
    };


    onAnswerClickHandler = (answerId) => {
        console.log(answerId);
    };


    render() {
        return (
            <div className='Inquirer'>
                <h1>Inquirer</h1>
                <ActiveInquirer
                    answers={this.state.inquirer[0].answers}
                    question={this.state.inquirer[0].question}
                    //onAnswerClick={this.onAnswerClickHandler}
                />
            </div>
        )
    }
}


export default Inquirer;