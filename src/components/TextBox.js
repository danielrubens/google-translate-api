const TextBox = ({style}) => {
    const options = {input: 'Enter Text', output: 'Translation'}
    return(
        <div>
            <textarea placeholder={options[style]} />
        </div>
    );
};
    
export default TextBox;