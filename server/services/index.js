const {Translate} = require('@google-cloud/translate').v2;
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

// detectLanguage('Hoje é segunda-feira')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

const translateText = async (text, targetLanguage) => {

    try {
        let [response] = await translate.translate(text, targetLanguage);
        return response;
    } catch (error) {
        console.log(`Error at translateText --> ${error}`);
        return 0;
    }
};

// translateText('Hoje é segunda-feira', 'en')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

module.exports = {translateText, detectLanguage}

