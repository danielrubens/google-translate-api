import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import getLanguages from '../utils/getLanguages';


const Modal = () => {
    const [language, setLanguage] = useState('')
    const [languages, setLanguages] = useState([])
    const dispatch = useDispatch()
    const handleDispatch = () => { dispatch({type: 'MODAL', payload: null}) }

    const getLanguages = async () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '9f8dc9bd0cmshd7a8d3b1e5d4bd6p1bef81jsnf5ddcaa720dc',
                'X-RapidAPI-Host': 'google-translator9.p.rapidapi.com'
            }
        };
        try{
            const response =  await fetch('https://google-translator9.p.rapidapi.com/v2/languages', options)
            const json = await response.json()
            return json.data.languages
        }
        catch(error){
            return {error}
        }
    }

    // const changeLanguage = async() =>{
    //     const response = await getLanguages()
    //     setLanguages(response)
    // }

    useEffect(() => {getLanguages().then((response) => setLanguages(response))}, [])
    console.log(languages)

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
                {/* <ul>{languages?.map((i) => (<p>{i}</p>))}</ul> */}
                {/* {languages.length > 0 && languages.map((i) => (<p>{i}</p>))} */}
            </div>
        </div>
    );
};
    
export default Modal;