import React from 'react';
import { useSelector } from 'react-redux';

const SelectDropDown = () => {
    const language = useSelector(state => state.user.input)
    return(
        <div className="select-drop-down" data-testid="select-drop-down">
            <input value={language}/>
            <div className="down-arrow">
                <svg focusable="false" xmlns="http://www.wr.org/2000/svg" viewBox="0 0 24 25">
                    <path d="M7 10l5 5 5-5z" data-testid="svg-drop-down"></path>
                </svg>
            </div>
        </div>
    );
};
    
export default SelectDropDown;