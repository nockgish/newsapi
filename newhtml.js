// const inewsobj = require('./newsobj.js');
const getNews = require('./getnews.js');
const express = require('express');
  const app = express();
  const PORT = 3000;


const newsObject = (async () => {
  const news = await getNews();
  console.log(news.articles[2].title);
  //do something with forEach or some for loop
  // const newsArray = [news.articles[0].title, news.articles[1].title];

  let articles = news.articles;
    let articleHTML = "";
    for (let art = 0; art < articles.length; art++ ) {
        let tempArticle = articles[art];
        articleHTML += `
        <div class="each-article">
        <p class="titles"><a href="${tempArticle.url}">${tempArticle.title}</a></p>
        <p class="authors">by ${tempArticle.author}</p>
        <hr>
        </div>
        `
    }
  // return news.articles[2].title;
     return articleHTML;
    
})();

const usuable = newsObject.then((data) => {
   return data;
});

// let someHTML = `<h1>here be news</h1>`;
 //let articleHTMLs = usuable;


  app.get('/', async (req, res) => {
    const someHTML = await usuable;
    res.send(someHTML);
    // console.log(someHTML)
  })
  
  app.listen(PORT, () => {
    console.log(PORT);
  })

// console.log(`here it is` + getNews);


