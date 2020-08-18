$(document).ready(function(){

      // let cityName = $('#search').text("");
      const $inputName = $('#search').text("");
      let cityName = 'Oakland';
      let cities = []

      const apiKey = 'be2f09ec98c4e0bb359ff520b85ba9bb';
      const weatherFive = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
      const weatherCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;



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
                  console.log($cityDate.text())
                  // weather icons
                 const $weatherIcons = $('<p>').text(`The sky is ${weather[0].main}`);
                  console.log($weatherIcons);
                  // temp
                  let kelvins = main.temp
                  let converttemp = ((kelvins - 273.15) * 1.80 + 32).toFixed(2);
                  let temp = `Temp = ${converttemp}`;
                  const $temp = $('<p>').text(temp);
                  console.log($temp)
                  //  // humidity
                  
                  let humidity = `Humidity = ${main.humidity}`;
                  const $humidity = $('<p>').text(humidity);
                  console.log($humidity)
                   // wind speed
                  let windSpeed = `Wind Speed = ${wind.speed}`;
                  const $windSpeed = $('<p>').text(windSpeed);
                  console.log($windSpeed)
                  //  // Uv index
                  // const $uvIndex = $('<p>').text();
                  // console.log($uvIndex);
                  // // favorite, moderate, severe
            
                  let $weatherDiv = $('<div>');
                  $weatherDiv.append($cityName, $cityDate, $temp, $windSpeed, $humidity, $weatherIcons);
                  $('#weatherNow').append($weatherDiv);
            }

            function addButton () {

            }

            createPage();
       

      });

     


      $.ajax({
            url: weatherFive,
            method: 'GET',
      }).then(function({list}) {
            console.log(list[0]);
            let weatherlist = list[0]
           
            // 
            // Future weather conditions date, weather icon, temp, humidity
            function fiveDays() {
                  const firstDay = $('<div>').append();
                  const seocndDay = $('<div>').append();
                  const thirdDay = $('<div>').append();
                  const fourthDay = $('<div>').append();
                  const fifthDay = $('<div>').append();
                  for (let i = 0; i < 5; i+8) {
                        const $date = $('<div>').text();
                        const $otherWeather = $('<div>').text();
                        const $otherTemp = $('<div>').text();
                        const $otherHumidity = $('<div>').text();

                        


                  }
            }
      });
      
      // city name
      
      function cityButtons(response) {
            const $cityButtons = $('<div>').addClass('border bg-light');
            $cityButtons.text()

      
      }

      function renderButtons() {

            // Deletes the movies prior to adding new movies
            // (this is necessary otherwise you will have repeat buttons)
            $("#searched").empty();
            // Loops through the array of movies
            for (var i = 0; i < cities.length; i++) {
    
              // Then dynamicaly generates buttons for each movie in the array
              // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
              var a = $("<button>");
              // Adds a class of movie to our button
              a.addClass("");
              // Added a data-attribute
              a.attr("data-name", cities[i]);
              // Provided the initial button text
              a.text(cities[i]);
              // Added the button to the buttons-view div
              $("#searched").append(a);
            }
      }

      $(document).on('click', '#seachButton', function(e) {
            e.preventDefault();
            let searchItem = $('#search').text();
            console.log(searchItem)
            let $newSearch = $('<button>').attr({'class':'searched bg-info border', 'id':searchItem});
            $('.searchField').append($newSearch);
            return;
            fiveDays()
      });


});