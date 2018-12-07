import React from 'react';
import './FinishedInquirer.css';

import { Button } from 'reactstrap';

import {Link} from 'react-router-dom';

const FinishedInquirer = (props) => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total;
    }, 0);
    return (
        <div className='FinishedInquirer'>
            <ul>
                {
                    props.inquirer.map((inquirerItem, index) => {
                        const cls = [
                            'fa',
                            props.results[inquirerItem.id] === 'error' ? 'fa-times' : 'fa-check',
                            props.results[inquirerItem.id]
                        ];
                        return (
                            <li key={index}>
                                <strong>{index + 1}</strong>. &nbsp;
                                {inquirerItem.question}
                                <i className={cls.join(' ')}/>
                            </li>
                        )

                    })
                }
            </ul>
            <p>Right {successCount} of {props.inquirer.length}</p>
            <div>
                <Button style={{marginRight: '10px'}} onClick={props.onRetry} color="primary">To retry</Button>
                <Link to='/'>
                    <Button color="success">To list tests</Button>
                </Link>
            </div>
        </div>
    )
};
export default FinishedInquirer;