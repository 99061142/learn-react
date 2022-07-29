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
}