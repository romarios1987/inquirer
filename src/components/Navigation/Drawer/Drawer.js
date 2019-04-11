import React, {Component} from 'react';
import styles from './Drawer.module.css';
import Backdrop from "../../ui/Backdrop/Backdrop";

import {NavLink} from "react-router-dom";

const links = [
  {to: '/', label: 'Quiz list', exact: true},
  {to: '/auth', label: 'Login', exact: false},
  {to: '/quiz-creator', label: 'Add quiz', exact: false},
];

class Drawer extends Component {

  renderLinks() {
    return links.map((link, index) => {
      return (
            <li key={index}>
              <NavLink
                    to={link.to}
                    exact={link.exact}
                    activeClassName={styles.active}
                    onClick={this.props.onClose}
              >
                {link.label}
              </NavLink>
            </li>
      )
    })
  }

  render() {

    const {isOpen, onClose} = this.props;

    const cls = [styles.Drawer];

    if (!isOpen) {
      cls.push(styles.close);
    }


    return (
          <>
            <nav className={cls.join(' ')}>
              <ul>
                {this.renderLinks()}
              </ul>
            </nav>
            {isOpen ? <Backdrop onClick={onClose}/> : null}
          </>
    );
  }
}

export default Drawer;
