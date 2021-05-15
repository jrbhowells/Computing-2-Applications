const game_2048 = Object.create(null);

// Row and horizontal flipping
const row_flip = (row) => row.slice().reverse();
const h_flip = (board) => board.map(row_flip);

// Handles the 'left' command for each row.
const strip_zeros = (row) => row.filter((x) => x !== 0);
const combine_tiles = function (row, new_row = []) {
    if (row.length === 0) {
        return new_row;
    }
    if (row.length === 1) {
        return new_row.concat(row[0]);
    }
    const [a, b, ...rest] = row;
    if (a === b) {
        return combine_tiles(rest, new_row.concat(a + 1));
    } else {
        return combine_tiles([b].concat(rest), new_row.concat(a));
    }
};

const transpose = (array) => array[0].map(
    (ignore, colIndex) => array.map((row) => row[colIndex])
);

const compose = function (...fs) {
    return function (value) {
        return fs.reduceRight(function (a, f) {
            return f(a);
        }, value);
    };
};

const pipe = function (...fs) {
    return function (value) {
        return fs.reduce(function (a, f) {
            return f(a);
        }, value);
    };
};

// const pad_zeros = (row) => row.concat((new Array(4 - row.length)).fill(0));

const pad_zeros = (row) => row.concat((new Array(4 - row.length)).fill(0));

// const row_left = (row) => pad_zeros(combine_tiles(strip_zeros(row)));

// const row_left = compose(pad_zeros, combine_tiles, strip_zeros);

const row_left = pipe(
    strip_zeros,
    combine_tiles,
    pad_zeros
);

game_2048.left = (board) => (board).map(row_left);

// game_2048.right = (board) => h_flip(game_2048.left(h_flip(board)));
game_2048.right = compose(h_flip, game_2048.left, h_flip);

game_2048.up = compose(transpose, game_2048.left, transpose);

game_2048.down = compose(transpose, game_2048.right, transpose);

// Calculate the score of a board
game_2048.score = function (board) {
    const board_array = board[0].concat(board[1], board[2], board[3]);
    return board_array.reduce((acc, current) => acc + 2 ** current);
};

// Create new board
game_2048.new_board = () => [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

// Check for valid moves
game_2048.any_valid_moves = function (board) {
    if (board.left === board && board.right === board && board.up === board && board.down === board) {
        return false;
    }
    return true;
};

export default Object.freeze(game_2048);
