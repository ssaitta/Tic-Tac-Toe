import React, { Component } from 'react'
import { connect } from 'react-redux'
import { resetBoard } from '../store/board'
import { updateStatus } from '../store/status'
import { setPlayer } from '../store/player'

const mapDispatch = dispatch => (
    {
    resetBoardFunc(){
        dispatch(resetBoard())
    },
    changeStatus(str){
        dispatch(updateStatus(str))
    },
    resetPlayer(){
        dispatch(setPlayer())
    }
})

const mapState = state => (
    {
        board: state.board,
        status: state.status
    }
)


class Button extends Component{
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit() {
        this.props.resetBoardFunc()
        this.props.changeStatus('In Progress')
        this.props.resetPlayer()
    }

    render(){
        return(
            <div class="buttonContainer">
                <button type='submit' onClick={this.handleSubmit} className='resetButton'>Reset</button>
            </div>
        )
    }
}

const Buttons = connect(mapState, mapDispatch)(Button)

export default Buttons