import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addPiece } from '../store/board'
import { togglePlayer } from '../store/player'

const mapState = state => ({
    board: state.board,
    player: state.player
})

const mapDispatch = dispatch => ({
    addNextPiece(piece, row, col){
        dispatch(addPiece(piece, row, col))
    },
    switchPlayer(){
        dispatch(togglePlayer())
    }
})

class GameBoard extends Component{

    handleClick (e, rowNumber, columnNum){
        e.preventDefault()
        this.props.addNextPiece(this.props.player, rowNumber, columnNum)
        this.props.switchPlayer()
    }

    render(){
        let currentBoard = this.props.board
        let currentPlayer = this.props.player
        return (
            <div>
                <table className = "gameBoard">
                {
                    currentBoard.map((elem, index) => {
                        return <tr className = "gameBoardRow" >
                            <td onClick={e => this.handleClick(e, index, 0)} className= "gameBoardCell">{elem[0]}</td>
                            <td onClick={e => this.handleClick(e, index, 1)} className= "gameBoardCell">{elem[1]}</td>
                            <td onClick={e => this.handleClick(e, index, 2)} className= "gameBoardCell">{elem[2]}</td>
                        </tr>
                    })
                }
                </table>
            </div>
        )
    }
}

const Board = connect(mapState, mapDispatch)(GameBoard)
export default Board
