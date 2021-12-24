const daysOfWeekMap = {
    0: 'SUN', 
    1: 'MON', 
    2: 'TUES', 
    3: 'WED', 
    4: 'THUR', 
    5: 'FRI', 
    6: 'SAT'
}

const iconNameToSizeMap = {
    cloudy: { width: 264, height: 166},
    sunny: { width: 208, height: 213},
    stormy: { width: 246, height: 187},
    snowy: { width: 230, height: 196},
    'partly-cloudy': {width: 230, height:209},
    rainy: { width: 160, height: 222},
}
document.body.style.zoom = "68%"

let response = [{
    "lat":35.8726,
    "lon":14.5154,
    "timezone":"Europe/Malta",
    "timezone_offset":3600,
    "daily":[
       {
          "dt":1640343600,
          "sunrise":1640326187,
          "sunset":1640361189,
          "moonrise":1640378880,
          "moonset":1640339760,
          "moon_phase":0.66,
          "temp":{
             "day":287.41,
             "min":286.31,
             "max":287.85,
             "night":287.85,
             "eve":286.31,
             "morn":286.85
          },
          "feels_like":{
             "day":286.61,
             "night":287.31,
             "eve":285.98,
             "morn":286.08
          },
          "pressure":1023,
          "humidity":66,
          "dew_point":281.45,
          "wind_speed":4.69,
          "wind_deg":201,
          "wind_gust":5.69,
          "weather":[
             {
                "id":800,
                "main":"Clear",
                "description":"clear sky",
                "icon":"01d"
             }
          ],
          "clouds":0,
          "pop":0,
          "uvi":2.51
       },
       {
          "dt":1640430000,
          "sunrise":1640412611,
          "sunset":1640447623,
          "moonrise":1640468940,
          "moonset":1640427900,
          "moon_phase":0.7,
          "temp":{
             "day":289.99,
             "min":287.98,
             "max":290.03,
             "night":289.69,
             "eve":289.56,
             "morn":288.8
          },
          "feels_like":{
             "day":289.74,
             "night":289.41,
             "eve":289.29,
             "morn":288.56
          },
          "pressure":1018,
          "humidity":77,
          "dew_point":286.23,
          "wind_speed":7.88,
          "wind_deg":193,
          "wind_gust":11.09,
          "weather":[
             {
                "id":804,
                "main":"Clouds",
                "description":"overcast clouds",
                "icon":"04d"
             }
          ],
          "clouds":100,
          "pop":0.04,
          "uvi":2.08
       },
       {
          "dt":1640516400,
          "sunrise":1640499033,
          "sunset":1640534059,
          "moonrise":1640559120,
          "moonset":1640515980,
          "moon_phase":0.73,
          "temp":{
             "day":290.45,
             "min":289.27,
             "max":290.45,
             "night":289.52,
             "eve":289.43,
             "morn":289.78
          },
          "feels_like":{
             "day":290.04,
             "night":289.22,
             "eve":289.15,
             "morn":289.51
          },
          "pressure":1015,
          "humidity":69,
          "dew_point":284.89,
          "wind_speed":7.59,
          "wind_deg":202,
          "wind_gust":11.83,
          "weather":[
             {
                "id":802,
                "main":"Clouds",
                "description":"scattered clouds",
                "icon":"03d"
             }
          ],
          "clouds":30,
          "pop":0,
          "uvi":2.14
       },
       {
          "dt":1640602800,
          "sunrise":1640585453,
          "sunset":1640620496,
          "moonrise":0,
          "moonset":1640604000,
          "moon_phase":0.75,
          "temp":{
             "day":290.31,
             "min":289.03,
             "max":290.31,
             "night":289.03,
             "eve":289.04,
             "morn":289.93
          },
          "feels_like":{
             "day":289.96,
             "night":288.68,
             "eve":288.72,
             "morn":289.52
          },
          "pressure":1014,
          "humidity":72,
          "dew_point":285.36,
          "wind_speed":6.13,
          "wind_deg":215,
          "wind_gust":9.47,
          "weather":[
             {
                "id":803,
                "main":"Clouds",
                "description":"broken clouds",
                "icon":"04d"
             }
          ],
          "clouds":65,
          "pop":0,
          "uvi":2.46
       },
       {
          "dt":1640689200,
          "sunrise":1640671872,
          "sunset":1640706934,
          "moonrise":1640649420,
          "moonset":1640692140,
          "moon_phase":0.8,
          "temp":{
             "day":289.67,
             "min":289.11,
             "max":290.13,
             "night":289.28,
             "eve":289.43,
             "morn":289.47
          },
          "feels_like":{
             "day":289.44,
             "night":289.09,
             "eve":289.2,
             "morn":289.22
          },
          "pressure":1011,
          "humidity":79,
          "dew_point":286.25,
          "wind_speed":11.23,
          "wind_deg":289,
          "wind_gust":16.03,
          "weather":[
             {
                "id":500,
                "main":"Rain",
                "description":"light rain",
                "icon":"10d"
             }
          ],
          "clouds":25,
          "pop":0.39,
          "rain":0.68,
          "uvi":2.3
       },
       {
          "dt":1640775600,
          "sunrise":1640758289,
          "sunset":1640793374,
          "moonrise":1640739840,
          "moonset":1640780400,
          "moon_phase":0.83,
          "temp":{
             "day":288.78,
             "min":288.31,
             "max":288.84,
             "night":288.31,
             "eve":288.4,
             "morn":288.41
          },
          "feels_like":{
             "day":288.41,
             "night":287.89,
             "eve":287.99,
             "morn":288.26
          },
          "pressure":1011,
          "humidity":77,
          "dew_point":285,
          "wind_speed":11.8,
          "wind_deg":292,
          "wind_gust":15.26,
          "weather":[
             {
                "id":500,
                "main":"Rain",
                "description":"light rain",
                "icon":"10d"
             }
          ],
          "clouds":20,
          "pop":0.82,
          "rain":2.59,
          "uvi":3
       },
       {
          "dt":1640862000,
          "sunrise":1640844704,
          "sunset":1640879816,
          "moonrise":1640830500,
          "moonset":1640868960,
          "moon_phase":0.87,
          "temp":{
             "day":288.2,
             "min":287.54,
             "max":288.2,
             "night":287.54,
             "eve":287.79,
             "morn":287.69
          },
          "feels_like":{
             "day":287.67,
             "night":286.81,
             "eve":287.22,
             "morn":287.18
          },
          "pressure":1021,
          "humidity":73,
          "dew_point":283.66,
          "wind_speed":4.68,
          "wind_deg":31,
          "wind_gust":5.86,
          "weather":[
             {
                "id":800,
                "main":"Clear",
                "description":"clear sky",
                "icon":"01d"
             }
          ],
          "clouds":4,
          "pop":0.13,
          "uvi":3
       },
       {
          "dt":1640948400,
          "sunrise":1640931117,
          "sunset":1640966259,
          "moonrise":1640921400,
          "moonset":1640957940,
          "moon_phase":0.91,
          "temp":{
             "day":288.46,
             "min":287.17,
             "max":288.46,
             "night":288.22,
             "eve":288.07,
             "morn":287.17
          },
          "feels_like":{
             "day":287.9,
             "night":287.61,
             "eve":287.55,
             "morn":286.66
          },
          "pressure":1026,
          "humidity":71,
          "dew_point":283.38,
          "wind_speed":4.89,
          "wind_deg":298,
          "wind_gust":5.85,
          "weather":[
             {
                "id":800,
                "main":"Clear",
                "description":"clear sky",
                "icon":"01d"
             }
          ],
          "clouds":9,
          "pop":0,
          "uvi":3
       }
    ]
 }]
console.log(response[0])
console.log("Location: "+ response[0].timezone)// split by / to take second value only
let day = 0 
let date = console.log("Date: "+ response[0].daily[day].dt) //convert from epochs
let icon = console.log("Icon Code: "+ response[0].daily[day].weather[0].icon)
let description = console.log("Description: " + response[0].daily[day].weather[0].main)
let temperature = console.log("Temperature: "+ response[0].daily[day].temp.max) // 1 dp
let feelsLike = console.log("Feels Like: "+ response[0].daily[day].feels_like.day) // need to add a place for  feels like and also set to 1dp
let min = console.log("Minimum Temp: "+ response[0].daily[day].temp.min) // 1 dp
let pop = console.log("Humidity: "+ response[0].daily[day].pop)

