$(document).ready(function(){

      let cityName = 'Oakland';
      const apiKey = 'be2f09ec98c4e0bb359ff520b85ba9bb';
      const weatherFive = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
      const weatherCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

      $.ajax({
            url: weatherCurrent,
            method: 'GET',
      }).then(function(cat) {
            // name, humidity, temp,
            console.log(cat);
             // city name
            // console.log(name);
            // console.log(city);
             const $cityName = $('<h4>').text();
             // city date
            const $cityDate = $('<p>').text();
             // weather icons
            const $weatherIcons = $('<p>').text();
             // temp
            const $temp = $('<p>').text();
             // humidity
            const $humidity = $('<p>').text();
             // wind speed
            const $windSpeed = $('<p>').text();
             // Uv index
            const $uvIndex = $('<p>').text();
             // favorite, moderate, severe
            let $weatherDiv = $('<div>');
            $('#weatherNow').append($weatherDiv)

      });

      $.ajax({
            url: weatherFive,
            method: 'GET',
      }).then(function({}) {
           

            // Future weather conditions date, weather icon, temp, humidity
            function fiveDays() {
                  const firstDay = $('<div>').append();
                  const seocndDay = $('<div>').append();
                  const thirdDay = $('<div>').append();
                  const fourthDay = $('<div>').append();
                  const fifthDay = $('<div>').append();
                  for (let i = 0; i < 5; i++) {
                  }
            }

            console.log({});
      });



      function cityWeather(response) {
      

      }

      $('.seach').on('click', )


});