import React, {Component} from 'react';
import './InquirerList.css'
import {NavLink} from 'react-router-dom';
import {Col, ListGroup, ListGroupItem} from 'reactstrap';

export default class InquirerList extends Component {

    renderInquirers = () => {
        return [1, 2, 4].map((inquirer, index) => {
            return (
                <ListGroupItem key={index}>
                    <NavLink to={`/inquirer/${inquirer}`}>
                        test{inquirer}
                    </NavLink>
                </ListGroupItem>
            )
        })
    };

    render() {
        return (
            <div className='InquirerList'>
                <Col lg={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
                    <h1 className="text-center text-white">List tests</h1>
                    <ListGroup>
                        {this.renderInquirers()}
                    </ListGroup>
                </Col>
            </div>
        )
    }
}