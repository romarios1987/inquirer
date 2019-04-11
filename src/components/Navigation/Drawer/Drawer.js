import React, {Component} from 'react';
import styles from './Drawer.module.css';
import Backdrop from "../../ui/Backdrop/Backdrop";

const links = [
  1, 2, 3
];

class Drawer extends Component {

  renderLinks() {
    return links.map((link, index) => {
      return (
            <li key={index}>
              <a href={''}>Link {link}</a>
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
