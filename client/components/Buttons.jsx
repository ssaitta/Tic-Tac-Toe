import React, { Component } from 'react'
import { connect } from 'react-redux'
import { resetBoard } from '../store/board'

const mapDispatch = dispatch => (
    {
    resetBoardFunc(){
        dispatch(resetBoard())
    }
})

const mapState = state => (
    {
        board: state.board
    }
)


class Button extends Component{
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit() {
        this.props.resetBoardFunc()
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