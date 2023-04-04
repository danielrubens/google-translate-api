const {Translate} = require('@google-cloud/translate').v2;
const {TranslationServiceClient } = require('@google-cloud/translate');
const iso = require('iso-639-1');
const dotenv = require('dotenv')
dotenv.config()

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS)

const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

const detectLanguage = async (text) => {

    try {
        let response = await translate.detect(text);
        return response[0].language;
    } catch (error) {
        console.log(`Error at detectLanguage --> ${error}`);
        return 0;
    }
}


const translateText = async (text, targetLanguage) => {

    try {
        let [response] = await translate.translate(text, targetLanguage);
        return response;
    } catch (error) {
        console.log(`Error at translateText --> ${error}`);
        return 0;
    }
};


require('dotenv').config();
const supportedLanguages = async() => {
    const client = new TranslationServiceClient();
    const parent = `projects/${CREDENTIALS.project_id}/locations/global`
    const [response] = await client.getSupportedLanguages({ parent });
    const languages = response.languages.map(({languageCode})=> (
      { code: languageCode, language: iso.getName(languageCode)}))
    return languages;
  }


module.exports = {translateText, detectLanguage, supportedLanguages}

