import React from 'react';
import './FinishedInquirer.css';


const FinishedInquirer = (props) => {
    //console.log(props.inquirer);


    const successCount = Object.keys(props.results).reduce((total,key)=>{
        if(props.results[key] === 'success'){
            total++
        }
        return total;
    }, 0);

    return (
        <div className='FinishedInquirer'>

            <ul>

                {
                    props.inquirer.map((inquirerItem, index) => {


                        console.log(inquirerItem.id);

                        const cls = [
                            'fa',
                            props.results[inquirerItem.id] === 'error' ? 'fa-times' : 'fa-check',
                            props.results[inquirerItem.id]
                        ];
                        return(
                            <li key={index}>
                                <strong>{index +1}</strong>. &nbsp;
                                {inquirerItem.question}
                                <i className={cls.join(' ')}/>
                            </li>
                        )

                    })
                }

            </ul>

            <p>Right {successCount} of {props.inquirer.length}</p>
            <div>
                <button onClick={props.onRetry}>To retry</button>
            </div>
        </div>
    )
};


export default FinishedInquirer;