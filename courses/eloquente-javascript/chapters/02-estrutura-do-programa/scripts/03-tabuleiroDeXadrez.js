module.exports = function chessBoard(size) {
    let board = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let isHash = (i + j) % 2 === 0;
            board += isHash ? '#' : ' ';
        }
        board += '\n';
    }

    return board;
};