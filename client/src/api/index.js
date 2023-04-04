import axios from 'axios';

const API = axios.create({  baseURL: 'http://localhost:3004/' });

const getLanguages = async () => {
  try {
    const response = await API.get('/');
    console.log(response)
    return response;
  } catch (error) {
    return error.reponse;
  }
};

const translate = async (body) => {
    // const {message, language} = req.body
  try {
    const response = await API.post('/translate', body);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

const detectLanguage = async (language) => {
  try {
    await API.post('/detect', language);
  } catch (error) {
    console.log(error.stack);
    return error.response;
  }
};

export { getLanguages, translate, detectLanguage };