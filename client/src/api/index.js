import axios from 'axios';

const API = axios.create({  baseURL: 'http://localhost:3002/' });
const FAKE_API = axios.create({baseURL: 'https://fake-api-beta.vercel.app/data'})

const getLanguages = async () => {
  try {
    const response = await FAKE_API('/')
    return response;
  } catch (error) {
    return error.reponse;
  }
};

const translate = async (body) => {
    // const {message, language} = req.body
  setTimeout(() => {}, 1000)
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