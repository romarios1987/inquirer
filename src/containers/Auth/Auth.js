import React, {Component} from 'react';
import Button from "../../components/UI/Button/Button";
import './Auth.css';
export default class Auth extends Component {


    loginHandler = ()=>{

    };

    registerHandler = ()=>{

    };

    submitHandler = (e)=>{
        e.preventDefault()
    };




    render() {
        return (
            <div className='Auth'>
                <div>
                    <h1>Authorization</h1>

                    <form onSubmit={this.submitHandler} className='AuthForm'>
                        <input type="text"/>
                        <input type="text"/>
                        <Button type='success' onClick={this.loginHandler}>Login</Button>
                        <Button type='primary' onClick={this.registerHandler}>Register</Button>
                    </form>
                </div>
            </div>
        )
    }
}