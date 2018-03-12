import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addPiece } from '../store/board'
import { togglePlayer } from '../store/player'
import { updateStatus } from '../store/status'
import newStatus from './checkStatus'

const mapState = state => ({
    board: state.board,
    player: state.player,
    status: state.status
})

const mapDispatch = dispatch => ({
    addNextPiece(piece, row, col){
        dispatch(addPiece(piece, row, col))
    },
    switchPlayer(){
        dispatch(togglePlayer())
    },
    gameStatus(str){
        dispatch(updateStatus(str))
    }
})

class GameBoard extends Component{

    handleClick (evt, rowNumber, columnNum, currentBoard){
        evt.preventDefault()
        let prevStatus = this.props.status

        if (currentBoard[rowNumber][columnNum].length < 1 &&  prevStatus === "In Progress"){
            this.props.addNextPiece(this.props.player, rowNumber, columnNum)
            this.props.switchPlayer()
            this.props.gameStatus(newStatus(this.props.board))
        }
    }

    render(){
        let currentBoard = this.props.board
        let { status } = this.props
        return (
            <div>
                {
                    status !== 'In Progress' ?
                    <h1>{status}</h1>
                    :
                    ''
                }
                <table className = "gameBoard">
                {
                    currentBoard.map((elem, index) => {
                        return (<tr key={index} className = "gameBoardRow" >
                            <td onClick={evt => this.handleClick(evt, index, 0, currentBoard)} className= "gameBoardCell">{elem[0]}</td>
                            <td onClick={evt => this.handleClick(evt, index, 1, currentBoard)} className= "gameBoardCell">{elem[1]}</td>
                            <td onClick={evt => this.handleClick(evt, index, 2, currentBoard)} className= "gameBoardCell">{elem[2]}</td>
                        </tr>
                    )})
                }
                </table>
            </div>
        )
    }
}

const Board = connect(mapState, mapDispatch)(GameBoard)
export default Board
