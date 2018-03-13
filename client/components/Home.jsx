import React, { Component } from 'react'
import Board from './Board'
import Buttons from './Buttons'

function Home(){
    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <Board />
            <Buttons />
        </div>
    )
 }

export default Home
