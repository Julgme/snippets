const daysOfWeekMap = {
   0: 'SUN',
   1: 'MON',
   2: 'TUES',
   3: 'WED',
   4: 'THUR',
   5: 'FRI',
   6: 'SAT'
}

const weatherState = {
   2: 'stormy',
   8: 'cloudy',
   800: 'sunny',
   6: 'snowy',
   3: 'partly-cloudy',
   5: 'rainy'
}

const iconNameToSizeMap = {
   'cloudy': { width: 264, height: 166 },
   'sunny': { width: 208, height: 213 },
   'stormy': { width: 246, height: 187 },
   'snowy': { width: 230, height: 196 },
   'partly-cloudy': { width: 230, height: 209 },
   'rainy': { width: 160, height: 222 },
}
document.body.style.zoom = "68%"

let response 
response = [
   { "lat": 35.8726, "lon": 14.5154, "timezone": "Europe/Malta", "timezone_offset": 3600, "daily": [{ "dt": 1640430000, "sunrise": 1640412611, "sunset": 1640447623, "moonrise": 1640468940, "moonset": 1640427900, "moon_phase": 0.7, "temp": { "day": 16.86, "min": 15.02, "max": 16.93, "night": 16.48, "eve": 16.41, "morn": 15.53 }, "feels_like": { "day": 16.59, "night": 16.19, "eve": 16.12, "morn": 15.2 }, "pressure": 1018, "humidity": 76, "dew_point": 12.74, "wind_speed": 8, "wind_deg": 198, "wind_gust": 10.65, "weather": [{ "id": 800, "main": "Clouds", "description": "overcast clouds", "icon": "04d" }], "clouds": 95, "pop": 0, "uvi": 1.93 }, { "dt": 1640516400, "sunrise": 1640499033, "sunset": 1640534059, "moonrise": 1640559120, "moonset": 1640515980, "moon_phase": 0.73, "temp": { "day": 17.37, "min": 16.31, "max": 17.37, "night": 16.47, "eve": 16.34, "morn": 16.67 }, "feels_like": { "day": 16.96, "night": 16.18, "eve": 16.07, "morn": 16.4 }, "pressure": 1015, "humidity": 69, "dew_point": 11.73, "wind_speed": 7.28, "wind_deg": 205, "wind_gust": 11.25, "weather": [{ "id": 602, "main": "Clouds", "description": "scattered clouds", "icon": "03d" }], "clouds": 45, "pop": 0, "uvi": 1.98 }, { "dt": 1640602800, "sunrise": 1640585453, "sunset": 1640620496, "moonrise": 0, "moonset": 1640604000, "moon_phase": 0.75, "temp": { "day": 16.39, "min": 15.45, "max": 16.8, "night": 15.7, "eve": 15.51, "morn": 16.71 }, "feels_like": { "day": 16.04, "night": 15.41, "eve": 15.26, "morn": 16.37 }, "pressure": 1014, "humidity": 75, "dew_point": 12.16, "wind_speed": 6.9, "wind_deg": 275, "wind_gust": 9.74, "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d" }], "clouds": 83, "pop": 0.06, "uvi": 2.53 }, { "dt": 1640689200, "sunrise": 1640671872, "sunset": 1640706934, "moonrise": 1640649420, "moonset": 1640692140, "moon_phase": 0.8, "temp": { "day": 16.39, "min": 15.72, "max": 16.71, "night": 15.72, "eve": 16, "morn": 16.25 }, "feels_like": { "day": 16.17, "night": 15.57, "eve": 15.77, "morn": 16.05 }, "pressure": 1011, "humidity": 80, "dew_point": 13.18, "wind_speed": 11.3, "wind_deg": 279, "wind_gust": 14.4, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "clouds": 18, "pop": 0.41, "rain": 1.54, "uvi": 2.24 }, { "dt": 1640775600, "sunrise": 1640758289, "sunset": 1640793374, "moonrise": 1640739840, "moonset": 1640780400, "moon_phase": 0.83, "temp": { "day": 15.3, "min": 15.01, "max": 15.63, "night": 15.16, "eve": 15.01, "morn": 15.58 }, "feels_like": { "day": 14.87, "night": 14.74, "eve": 14.6, "morn": 15.36 }, "pressure": 1008, "humidity": 76, "dew_point": 11.36, "wind_speed": 12.11, "wind_deg": 286, "wind_gust": 15.08, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "clouds": 34, "pop": 0.98, "rain": 6.57, "uvi": 2.2 }, { "dt": 1640862000, "sunrise": 1640844704, "sunset": 1640879816, "moonrise": 1640830500, "moonset": 1640868960, "moon_phase": 0.87, "temp": { "day": 15.06, "min": 14.5, "max": 15.06, "night": 14.62, "eve": 14.58, "morn": 14.5 }, "feels_like": { "day": 14.48, "night": 14.1, "eve": 14, "morn": 13.99 }, "pressure": 1019, "humidity": 71, "dew_point": 10.03, "wind_speed": 12.49, "wind_deg": 47, "wind_gust": 14.73, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "clouds": 9, "pop": 0.76, "rain": 1.94, "uvi": 3 }, { "dt": 1640948400, "sunrise": 1640931117, "sunset": 1640966259, "moonrise": 1640921400, "moonset": 1640957940, "moon_phase": 0.91, "temp": { "day": 14.97, "min": 14.6, "max": 15.18, "night": 14.76, "eve": 14.86, "morn": 14.7 }, "feels_like": { "day": 14.59, "night": 14.38, "eve": 14.41, "morn": 14.26 }, "pressure": 1024, "humidity": 79, "dew_point": 11.66, "wind_speed": 12.54, "wind_deg": 47, "wind_gust": 13.82, "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d" }], "clouds": 73, "pop": 0, "uvi": 3 }, { "dt": 1641034800, "sunrise": 1641017528, "sunset": 1641052703, "moonrise": 1641012360, "moonset": 1641047520, "moon_phase": 0.95, "temp": { "day": 15.14, "min": 14.73, "max": 15.14, "night": 15.04, "eve": 14.92, "morn": 14.93 }, "feels_like": { "day": 14.75, "night": 14.58, "eve": 14.56, "morn": 14.46 }, "pressure": 1026, "humidity": 78, "dew_point": 11.47, "wind_speed": 9.13, "wind_deg": 57, "wind_gust": 9.99, "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d" }], "clouds": 53, "pop": 0.02, "uvi": 3 }] }
]

let day
for (day = 0; day < 7; day++) {
   //location
   let location = response[0].timezone.split("/").pop()
   document.title = `${location} Weather Forecast`
   //date
   let date = new Date(response[0].daily[day].dt * 1000).getDate()
   document.querySelectorAll('.date')[day].innerText = date
   //day name
   let dateName = daysOfWeekMap[new Date(response[0].daily[day].dt * 1000).getDay()]
   document.querySelectorAll('.day-of-week')[day].innerText = dateName
   //temperature amount
   let temperature = response[0].daily[day].temp.max.toFixed(0)
   document.querySelectorAll('.temperature')[day].insertAdjacentText('afterbegin', temperature)
   //feels like
   let feelsLike = response[0].daily[day].feels_like.day.toFixed(1)
   document.querySelectorAll('.feelsLike')[day].innerText = `${feelsLike}°`
   //minimum temperature
   let min = response[0].daily[day].temp.min.toFixed(0)
   document.querySelectorAll('.low')[day].insertAdjacentText('beforeend', `${min}°`)
   //percentage of precipitation
   let pop = Math.round(response[0].daily[day].pop)
   document.querySelectorAll('.precipitation')[day].insertAdjacentText('beforeend', `${pop}%`)

   //weather Image
   let weatherId = response[0].daily[day].weather[0].id
   let weather
   if (weatherId == '800') {
      weather = weatherState[weatherId]
   }
   else {
      weather = weatherState[weatherId.toString().substring(0, 1)]
   }
   //set background and text colours
   document.querySelectorAll('.bar')[day].classList.add(weather)

   //set width and height
   document.querySelectorAll('.weather>svg')[day].width.baseVal.value = iconNameToSizeMap[weather].width
   document.querySelectorAll('.weather>svg')[day].height.baseVal.value = iconNameToSizeMap[weather].height
   document.querySelectorAll('.weather>svg')[day].viewBox.baseVal.width = iconNameToSizeMap[weather].width
   document.querySelectorAll('.weather>svg')[day].viewBox.baseVal.height = iconNameToSizeMap[weather].height
   document.querySelectorAll('.weather>svg>use')[day].href.baseVal = `#${weather}`
}
    document.querySelectorAll('#loading')[0].remove();