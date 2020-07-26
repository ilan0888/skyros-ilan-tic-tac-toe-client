import React from 'react';
import styles from './styles.module.css';
import Board from "../../Containers/Board";


const HomePage = ({}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Tic Tac Toe</h1>
            <Board/>
        </div>
    );
};

export default HomePage;