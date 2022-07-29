import Cell from './Cell';

export default class Board extends Cell {
    constructor(props) {
        super(props);
        this.state = {
            board: [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ],
            turn: "X",
            winner: null,
            gameOver: false
        };
    }
    
    render() {
        return (
        <div className="tic-tac-toe">
            <div className="status">
                {this.state.winner ? `${this.state.winner} wins!` : `Next player: ${this.state.turn}`}
            </div>           
            <div className="board">
                {this.state.board.map((row, rowIndex) => {
                    return (
                        <div className="row" key={rowIndex}>
                            {row.map((cell, cellIndex) => {
                                return (
                                    <Cell
                                        key={cellIndex}
                                        value={cell}
                                        onClick={() => this.cellClicked(rowIndex, cellIndex)} 
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
        );
    }

    cellClicked(rowIndex, cellIndex) {
        if(this.state.gameOver) { return; } // Game over
        if(this.state.board[rowIndex][cellIndex]) { return; } // Cell isn't empty
        
        this.setCell(rowIndex, cellIndex); // Add turn to cell
        let gameOver = this.gameOver();
        if(gameOver) { this.resetGame(); }
        else{ this.changeTurn(); }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    resetGame() {
        this.sleep(3000).then(() => {
            this.setState({
                board: [
                    [null, null, null],
                    [null, null, null],
                    [null, null, null]
                ],
                winner: null,
                gameOver: false
            });
        });
    }

    setCell(rowIndex, cellIndex) {
        let newBoard = [...this.state.board];
        newBoard[rowIndex][cellIndex] = this.state.turn;
        
        this.setState({
            board: newBoard
        });
    }

    gameOver() {
        let winner = this.checkForWinner();
        let board_full = this.boardFull();

        if(winner || board_full) {
            this.setState({
                winner: winner,
                gameOver: true
            });
        }
        return winner != null || board_full == true;
    }

    boardFull() {
        // If all columns are filled
        if(this.state.board.every(row => row.every(cell => cell))) {
            return true;
        } 
        return false;
    }

    checkForWinner() {
        let board = this.state.board;

        // Check rows
        for(let rowIndex = 0; rowIndex < 3; rowIndex++) {
            // If horizontal line is full
            if(board[rowIndex][0] === board[rowIndex][1] && board[rowIndex][0] === board[rowIndex][2]) {
                return board[rowIndex][0];
            }

            // If vertical line is full
            if(board[0][rowIndex] === board[1][rowIndex] && board[0][rowIndex] === board[2][rowIndex]) {
                return board[0][rowIndex];
            }
        }

        // If diagonal (left -> right) line is full
        if(board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
            return board[0][0];
        }

        // If diagonal (right -> left) line is full
        if(board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
            return board[0][2];
        }
        return null;
    }

    changeTurn() {
        this.setState({
            turn: this.state.turn === "X" ? "O" : "X"
        });
    }
}