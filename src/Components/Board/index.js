import React,{useEffect} from 'react';
import config from '../../config/config';
import SocketHandler from "../../socket/SocketHandler";
import {MADE_MOVE} from '../../Containers/Board/consts';
import {madeMove} from '../../Containers/Board/actions';
import {gameStart} from '../../Containers/Player/actions';
import styles from './styles.module.css';
import socketHandler from "../../socket";
import Cube from "../../Containers/Board/Cube";

const Board = ({didStarted, myTurn, isGameFinished, moveNumber}) => {
    useEffect(() => {
        socketHandler.addDispatchListener('moveMade',
            (move) => madeMove(move))
        socketHandler.addDispatchListener('gameStart', ({symbol}) => gameStart(symbol))
    },[]);
    return (
            <div className={styles.container}>
                <div className={styles.board}>
                    <Cube id="r0c0"/>
                    <Cube id="r0c1"/>
                    <Cube id="r0c2"/>
                    <Cube id="r1c0"/>
                    <Cube id="r1c1"/>
                    <Cube id="r1c2"/>
                    <Cube id="r2c0"/>
                    <Cube id="r2c1"/>
                    <Cube id="r2c2"/>
                </div>
                {!didStarted ? <span>Waiting for the second player...</span>
                    : isGameFinished ? <span>{myTurn ? 'Game over' : 'You won'}</span> :
                        moveNumber === 10 ? <span>Draw</span> :
                    myTurn ? <span>Play your move</span> : <span>Opponent's turn</span>
                }

            </div>
    );
};

export default Board;