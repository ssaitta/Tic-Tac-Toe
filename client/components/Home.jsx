import React, { Component } from 'react'
import Header from './Header'
import Board from './Board'
import Buttons from './Buttons'

// class Home extends Component{
//     render(){
function Home(){
    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <Board />
            <Buttons />
        </div>
    )
 }
//     }
// }

export default Home
