import * as constant from '../constant/note'

const initialState = []

export const note = (state = initialState, action) => {
    if(action.type === constant.ADDNOTE){
        return {
            ...state,
            
        }
    }
}