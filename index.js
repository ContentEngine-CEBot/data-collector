const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const { getTodaysArticlesUrls } = require('./src/functions/index.js');

const app = express();

app.get('/api/articles', async (req, res) => {
    try {
        const res1 = await getTodaysArticlesUrls();

        res.send(res1);
    } catch (error) {
      console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));