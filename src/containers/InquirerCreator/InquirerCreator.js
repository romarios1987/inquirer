import React, {Component} from 'react';
import './InquirerCreator.css'
import Button from "../../components/UI/Button/Button";


export default class InquirerCreator extends Component {


    submitHandler = (event) => {
        event.preventDefault()
    };

    addQuestionHandler = () => {

    };
    createInquirerHandler = () => {

    };


    render() {
        return (
            <div className='InquirerCreator'>
                <div>
                    <h1>InquirerCreator</h1>

                    <form onSubmit={this.submitHandler}>


                        <input type="text"/>
                        <hr/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>

                        <select></select>

                        <Button
                            type='btn_primary'
                            onClick={this.addQuestionHandler}>
                            Add Question
                        </Button>
                        <Button
                            type='btn_success'
                            onClick={this.createInquirerHandler}>
                            Create Test
                        </Button>
                    </form>
                </div>
            </div>

        )
    }
}