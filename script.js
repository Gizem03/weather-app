var searchButton = document.getElementById("search-button");

var input = document.getElementById("search-input");

function saveSearchHistory() {
  var searchCities = localStorage.getItem("cities");

  localStorage.setItem("cities", input.value);
  //if else -2-3 yap
}

function searchWeather(event) {
  // code to execute when the search button is clicked
  event.preventDefault();
  //TODO DO SERVER SIDE SEARCH FOR WEATHER
  saveSearchHistory();
}

searchButton.addEventListener("click", searchWeather);
