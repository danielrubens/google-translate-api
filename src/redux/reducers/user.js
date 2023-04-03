import { LANGUAGE, MODAL } from "../actions";

const INITIAL_STATE = {input: 'English', output: 'Portuguese', modal: false}

const user = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case LANGUAGE:
            return {...state, input: action.payload.input, output: action.payload.output}
        case MODAL:
            return {...state, modal: action.payload}
        default:
            return state
    }
}

export default user;