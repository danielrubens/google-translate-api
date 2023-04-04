const service = require('../services')

const detect = async(req, res) => {
    const language = await service.detectLanguage(req.body.message)
    return res.status(200).json(language)
}

const translate = async(req, res) => {
    const {message, language} = req.body
    const translation = await service.translateText(message, language)
    return res.status(200).json(translation)
}

const getLanguages = async(req, res) => {
    const languages = await service.supportedLanguages()
    const notEmpty = languages.filter((i) => i.language !== '').sort((a, b) => a.language.localeCompare(b.language))
    return res.status(200).json(notEmpty)
}

const test = async(req, res) => {
    // const message = await service.translateText('Hoje é segunda-feira', 'en')
    const message = await service.detectLanguage('Hoje é segunda-feira')
    return res.status(200).json(message)
}

module.exports = {detect, translate, test, getLanguages}