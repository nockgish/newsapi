const express = require('express');
const getNews = require('./getnews.js');
const app = express();
const PORT = 3000;

// Serve CSS and other static files from the public folder
app.use(express.static('public'));

app.get('/', async (req, res) => {
  try {
    const news = await getNews();
    let articleHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>News</title>
        <link rel="stylesheet" type="text/css" href="/styles.css">
      </head>
      <body>
        <h1>Crypto Articles</h1>
    `;

    for (let art of news.articles) {
      articleHTML += `
      
        <div class="each-article">
         <div class="each-img">
            <img src="${art.urlToImage}" alt="no image" />
        </div>
        <div class="each-meta">
          <p class="titles"><a href="${art.url}" target="_blank">${art.title}</a></p>
          <p class="sources"><span>FROM</span>${art.source.name || "Unknown" }</p>
          <p class="authors">by ${art.author || "Unknown"}</p>
          <p class="pub">${art.publishedAt}</p>
          <p class="desc">${art.description}</p>
        </div>
       
        </div>
      `;
    }

    articleHTML += `
      </body>
      </html>
    `;

    res.send(articleHTML);

  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching news");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});