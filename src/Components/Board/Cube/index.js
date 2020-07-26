import React from 'react';
import socketHandler from "../../../socket";

const Cube = ({content, symbol, id, isMyTurn, isFinished, moveNumber}) => {
    const onCubeClick = () => {
      socketHandler.send('makeMove', {squareId: id, symbol: symbol})
    };
    return (
        <button disabled={(!isMyTurn || isFinished || moveNumber === 10)} onClick={onCubeClick} >
            {content}
        </button>
    );
};

export default Cube;