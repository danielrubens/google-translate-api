import SelectDropDown from './SelectDropDown'
import { translate } from '../api';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

const TextBox = ({style}) => {
    const options = {input: 'Enter Text', output: 'Translation'}
    const enabled = options[style] === 'Enter Text'
    const initialMessage = useSelector(state => state.user.translation.input)

    const [outputMessage, setOutputMessage] = useState('')

    const dispatch = useDispatch()
    
    const code = useSelector(state => state.user.code)
    const translation = useSelector(state => state.user.translation)
    
    useEffect(() => {
        const body = {message: initialMessage, language: code}
        console.log(body)
        translate(body).then((data) => setOutputMessage(data.data))
        dispatch({type: 'TRANSLATE', payload: {input: initialMessage, output: outputMessage}})
    }, [translation.output, code, outputMessage]
    )
    const handleChange = (value) => {
        const body = {message: value, language: code}
        translate(body).then((data) => setOutputMessage(data.data))
        dispatch({type: 'TRANSLATE', payload: {input: value, output: outputMessage}})
    }


    return(
        <div className={style} data-testid={`textbox-${style}`}>.
            <SelectDropDown style={style}/>
            <textarea 
                placeholder={options[style]}
                onChange={({target}) => handleChange(target.value)}
                disabled={!enabled}
                value={translation[style]}
                />
        </div>
    );
};
    
export default TextBox;