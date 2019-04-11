import React from 'react';
import styles from './MenuToggle.module.css';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes, faBars} from '@fortawesome/free-solid-svg-icons'

const MenuToggle = ({isOpen, onToggle}) => {


  const cls = [styles.MenuToggle];
  if(isOpen){
    cls.push(styles.open);
  }


  return (
        <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className={cls.join(' ')}
              onClick={onToggle}
        />
  );
};

export default MenuToggle;
