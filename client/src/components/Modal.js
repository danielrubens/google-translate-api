import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLanguages } from '../api';

const Modal = () => {
    const user = useSelector(state => state.user)
    const modal = useSelector(state => state.user.modal)

    const [language, setLanguage] = useState(user[modal])
    const [languages, setLanguages] = useState([])
    const dispatch = useDispatch()
    // const searched = useSelector(state => state.user.search)

    const handleDispatch = () => { dispatch({type: 'MODAL', payload: null}) }

    useEffect(() => {getLanguages().then((response) => setLanguages(response.data))}, [])

    const handleClick = (target) => {
        const { code } = languages.find((i) => i.language === target.innerText)
        dispatch({type: 'CODE', payload: code})
        dispatch({type: 'CHANGE', payload: {modal, value: target.innerText}})
        handleDispatch()
    }

    return(
        <div className="option-list">
            <div className="search-bar">
                <input value={language} onChange={({target}) => setLanguage(target.value)}/>
                <div className="close-button" data-testid="close-button" onClick={handleDispatch}>
                    <svg focusable="false"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24"   
                    >
                         <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                    </svg>
                </div>
            </div>
            <div className="options-container">
                <ul>
                    {languages.length > 0 && languages.map((i, index) => (
                    <div key={`list-${index}`} className="list-item">
                        <div key={`icon-${index}`} className="icon">
                            {language === i.language ? '✓' : ''}
                        </div>
                        <li
                            key={index}
                            onClick={({target}) => handleClick(target)}
                        >
                         {i.language}
                        </li>
                    </div>
                    ))}

                </ul>
            </div>
        </div>
    );
};
    
export default Modal;