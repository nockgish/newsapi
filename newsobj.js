const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('ecba291e2bf642f7898dd5cff6bc5310');

// To query /v2/everything
// You must include at least one q, source, or domain
let newsobj = newsapi.v2.everything({
  q: 'ethereum AND solana',
//   sources: 'forbes',
  //domains: 'bbc.co.uk, techcrunch.com',
  from: '2025-07-31',
  to: '2025-07-31',
  language: 'en',
  sortBy: 'publishedAt',
//   page: 2
}).then(response => {
  console.log(response.articles[0].description);
//  console.log(jsond);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});

// console.log( `heres your:` + newsobj);

module.exports = newsobj;