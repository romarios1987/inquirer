import React, {Component} from 'react';
import './NavBar.css'
import BackDrop from "../../UI/BackDrop/BackDrop";


const links = [1, 4, 5];


class NavBar extends Component {

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <a href='hello'>Link {link}</a>
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