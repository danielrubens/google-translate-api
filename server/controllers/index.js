const service = require('../services')


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


module.exports = {translate, getLanguages}