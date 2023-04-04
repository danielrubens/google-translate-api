import SelectDropDown from './SelectDropDown'

const TextBox = ({style}) => {
    const options = {input: 'Enter Text', output: 'Translation'}
    const enabled = options[style] === 'Enter Text' 

    const handleChange = (value) => {
        if(style === 'input'){
            console.log('chegou aqui')
        }
    }
    return(
        <div className={style} data-testid={`textbox-${style}`}>.
            <SelectDropDown style={style}/>
            <textarea 
                placeholder={options[style]}
                onChange={({target}) => handleChange(target.value)}
                disabled={!enabled}
                />
        </div>
    );
};
    
export default TextBox;