const express = require('express');
const axios = require('axios') 
const cheerio = require('cheerio'); 


const app = express();

module.exports.theGuardian = function scrape1(){ 
const url = 'https://www.theguardian.com/uk'

axios(url)
    .then(response => {
        const html = response.data
        const c = cheerio.load(html)
        const articles = []
        c('.fc-item__title',html).each(function()  {
            const title = c(this).text()
            const link = c(this).find('a').attr('href')
            articles.push({
                title,
                link
            });
        })
        console.log(articles)
    
    }).catch(err => console.log(err))

}

module.exports.cb = function scrape2(){
const url = 'https://cb.com/'

    axios(url)
        .then(response => {
            const html = response.data
            const c = cheerio.load(html)
            const articles = []
            c('.room_list_room',html).each(function()  {
                const age = c(this).find('.age').text()
                const username = c(this).find('a').attr('data-room')
                const location = c(this).find('.location').text()
                const cams = c(this).find('.cams').text()
                articles.push({
                    username,
                    age,
                    location,
                    cams
            })
    })
            console.log(articles)
        
        }).catch(err => console.log(err))
    
    }
