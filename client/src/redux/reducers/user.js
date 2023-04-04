import { LANGUAGE, MODAL, CHANGE } from "../actions";

const INITIAL_STATE = {input: 'English', output: 'Portuguese', modal: null}

const user = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case LANGUAGE:
            return {...state, input: action.payload.input, output: action.payload.output}
        case MODAL:
            return {...state, modal: action.payload}
        case CHANGE: 
            const dynamicKey = action.payload.modal
            console.log(action.payload)
            // console.log(dynamicKey)
            // console.log(action.payload.value)
            return {...state, [dynamicKey]: action.payload.value}
        default:
            return state
    }
}

export default user;