
function checkVer(board){
    for (let i = 0; i < 3; i++){
        if (board[i][0][0] !== undefined){
            if (board[i][0][0] === board[i][1][0] && board[i][0][0] === board[i][2][0]){
                return `${board[i][0]} wins!`
            }
       }
    }
}

function checkHor(board){
    for (let i = 0; i < 3; i++){
        if (board[0][i][0] !== undefined){
            if (board[0][i][0] === board[1][i][0] && board[0][i][0] === board[2][i][0]){
                return `${board[0][i]} wins!`
            }
        }
    }
}

function checkFull(board){
    let full = true
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            if (board[i][j].length < 1){
                full = false
            }
        }
    }
    return full ? 'Tie Game' : 'In Progress'
}

function checkDiag(board){
    if (board[0][0][0] !== undefined){
        if (board[0][0][0] === board[1][1][0] && board[0][0][0] === board[2][2][0]){
            return  `${board[1][1]} wins!`
        }
    }
    if (board[0][2][0] !== undefined){
        if ( board[0][2][0] === board[1][1][0] &&  board[0][2][0] === board[2][0][0]){
            return  `${board[1][1]} wins!`
        }
    }
}

function newStatus(board){
    let ver = checkVer(board)
    let hor = checkHor(board)
    let diag = checkDiag(board)
    let full = checkFull(board)
    return ver || hor || diag || full || 'In Progress'
}

export default newStatus
