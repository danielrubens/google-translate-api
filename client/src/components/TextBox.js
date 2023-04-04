import SelectDropDown from './SelectDropDown'

const TextBox = ({style}) => {
    const options = {input: 'Enter Text', output: 'Translation'}
    const enabled = options[style] === 'Enter Text' 
    return(
        <div className={style} data-testid={`textbox-${style}`}>.
            <SelectDropDown style={style}/>
            <textarea 
                placeholder={options[style]}
                disabled={!enabled}
                />
        </div>
    );
};
    
export default TextBox;