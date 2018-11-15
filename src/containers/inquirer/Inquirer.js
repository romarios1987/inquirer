import React, {Component} from 'react';
import './Inquirer.css';
import ActiveInquirer from "../../components/ActiveInquirer/ActiveInquirer";

class Inquirer extends Component {

    state = {
        inquirer: [
            {
                answers: [
                    {text: 'Answer 1'},
                    {text: 'Answer 2'},
                    {text: 'Answer 3'}
                ]
            }
        ]
    };

    render() {
        return (
            <div className='Inquirer'>
                <h1>Inquirer</h1>
                <ActiveInquirer
                    answers={this.state.inquirer[0].answers}
                />
            </div>
        )
    }
}


export default Inquirer;