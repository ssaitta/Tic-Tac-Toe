const TOGGLE_PLAYER = 'TOGGLE_PLAYER'
const SET_PLAYER = 'SET_PLAYER'

export const togglePlayer = () => ({type: TOGGLE_PLAYER})
export const setPlayer = () => ({type: SET_PLAYER})

const initialState = 'X'

const player = function(state = initialState, action){
    switch(action.type){
        case TOGGLE_PLAYER:
            if (state === 'X'){
                return 'O'}
            else { return 'X'}
        case SET_PLAYER:
            return 'X'
        default:
        return state
    }
}

export default player
