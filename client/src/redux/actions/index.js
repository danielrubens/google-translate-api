export const LANGUAGE = 'LANGUAGE';
export const MODAL = 'MODAL';
export const CHANGE = 'CHANGE';

export const languageAction = (payload) => ({
    type: LANGUAGE,
    payload
})

export const modalAction = (payload) => ({
    type: MODAL,
    payload
})

export const changeLanguage = (payload) => ({
    type: CHANGE,
    payload
})