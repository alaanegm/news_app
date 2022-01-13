
const request = require("request")
const urlnews = 'https://newsapi.org/v2/everything?q=tesla&from=2021-12-13&sortBy=publishedAt&apiKey=65d60ca3f77a4911898606d470b0dd80'
const funNews = (callback) => {
       request({ url: urlnews, json: true }, (error, response) => {
              if (error) {
                     callback('Unable to connect to location service', undefined)
              }
              else if (response.body.message) {
                     callback(response.body.message, undefined)
                     console.log("erro")
              }
              else {
                     const arr = response.body.articles
                     callback(undefined, arr)

                     //console.log(response.body.articles[0].description)
                     // console.log(response.body.articles[0].urlToImage)

              }

       })
}
module.exports = funNews