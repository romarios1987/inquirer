import React, {Component} from 'react';
import './InquirerList.css'
import {NavLink} from 'react-router-dom';

export default class InquirerList extends Component {

    renderInquirers() {
        return [1, 2, 4].map((inquirer, index) => {
            return (
                <li key={index}>
                    <NavLink to={`/inquirer/${inquirer}`}>
                        test{inquirer}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <div className='InquirerList'>
                <div>
                    <h1>List tests</h1>
                    <ul>
                        {this.renderInquirers()}
                    </ul>
                </div>
            </div>
        )
    }
}