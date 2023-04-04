import SelectDropDown from './SelectDropDown'
import { translate } from '../api';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const TextBox = ({style}) => {
    const options = {input: 'Enter Text', output: 'Translation'}
    const enabled = options[style] === 'Enter Text'

    const [inputMessage, setInputMessage] = useState('')
    const [outputMessage, setOutputMessage] = useState('')

    const code = useSelector(state => state.user.code)

    const handleChange = async (value) => {
        setInputMessage(value)
        const body = {message: value, language: code}
        const translated = await translate(body)
        console.log(translated.data)
        setOutputMessage(translated.data)
    }
    return(
        <div className={style} data-testid={`textbox-${style}`}>.
            <SelectDropDown style={style}/>
            <textarea 
                placeholder={options[style]}
                onChange={({target}) => handleChange(target.value)}
                // disabled={!enabled}
                value={style === 'input' ? inputMessage : outputMessage}
                />
        </div>
    );
};
    
export default TextBox;