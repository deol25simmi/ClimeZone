
      const apiKey = "cf593893321e5d210e896f9e2f8c60bf";
      const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
      const searchInput = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");
      const weather_icon = document.querySelector(".weather-image");
      async function checkWeather(city_name) {
        const response = await fetch(apiUrl + city_name + `&appid=${apiKey}`);
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =
          Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML =
          data.main.humidity + " %";
        document.querySelector(".windSpeed").innerHTML =
          data.wind.speed + " km/h";
          
          if (data.weather[0].main == "Clouds") {
            weather_icon.src = "images/cloudy.jpg";
          } 
          else if (data.weather[0].main == "Clear") {
            weather_icon.src = "images/sunny-removebg-preview.png";
          }
           else if (data.weather[0].main == "Rain") {
            weather_icon.src = "images/rainy.jpg";
          }
           else if (data.weather[0].main == "Drizzle") {
            weather_icon.src = "images/drizzle.jpg";
          }
           else if (data.weather[0].main == "Mist") {
            weather_icon.src = "images/mist.jpg";
          }
   console.log(data);
      }

      searchBtn.addEventListener("click", () => {
        checkWeather(searchInput.value);
      });
  