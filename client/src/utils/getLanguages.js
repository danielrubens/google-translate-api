const getLanguages = async () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9f8dc9bd0cmshd7a8d3b1e5d4bd6p1bef81jsnf5ddcaa720dc',
            'X-RapidAPI-Host': 'google-translator9.p.rapidapi.com'
        }
    };
    try{
        const response =  await fetch('https://google-translator9.p.rapidapi.com/v2/languages', options)
        const json = await response.json()
        return json.data.languages
    }
    catch(error){
        return {error}
    }
}

export default getLanguages