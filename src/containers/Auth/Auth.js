import React, {Component} from 'react';
import Button from "../../components/UI/Button/Button";
import './Auth.css';
import Input from "../../components/UI/Input/Input";
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
                        <Input label='Email'/>
                        <Input type='password' label='Password' errorMessage={'test'}/>
                        <Button type='success' onClick={this.loginHandler}>Login</Button>
                        <Button type='primary' onClick={this.registerHandler}>Register</Button>
                    </form>
                </div>
            </div>
        )
    }
}