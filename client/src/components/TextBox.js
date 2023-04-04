import SelectDropDown from './SelectDropDown'
import { translate } from '../api';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const TextBox = ({style}) => {
    const options = {input: 'Enter Text', output: 'Translation'}
    const enabled = options[style] === 'Enter Text'
    
    const [inputMessage, setInputMessage] = useState('')
    const [outputMessage, setOutputMessage] = useState('')
    const [translation, setTranslation] = useState({input: '', output: ''})
    
    const code = useSelector(state => state.user.code)
    
    const handleChange = async (value) => {
        setInputMessage(value)
        const body = {message: value, language: code}
        const translated = await translate(body)
        // setOutputMessage(translated.data)
        console.log(translated.data)
        // setTranslation({input: value, output: translated})
    }
    // const translation = {input: inputMessage, output: outputMessage}

    return(
        <div className={style} data-testid={`textbox-${style}`}>.
            <SelectDropDown style={style}/>
            <textarea 
                placeholder={options[style]}
                onChange={({target}) => handleChange(target.value)}
                // disabled={!enabled}
                // value={translation[style]}
                />
        </div>
    );
};
    
export default TextBox;