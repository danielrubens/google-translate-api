import { useSelector, useDispatch } from 'react-redux';

const SelectDropDown = ({ style }) => {
    const dispatch = useDispatch()
    const language = useSelector(state => state.user[style])
    
    const handleDispatch = () => { dispatch({type: 'MODAL', payload: style}) }

    return(
        <div className="select-drop-down" data-testid="select-drop-down" onClick={handleDispatch}>
            <input value={language} onChange={() => {}}data-testid={`input-drop-down-${style}`}/>
            <div className="down-arrow">
                <svg focusable="false" xmlns="http://www.wr.org/2000/svg" viewBox="0 0 24 25">
                    <path d="M7 10l5 5 5-5z" data-testid="svg-drop-down"></path>
                </svg>
            </div>
        </div>
    );
};
    
export default SelectDropDown;