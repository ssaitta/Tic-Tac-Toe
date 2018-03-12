const TOGGLE_PLAYER = 'TOGGLE_PLAYER'

export const togglePlayer = () => ({type: TOGGLE_PLAYER})

const initialState = 'X'

const player = function(state = initialState, action){
    switch(action.type){
        case TOGGLE_PLAYER:
            if (state === 'X'){
                return 'O'}
            else { return 'X'}
        default:
        return state
    }
}

export default player