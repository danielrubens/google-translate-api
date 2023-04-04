import { LANGUAGE, MODAL, CHANGE, SEARCH } from "../actions";

const INITIAL_STATE = {input: 'English', output: 'Portuguese', modal: null, search: ''}

const user = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case LANGUAGE:
            return {...state, input: action.payload.input, output: action.payload.output}
        case MODAL:
            return {...state, modal: action.payload}
        case CHANGE: 
            const dynamicKey = action.payload.modal
            return {...state, [dynamicKey]: action.payload.value}
        case SEARCH:
            return {...state, search: action.payload}
        default:
            return state
    }
}

export default user;