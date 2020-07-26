export default function (board) {
    const possibleWins = [
        board.get('r0c0') + board.get('r0c1') + board.get('r0c2'),
        board.get('r1c0') + board.get('r1c1') + board.get('r1c2'),
        board.get('r2c0') + board.get('r2c1') + board.get('r2c2'),
        board.get('r0c0') + board.get('r1c0') + board.get('r2c0'),
        board.get('r0c1') + board.get('r1c1') + board.get('r2c1'),
        board.get('r0c2') + board.get('r1c2') + board.get('r2c2'),
        board.get('r0c0') + board.get('r1c1') + board.get('r2c2'),
        board.get('r0c2') + board.get('r1c1') + board.get('r2c0'),

    ];
    for(let win of possibleWins){
        if(win === ('XXX' || 'OOO')) return true
    }
    return false
}