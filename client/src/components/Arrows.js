import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Arrows = () => {
    const [input, setInput] = useState('Portuguese');
    const [output, setOutput] = useState('English');
    
    const dispatch = useDispatch()
    const handleClick = () => {
      setInput(output);
      setOutput(input);
      dispatch({type: 'LANGUAGE', payload: {input, output}})
    };

    return(
        <div className="arrow-container"  onClick={handleClick} data-testid="arrow-container">
            <svg
                data-testid="arrows"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
            <path 
            data-testid="arrows-path"
            d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"
            ></path>
            </svg>
        </div>
    );
};
    
export default Arrows;