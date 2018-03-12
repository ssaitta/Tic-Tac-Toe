const RESET_BOARD = "REST_BOARD"
const ADD_PIECE = "ADD_PIECE"

export const resetBoard = () => ({type: RESET_BOARD})
export const addPiece = (piece, row, col) => (
    {type: ADD_PIECE,
    piece: piece,
    row: row,
    col: col,
})

const initialState = [
    [[], [], []],
    [[], [], []],
    [[], [], []]
] //empty board

const board = function(state = initialState, action){
    switch (action.type){
        case RESET_BOARD:
            return [[[], [], []], [[], [], []], [[], [], []]]
        case ADD_PIECE:
            let newBoard = [].concat(state)
            if(newBoard[action.row][action.col].length < 1){
                newBoard[action.row][action.col].push(action.piece)
            }
            return newBoard
        default:
            return state
    }
}

export default board
