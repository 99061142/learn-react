import TicTacToeCell from './TicTacToeCell';

export default class TicTacToeBoard extends TicTacToeCell {
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
                                    <TicTacToeCell
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