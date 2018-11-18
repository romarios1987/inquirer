import React from 'react';
import './FinishedInquirer.css';


const FinishedInquirer = (props) => {
    //console.log(inquirer);
    return (
        <div className='FinishedInquirer'>
            <ul>
                {props.inquirer.map((inquirerItem, index) => {
                    console.log(props.results[inquirerItem]);

                    const cls = [
                        props.results[inquirerItem.id] === 'error' ? 'fa-times' : 'fa-check'
                    ];
                    //console.log(inquirer.results);
                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>. &nbsp;
                            {inquirerItem}
                            <i className={cls.join(' ')}/>
                        </li>
                    )
                })}
            </ul>

            <p>Right 4 of 10</p>
            <div>
                <button>To retry</button>
            </div>
        </div>
    )
};


export default FinishedInquirer;