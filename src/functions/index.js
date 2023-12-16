const axios = require("axios");

const getTodaysArticlesUrls = async () => {
    const urls = [];

    const techcrunchHomeWebPage = await axios.get('https://medium.com/');

    return techcrunchHomeWebPage.data;
}




module.exports.getTodaysArticlesUrls = getTodaysArticlesUrls;
