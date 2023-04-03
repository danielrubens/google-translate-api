const {TranslationServiceClient} = require('@google-cloud/translate').v3beta1;
// const {TranslationServiceClient}  = require('@google-cloud/translate')
require('dotenv').config();

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS)

async function listSupportedLanguages() {
    const client = new TranslationServiceClient();
  
    const [response] = await client.getSupportedLanguages({
        parent: `projects/${CREDENTIALS.project_id}/locations/global`

    });
  
    const languages = response.languages.map(language => {
      return {
        code: language.languageCode,
        name: language.displayName,
      };
    });
  
    console.log(languages);
  }
  
  listSupportedLanguages();