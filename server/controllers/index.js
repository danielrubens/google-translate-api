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

module.exports = {detect, translate}