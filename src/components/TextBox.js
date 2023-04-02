const TextBox = ({style}) => {
    const options = {input: 'Enter Text', output: 'Translation'}
    const enabled = options[style] === 'Enter Text' 
    return(
        <div>
            <textarea 
                placeholder={options[style]}
                disabled={!enabled}
                />
        </div>
    );
};
    
export default TextBox;