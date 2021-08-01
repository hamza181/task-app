import * as constant from '../constant/counter'

const initialState = {
    counter: 0
}

export const counter = (state = initialState, action) => {
    if(action.type === constant.increment){
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if(action.type === constant.decrement){

        return {
            ...state,
            counter: state.counter - 1
        }
    }

    return state
}