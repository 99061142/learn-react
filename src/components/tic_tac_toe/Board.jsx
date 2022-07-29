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
        this.checkForWinner();
        this.changeTurn();
    }

    setCell(rowIndex, cellIndex) {
        let newBoard = [...this.state.board] 
        newBoard[rowIndex][cellIndex] = this.state.turn;
        
        this.setState({
            board: newBoard,
        });
    }

    checkForWinner() {
        
    }

    changeTurn() {
        this.setState({
            turn: this.state.turn === "X" ? "O" : "X",
        });
    }
}