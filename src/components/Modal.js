import { useState } from 'react';
    
const Modal = () => {
    const [language, setLanguage] = useState('')
    return(
        <div className="option-list">
            <div className="search-bar">
                <input value={language} onChange={({target}) => setLanguage(target.value)}/>
                <div className="close-button" onClick={() => {}}></div>
            </div>
        </div>
    );
};
    
export default Modal;