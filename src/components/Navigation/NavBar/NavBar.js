import React, {Component} from 'react';
import './NavBar.css'
import {NavLink} from 'react-router-dom';
import BackDrop from "../../UI/BackDrop/BackDrop";


const links = [
    {to: '/', label: 'List tests', exact: true},
    {to: '/auth', label: 'Authorization', exact: false},
    {to: '/inquirer-creator', label: 'Create test', exact: false}
];


class NavBar extends Component {


    clickHandler = () =>{
        this.props.onClose()
    };

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName='active'
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        const cls = [
            'NavBar'
        ];

        if (!this.props.isOpen) {
            cls.push('close')
        }

        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <BackDrop onClick={this.props.onClose}/> : null}
            </>
        )
    }
}

export default NavBar;