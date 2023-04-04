import SelectDropDown from './SelectDropDown'
import { translate } from '../api';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

const TextBox = ({style}) => {
    const options = {input: 'Enter Text', output: 'Translation'}
    const enabled = options[style] === 'Enter Text'
    const [outputMessage, setOutputMessage] = useState('')

    const dispatch = useDispatch()
    
    const code = useSelector(state => state.user.code)
    const translation = useSelector(state => state.user.translation)
    
    useEffect(() => {}, [translation.output])
    const handleChange = (value) => {
        const body = {message: value, language: code}
        translate(body).then((data) => setOutputMessage(data.data))
        console.log(translation)
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