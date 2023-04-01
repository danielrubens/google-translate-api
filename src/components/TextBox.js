const TextBox = ({style}) => {
    const options = {input: 'Enter Text', output: 'Translation'}
    return(
        <div>
            <textarea 
                placeholder={options[style]}
                disabled={options[style] === 'Translation'}
                />
            
        </div>
    );
};
    
export default TextBox;