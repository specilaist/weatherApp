$(document).ready(function(){

      // let cityName = $('#search').text("");
      const $inputName = $('#search').text("");
      let cities = []


      const apiKey = 'be2f09ec98c4e0bb359ff520b85ba9bb';
     

      function searchWeather (cityName) {
            let weatherFive = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
            let weatherCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
      

      $.ajax({
            url: weatherCurrent,
            method: 'GET',
      }).then(function({name, main, wind, weather}) {
            // name, main.humidity, main.temp, wind.speed, weather[0].main,
            console.log(main.humidity);
            console.log(main.temp);
            console.log(name);
            console.log(wind.speed);
            console.log(weather[0].main);
            function createPage () {
                  console.log(name);
                  const $cityName = $('<h4>').text(name);
                  console.log(($cityName).text());
                  // city date
                  const $cityDate = $('<p>').text(moment().format("dddd MMMM Do YYYY, h:mm:ss a"));
                  // console.log($cityDate.text())
                  // weather icons
                 const $weatherIcons = $('<p>').text(`The sky is ${weather[0].main}`);
                  // console.log($weatherIcons);
                  // temp
                  let kelvins = main.temp
                  let converttemp = ((kelvins - 273.15) * 1.80 + 32).toFixed(2);
                  let temp = `Temp = ${converttemp}`;
                  const $temp = $('<p>').text(temp);
                  // console.log($temp)
                  //  // humidity
                  
                  let humidity = `Humidity = ${main.humidity}`;
                  const $humidity = $('<p>').text(humidity);
                  // console.log($humidity)
                   // wind speed
                  let windSpeed = `Wind Speed = ${wind.speed}`;
                  const $windSpeed = $('<p>').text(windSpeed);
                  // console.log($windSpeed)
                  //  // Uv index
                  // const $uvIndex = $('<p>').text();
                  // console.log($uvIndex);
                  // // favorite, moderate, severe
            
                  let $weatherDiv = $('<div>');
                  $weatherDiv.append($cityName, $cityDate, $temp, $windSpeed, $humidity, $weatherIcons);
                  $('#weatherNow').empty();
                  $('#weatherNow').append($weatherDiv);
            }
            createPage();
      });

      $.ajax({
            url: weatherFive,
            method: 'GET',
      }).then(function(fiveDays) {
            console.log(fiveDays);
            console.log(fiveDays.list.length);
            console.log(fiveDays.list);
            let forecastArr = fiveDays.list;
            console.log(forecastArr[0].dt_txt);
            for (let i = 0; i < forecastArr.length; i=i+8) {
                  let weatherlist = forecastArr[i];
                  const $date = $('<p>').text(weatherlist.dt_txt);
                  const $otherWeather = $('<p>').text(weatherlist.weather[0].description);
                  const $otherTemp = $('<p>').text(weatherlist.main.temp);
                  const $otherHumidity = $('<p>').text(weatherlist.main.humidity);

                  const $forecasts = $('<div>').addClass('col-sm-2 forecasts');
                  $forecasts.append($date, $otherWeather, $otherTemp, $otherHumidity);
                  $('#weatherFive').append($forecasts);
                  // function fiveDays() {
                  // }
            }

      });

      }

      $.each(cities, function(index,value){
            const weatherBtn = $('<button>');
            weatherBtn.addClass('weather-button', 'weather', 'weather-button-color');
            weatherBtn.attr('data-weather', value);
            weatherBtn.text(value);
            $('#searched').append(weatherBtn);
          })

      $("#searchButton").on('click', function(event) {
            event.preventDefault();
            console.log(this)
            $('#weatherFive').empty();
            let cityName = $("#search").val();
            console.log(cityName);
            searchWeather(cityName);
            const newWeather = $('<button>');
            newWeather.addClass('weather-button', 'weather', 'weather-button-color');
            newWeather.text(cityName);
            $('#searched').append(newWeather);
            console.log(newWeather);
            // let $newSearch = $('<button>').attr({'class':'searched bg-info border', 'id':searchItem});
            // $('#searched').append($newSearch);
            // cities.push(); 
            // localStorage.setItem("history", JSON.stringify(newWeather));

            // console.log(storage);
            // storage.push(cities);
            // console.log(cities)
            // createPage();
            // fiveDays();
      });

      $("#clearButton").on('click', function(event) {
            event.preventDefault();
            console.log(this);
            $('#searched').empty();
      });

      $('.weather-button').on('click', function(event) {
            event.preventDefault();
            // console.log(this);
            let buttonName = $('.weather-button').text();
            console.log(buttonName);
            searchWeather(buttonName);
      })

      // $(document).on('click', '', function() {
      //       const fridgeMagnet = $('<div>');
      //       fridgeMagnet.addClass('letter', 'fridge-color');
      //       fridgeMagnet.text($(this).attr('data-letter'));
      //       $('#display').append(fridgeMagnet);


});