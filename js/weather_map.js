"use strict";

//MAIN JQUERY AJAX FUNCTION HERE ----------------------------------------------------------------------------------
function getWeather(darkSkyKey, coordinates) {
    $.ajax('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' + darkSkyKey + '/' + coordinates.lat + ',' + coordinates.lng)
        .done(function (data) {
            console.log(data);
            renderTodayWX(data);
            renderTommorrowWX(data);
            renderRestOfWkWX(data);
        });
}

mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 13,
    center: [-98.4916, 29.4252]
});

//marker
var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.4916, 29.4252])
    .addTo(map);


//TODAYS WEATHER CARD, ICONS AND JUMBOTRON -----------------------------------------------------------------------
function renderTodayWX(data) {
    //THIS POPULATES TODAY'S WEATHER
    var dateObject = new Date(data.currently.time * 1000);
    $('.todayClass').html('<div class="card-header">' + 'Today' + '<div>' + dateObject + '</div>' + '</div>' +
        '<div class="card-body">' +
        '<h5 class="card-title">' + '<div class="todayIconClass">' + '</div>' + data.currently.temperature + '°' + '</h5>' +
        '<p class="card-text">' + data.currently.summary + '</p>' +
        '<p class="card-text">' + 'High: ' + data.daily.data[0].temperatureHigh + '°' + '/Low: ' + data.daily.data[0].temperatureLow + '°' + '</p>' +
        '<p class="card-text">' + 'Feels Like: ' + data.currently.apparentTemperature + '°' + '</p>' +
        '<p class="card-text">' + 'Wind Speed: ' + data.currently.windSpeed + ' mph' + '</p>' +
        '<p class="card-text">' + data.hourly.summary + '</p>' +
        '</div>');

    //TODAYS ICON AND JUMBOTRON IF STATEMENT
    if (((data.currently.summary).toLowerCase()).includes("overcast") || ((data.currently.summary).toLowerCase()).includes("cloudy")) {
        $('.todayIconClass').html('<img src="images/overcast-icon.png" alt="Overcast Weather Icon">');
        $('.currentWeather').css('background-image', "url('images/overcast.gif')").css('background-repeat', 'no-repeat').css('background-size', 'cover').css('color', 'white');
        $('body').css('background-color', '#3c3c42');
    } else if (((data.currently.summary).toLowerCase()).includes("clear") || ((data.currently.summary).toLowerCase()).includes("day")) {
        $('.todayIconClass').html('<img src="images/sunny-icon.png" alt="Sunny Weather Icon">');
        $('.currentWeather').css('background-image', "url('images/sunny-image.jpg')").css('background-repeat', 'no-repeat').css('background-size', 'cover');
    } else if (((data.currently.summary).toLowerCase()).includes("partly cloudy") || ((data.currently.summary).toLowerCase()).includes("day")) {
        $('.todayIconClass').html('<img src="images/partly-cloudy-day-icon.png" alt="Partly Cloudy Day Weather Icon">');
        $('.currentWeather').css('background-image', "url('images/partly-cloudy-day-gif.gif')").css('background-repeat', 'no-repeat').css('background-size', 'cover');
    } else if (((data.currently.summary).toLowerCase()).includes("partly cloudy") && ((data.currently.summary).toLowerCase()).includes("night")) {
        $('.todayIconClass').html('<img src="images/clear-night-icon.png" alt="Partly Cloudy Night Weather Icon">');
        $('.currentWeather').css('background-image', "url('images/partly-cloudy-night.gif')").css('background-repeat', 'no-repeat').css('background-size', 'cover').css('color', 'white');
        $('body').css('background-color', 'gray');
    } else if (((data.currently.summary).toLowerCase()).includes("clear") && ((data.currently.summary).toLowerCase()).includes("night")) {
        $('.todayIconClass').html('<img src="images/partly-cloudy-night.png" alt="Clear Night Weather Icon">');
        $('.currentWeather').css('background-image', "url('images/clear-night.gif')").css('background-repeat', 'no-repeat').css('background-size', 'cover').css('color', 'white');
        $('body').css('background-color', 'gray');
    } else if (((data.currently.summary).toLowerCase()).includes("drizzle")) {
        $('.todayIconClass').html('<img src="images/drizzle-icon.png" alt="Drizzle Weather Icon">');
        $('.currentWeather').css('background-image', "url('images/rain.gif')").css('background-repeat', 'no-repeat').css('background-size', 'cover').css('color', 'white');
        $('body').css('background-color', 'gray');
    } else if (((data.currently.summary).toLowerCase()).includes("thunder")) {
        $('.todayIconClass').html('<img src="images/thunderstorm-icon.png" alt="Thunderstorm Weather Icon">');
        $('.currentWeather').css('background-image', "url('images/thunder.gif')").css('background-repeat', 'no-repeat').css('background-size', 'cover').css('color', 'white');
        $('body').css('background-color', 'gray');
    } else if (((data.currently.summary).toLowerCase()).includes("rain")) {
        $('.todayIconClass').html('<img src="images/rain-icon.png" alt="Rain Weather Icon">');
        $('.currentWeather').css('background-image', "url('images/rain.gif')").css('background-repeat', 'no-repeat').css('background-size', 'cover').css('color', 'white');
        $('body').css('background-color', 'gray');
    } else if (((data.currently.summary).toLowerCase()).includes("snow")) {
        $('.todayIconClass').html('<img src="images/snow-icon.png" alt="Snow Weather Icon">');
        $('.currentWeather').css('background-image', "url('images/snow.gif')").css('background-repeat', 'no-repeat').css('background-size', 'cover').css('color', 'white');
    } else if (((data.currently.summary).toLowerCase()).includes("sleet") || ((data.currently.summary).toLowerCase()).includes("hail")) {
        $('.todayIconClass').html('<img src="images/hail-icon.png" alt="Partly Cloudy Night Weather Icon">');
        //HAIL OR SLEET JUMBOTRON

        $('body').css('background-color', 'gray');
    } else if (((data.currently.summary).toLowerCase()).includes("tornado") || ((data.currently.summary).toLowerCase()).includes("hurricane")) {
        $('.todayIconClass').html('<img src="images/tornado-icon.png" alt="Tornado or Hurricane Weather Icon">');
        // TORNADO OR HURRICANE

        $('body').css('background-color', 'gray');
    } else if (((data.currently.summary).toLowerCase()).includes("wind")) {
        $('.todayIconClass').html('<img src="images/wind-icon.png" alt="Windy Weather Icon">');
        $('.currentWeather').css('background-image', "url('images/windy-tree.gif')").css('background-repeat', 'no-repeat').css('background-size', 'cover').css('color', 'white');
    } else if (((data.currently.summary).toLowerCase()).includes("fog") && ((data.currently.summary).toLowerCase()).includes("morning")) {
        $('.todayIconClass').html('<img src="images/fog-icon.png" alt="Foggy Morning Icon">');
        $('.currentWeather').css('background-image', "url('images/fog.gif')").css('background-repeat', 'no-repeat').css('background-size', 'cover');
        $('body').css('background-color', 'gray');
    } else if (((data.currently.summary).toLowerCase()).includes("fog") && ((data.currently.summary).toLowerCase()).includes("night")) {
        $('.todayIconClass').html('<img src="images/foggy-night.png" alt="Foggy Night Icon">');
        $('.currentWeather').css('background-image', "url('images/foggy-night.gif')").css('background-repeat', 'no-repeat').css('background-size', 'cover').css('color', 'white');
        $('body').css('background-color', 'gray');
    }
}


//TOMORROW WEATHER CARD HERE---------------------------------------------------------------------------------------
function renderTommorrowWX(data) {
    //THIS POPULATES TOMORROW'S WEATHER
    var tomorrowDateObject = new Date(data.daily.data[1].time * 1000);

    console.log(data.daily.data[1].summary);

    //TOMORROWS ICON IF STATEMENT
    if (((data.daily.data[1].summary).toLowerCase()).includes("overcast") || ((data.daily.data[1].summary).toLowerCase()).includes("cloudy")) {
        $('.tomorrowIconClass').html('<img src="images/overcast-icon.png" alt="Overcast Weather Icon">');
    } else if (((data.daily.data[1].summary).toLowerCase()).includes("clear") && ((data.daily.data[1].summary).toLowerCase()).includes("day")) {
        $('.tomorrowIconClass').html('<img src="images/sunny-icon.png" alt="Sunny Weather Icon">');
    } else if (((data.daily.data[1].summary).toLowerCase()).includes("clear") && ((data.daily.data[1].summary).toLowerCase()).includes("night")) {
        $('.tomorrowIconClass').html('<img src="images/clear-night-icon.png" alt="Clear Night Weather Icon">');
    } else if (((data.daily.data[1].summary).toLowerCase()).includes("partly cloudy") && ((data.daily.data[1].summary).toLowerCase()).includes("day")) {
        $('.tomorrowIconClass').html('<img src="images/partly-cloudy-day-icon.png" alt="Partly Cloudy Day Weather Icon">');
    } else if (((data.daily.data[1].summary).toLowerCase()).includes("partly cloudy") && ((data.daily.data[1].summary).toLowerCase()).includes("night")) {
        $('.tomorrowIconClass').html('<img src="images/partly-cloudy-night.png" alt="Partly Cloudy Night Weather Icon">');
    } else if (((data.daily.data[1].summary).toLowerCase()).includes("drizzle")) {
        $('.tomorrowIconClass').html('<img src="images/drizzle-icon.png" alt="Drizzle Weather Icon">');
    } else if (((data.daily.data[1].summary).toLowerCase()).includes("thunder")) {
        $('.tomorrowIconClass').html('<img src="images/thunderstorm-icon.png" alt="Thunderstorm Weather Icon">');
    } else if (((data.daily.data[1].summary).toLowerCase()).includes("rain")) {
        $('.tomorrowIconClass').html('<img src="images/rain-icon.png" alt="Rain Weather Icon">');
    } else if (((data.daily.data[1].summary).toLowerCase()).includes("snow")) {
        $('.tomorrowIconClass').html('<img src="images/snow-icon.png" alt="Snow Weather Icon">');
    } else if (((data.daily.data[1].summary).toLowerCase()).includes("tornado") || ((data.daily.data[1].summary).toLowerCase()).includes("hurricane")) {
        $('.tomorrowIconClass').html('<img src="images/tornado-icon.png" alt="Tornado or Hurricane Weather Icon">');
    } else if (((data.daily.data[1].summary).toLowerCase()).includes("wind")) {
        $('.tomorrowIconClass').html('<img src="images/wind-icon.png" alt="Windy Weather Icon">');
    } else if (((data.daily.data[1].summary).toLowerCase()).includes("fog") && ((data.daily.data[1].summary).toLowerCase()).includes("morning")) {
        $('.tomorrowIconClass').html('<img src="images/fog-icon.png" alt="Foggy Morning Weather Icon">');
    } else if (((data.daily.data[1].summary).toLowerCase()).includes("fog") && ((data.daily.data[1].summary).toLowerCase()).includes("night")) {
        $('.tomorrowIconClass').html('<img src="images/foggy-night.png" alt="Foggy Night Weather Icon">');
    } else if (((data.daily.data[1].summary).toLowerCase()).includes("sleet") || ((data.daily.data[1].summary).toLowerCase()).includes("hail")) {
        $('.tomorrowIconClass').html('<img src="images/hail-icon.png" alt="Sleet or Hail Weather Icon">');
    }

    $('.tomorrowClass').html('<div class="card-header">' + 'Tomorrow' + '<div>' + tomorrowDateObject + '</div>' + '</div>' +
        '<div class="card-body">' +
        '<h5 class="card-title">' + '<div class="tomorrowIconClass">' + '</div>' + 'High: ' + data.daily.data[1].temperatureHigh + '°' + '/Low: ' + data.daily.data[1].temperatureLow + '°' + '</h5>' +
        '<p class="card-text">' + data.daily.data[1].summary + '</p>' +
        // '<p class="card-text">' + data.daily.temperatureHigh + '/' + data.daily.temperatureLow + '</p>' + //not working yet
        // '<p class="card-text">' + 'Feels Like: ' + data.currently.apparentTemperature + '°' + '</p>' +
        '<p class="card-text">' + 'Wind Speed: ' + data.daily.data[1].windSpeed + ' mph' + '</p>' +
        // '<p class="card-text">' + data.daily.data[1].summary + '</p>' +
        '</div>');
}

// REST OF WEEK WEATHER FUNCTION HERE -----------------------------------------------------------------------------
function renderRestOfWkWX(data) {

    for (var i = 2; i <= 6; i++) {
        var otherDateObject = new Date(data.daily.data[i].time * 1000);
        var weatherIcons5 = '';

        //OTHER DAYS IF STATEMENTS FOR ICONS
        if (((data.daily.data[i].summary).toLowerCase()).includes("mostly cloudy")  || ((data.daily.data[i].summary).toLowerCase()).includes("overcast")) {
            weatherIcons5 = '<img src="images/overcast-icon.png" alt="Overcast Weather Icon">'
        } else if (((data.daily.data[i].summary).toLowerCase()).includes("clear") && ((data.daily.data[i].summary).toLowerCase()).includes("day")) {
            weatherIcons5 = '<img src="images/sunny-icon.png" alt="Clear Day Weather Icon">'
        } else if (((data.daily.data[i].summary).toLowerCase()).includes("clear") && ((data.daily.data[i].summary).toLowerCase()).includes("night")) {
            weatherIcons5 = '<img src="images/clear-night-icon.png" alt="Clear Night Weather Icon">'
        } else if (((data.daily.data[i].summary).toLowerCase()).includes("fog")) {
            weatherIcons5 = '<img src="images/fog-icon.png" alt="Overcast Weather Icon">'
        } else if (((data.daily.data[i].summary).toLowerCase()).includes("drizzle")) {
            weatherIcons5 = '<img src="images/drizzle-icon.png" alt="Drizzle Weather Icon">'
        } else if (((data.daily.data[i].summary).toLowerCase()).includes("thunder")) {
            weatherIcons5 = '<img src="images/thunderstorm-icon.png" alt="Thunderstorm Weather Icon">'
        } else if (((data.daily.data[i].summary).toLowerCase()).includes("rain")) {
            weatherIcons5 = '<img src="images/rain-icon.png" alt="Rain Weather Icon">'
        } else if (((data.daily.data[i].summary).toLowerCase()).includes("partly cloudy") && ((data.daily.data[i].summary).toLowerCase()).includes("day")) {
            weatherIcons5 = '<img src="images/partly-cloudy-day-icon.png" alt="Partly Cloudy Weather Icon">'
        } else if (((data.daily.data[i].summary).toLowerCase()).includes("partly cloudy") && ((data.daily.data[i].summary).toLowerCase()).includes("night")) {
            weatherIcons5 = '<img src="images/partly-cloudy-night.png" alt="Partly Cloudy Weather Icon">'
        } else if (((data.daily.data[i].summary).toLowerCase()).includes("wind")) {
            weatherIcons5 = '<img src="images/wind-icon.png" alt="Windy Weather Icon">'
        } else if (((data.daily.data[i].summary).toLowerCase()).includes("snow")) {
            weatherIcons5 = '<img src="images/snow-icon.png" alt="Snow Weather Icon">'
        } else if (((data.daily.data[i].summary).toLowerCase()).includes("hail") || ((data.daily.data[i].summary).toLowerCase()).includes("sleet")) {
            weatherIcons5 = '<img src="images/hail-icon.png" alt="Hail or Sleet Weather Icon">'
        }

        //THIS POPULATES THE WEATHER FOR THE FOLLOWING 5 DAYS OF THE WEEK
        $('#otherDayCards').append('<div class="card bg-light mb-3 text-center" style="max-width: 18rem;">' +
            '<div class="card-header">' + '<div>' + otherDateObject + '</div>' + '</div>' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + '<div id="iconClass">' + weatherIcons5 + '</div>' +
            'High: ' + data.daily.data[i].temperatureHigh + '°' + '/Low: ' + data.daily.data[i].temperatureLow + '°' + '</h5>' +
            '<p class="card-text">' + data.daily.data[i].summary + '</p>' +
            '<p class="card-text">' + 'Wind Speed: ' + data.daily.data[i].windSpeed + ' mph' + '</p>' +
            // '<p class="card-text">' + data.daily.data[i].summary + '</p>' +
            '</div>' +
            '</div>');

        // console.log(weatherIcons5);
    }
}


//MARKER FUNCTION HERE --------------------------------------------------------------------------------------------
function moveMarker() {
    var lngLat = marker.getLngLat();
    var coordinates = {
        lat: lngLat.lat,
        lng: lngLat.lng
    };

    console.log(coordinates);

    getWeather(darkSkyKey, coordinates);

    //this allows me to clear the appended otherDayCards for the new appended cards
    $('#otherDayCards').empty();
}

getWeather(darkSkyKey, {lat: 29.424349, lng: -98.491142});
marker.on('dragend', moveMarker);


//geocode-------------------------------------------------------------------------------------------------------
function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        })
        .then(function(data) {
            return data.features[0].center;
        });
}
// console.log(geocode("San Antonio", mapboxToken));

function searchBarFunction(info, token, map) {
    var userInput =
        geocode("16111 San Pedro Ave, San Antonio, TX 78232", mapboxToken).then(function (result) {
            console.log(result);
            //recenter the map
            map.setCenter(result); //4. yes, this is how to recenter programmatically
            //set a popup
            // var popup = new mapboxgl.Popup()
            //     .setHTML(tangStreet.popupHTML);
            // //set a marker
            // var marker = new mapboxgl.Marker()
            //     .setLngLat(result)
            //     .addTo(map)
            //     .setPopup(popup);
            // popup.addTo(map) //call popup
        });
}
console.log(favRestaurantMarkerGeocode("16111 San Pedro Ave, San Antonio, TX 78232", mapboxToken, map));


//TODO: ASSIGN ICONS TO the ICONS NOT SUMMARIES
//TODOne: INSERT INTO CARDS WITH SOME TYPE OF FOR LOOP
//TODO: ASSIGN GIFS TO currently icon for clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, partly-cloudy-night.
//TODO: US AN IF STATEMENT TO INSERT INTO JUMBOTRON
//TODO: F TO C
//TODO: PUT MARKER ON MAP
//TODO: ALLOW USER TO SET AND SAVE LOCATION?
//TODO: SEARCH WEATHER BY CITY NAME
//TODO: SEARCH WEATHER BY MOVING MARKER
//TODO: REMOVE VANILLA CSS
//TODO: DOUBLE CHECK ORDER OF IF STATEMENTS (LIKE THUNDER SHOULD COME BEFORE RAIN PROBABLY)
//TODO: ADD HIGH TEMP ICON SET TO .TEMPERATUREHIGH

//ICONS: https://www.iconfinder.com/iconsets/weather-color-2