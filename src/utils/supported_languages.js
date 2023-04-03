const {TranslationServiceClient} = require('@google-cloud/translate').v3beta1;
require('dotenv').config();

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS)

const listSupportedLanguages = async() => {
    const client = new TranslationServiceClient();
    const parent = `projects/${CREDENTIALS.project_id}/locations/global`
    const [response] = await client.getSupportedLanguages({ parent });
    const languages = response.languages.map(({languageCode})=> ({ code: languageCode}))
    return languages;
  }
  
listSupportedLanguages().then((data) => console.log(data))