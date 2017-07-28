"use strict";


// PART 1: SHOW A FORTUNE

function getFortune(results) { //one parameter which we call "results"
    console.log(results) //testing 
    var fortuneText = results; //we declare a variable called "fortuneText" 
    //and we assign it to "results"
    $('#fortune-text').html(fortuneText); //we get the ID(#fortune-text 
        //from index.html and insert that html in fortuneText

    // TODO: get the fortune and show it in the #fortune-text div
}
function showFortune() { 
$.get('/fortune', getFortune) //we go to app route at server.py /fortune to get the fortune 
//we call the getFortune function above 
}

$('#get-fortune-button').on('click', showFortune);//we get the ID of 
//get-fortune-button from index.html and we call the showFortune function on 'click'





// PART 2: SHOW WEATHER
function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    $.get(url, function (results) {
        $("#weather-info").html(results.forecast);
    });
}

$("#weather-form").on('submit', showWeather);




}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    var formInputs = $("#order-form").serialize();
    $.post("/order-melons.json", formInputs, function (results) {
        if (results.code == "OK") {
            $('#order-status').html("<p>" + results.msg + "</p>");
        }
        else {
            $('#order-status').addClass("order-error");
            $('#order-status').html("<p><b>" + results.msg + "</b></p>");
        }
    });
}

$("#order-form").on('submit', orderMelons);



