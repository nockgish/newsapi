const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('ecba291e2bf642f7898dd5cff6bc5310');

// async function getNews() {
//   const response = await newsapi.v2.everything({
//     q: 'ethereum AND solana',
//     from: '2025-07-31',
//     to: '2025-07-31',
//     language: 'en',
//     sortBy: 'publishedAt',
//   });
//   return response;
// }

let date = new Date();
// console.log(date);
date.setDate(date.getDate() - 1);
yesterday = date.toDateString();
console.log(yesterday);

let today = new Date();
console.log(today);

function getNews() {
  return newsapi.v2.everything({
    q: 'ethereum AND solana',
    from: '2025-08-16',
    to: '2025-08-17',
    // from: yesterday,
    // to: today,
    language: 'en',
    sortBy: 'publishedAt',
  }).then(response => {
    console.log(response);
    let articles = response.articles;
    let articleHTML = "";
    for (let art = 0; art < articles.length; art++ ) {
        let tempArticle = articles[art];
        articleHTML += `
        <div class="each-article">
        <p class="titles"><a href="${tempArticle.url}">${tempArticle.title}</a></p>
        </div>
        `
    }
    
    // console.log(response.articles[0].description + " AND THEN " + response.articles[1].description);
    // return response;
    // console.log(articleHTML);
    // return articleHTML;
    console.log(articles);
    return response;
  });
}

module.exports = getNews;