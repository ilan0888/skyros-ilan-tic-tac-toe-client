import React from 'react';
import styles from './styles.module.css';
import {NavLink, Link} from "react-router-dom";
import logo from '../../static/tic-tac-toe.svg';
import NavBarSection from './NavBarSection';
import homePageIcon from '../../static/homepageIcon.svg';

const Menu = ({isConnected}) => {
    return (
        <header>
            <div className={styles.linkContainer}>
                <Link to={"/"}><img className={styles.logo} src={logo} alt={"tic-tac-toe"}/></Link>
                <NavBarSection to={'/'} className={styles.link} activeClassName={styles.activeLink} text={'Homepage'} img={homePageIcon}/>
            </div>
        </header>
    );
}

export default Menu;