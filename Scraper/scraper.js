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
        c('.fc-item__title',html).each(function(){
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

module.exports.earBiscuits = function scrape3(){ 
    const url = 'https://www.stitcher.com/show/ear-biscuits-with-rhett-and-link'
    
    axios(url)
        .then(response => {
            const html = response.data

            const c = cheerio.load(html)
            const episodes = []
            c('.v-window__container', html).each(function () {
                const overview = c(this).text();
                episodes.push({
                    overview
                });
            })
            console.log(episodes)
        
        }).catch(err => console.log(`Error: ${err}`))
}

module.exports.hotDog = function scrape4(){ 
    const url = 'https://podcasts.apple.com/gb/podcast/a-hot-dog-is-a-sandwich/id1500763931'
    
    axios(url)
        .then(response => {
            const html = response.data

            const c = cheerio.load(html)
            const episodes = []
            c('ol', html).each(function () {
               // const overview = c(this).text();
                const date = c(this).find('time').text();
                const title = c(this).find(".we-clamp we-clamp--visual").text();


                episodes.push({
                  //  overview,
                    title,
                    date
                });
            })
            console.log(episodes)
        
        }).catch(err => console.log(`Error: ${err}`))
}

module.exports.hotDog2 = function scrape5(){ 
    const url = 'https://www.rambleofficial.com/hotdog.html'
    
    axios(url)
        .then(response => {
            const html = response.data

            const c = cheerio.load(html)
            const episodes = []
            c('.playlist sc-jTzLTM itEsdV', html).each(function () {
                const overview = c(this).text();
                const date = c(this).find('.date-and-duration').text();
                const title = c(this).find('.title').text();

                episodes.push({
                    overview,
                    title,
                    date
                });
            })
            console.log(episodes)
        
        }).catch(err => console.log(`Error: ${err}`))
}