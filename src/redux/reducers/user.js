import { LANGUAGE } from "../actions";

const INITIAL_STATE = {input: 'English', output: 'Portuguese'}

const user = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case LANGUAGE:
            return {input: action.payload.input, output: action.payload.output}
        default:
            return state
    }
}

export default user;