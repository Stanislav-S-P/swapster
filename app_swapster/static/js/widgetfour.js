var settings = {
  "async": true,
  "crossDomain": true,
  "url": 'https://api.coingecko.com/api/v3/simple/price?ids=tron&vs_currencies=usd',
  "method": "GET"
}

$.ajax(settings).done(function (response) {
    console.log(response);

    var Price = parseFloat(response.tron.usd, 4);
    $("#price_4").append("$ "+ Price);
  });

  var settings_1 = {
    "async": true,
    "crossDomain": true,
    "url": 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=tron&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h',
    "method": "GET",
  }


  $.ajax(settings_1).done(function (response) {
    console.log(response);

    var Procent_1 = (response[0].price_change_percentage_24h_in_currency.toFixed(2));
    var colors = document.querySelector('.bot-right-4')

    $("#procent_4").append(Procent_1 + "%");
    if (Procent_1 > 0) {
      colors.style.color = "#8AD4B8";
    } else {
      colors.style.color = "#FF929F";
    }
  });

  const name_right_4 = document.querySelector('.bot-right-4')
  if (name_right_4.firstElementChild === '-') {
    name_right_4.style.color = "#8AD4B8";
  } else {
    name_right_4.style.color = "#FF929F";
  }
  var settings_mob_4 = {
    "async": true,
    "crossDomain": true,
    "url": 'https://api.coingecko.com/api/v3/simple/price?ids=tron&vs_currencies=usd',
    "method": "GET"
  }

  $.ajax(settings_mob_4).done(function (response) {
      console.log(response);

      var Price_mob_4 = parseFloat(response.tron.usd, 4);
      $("#price_mob_4").append("$"+ Price_mob_4);
    });

    var settings_mob_4_4 = {
      "async": true,
      "crossDomain": true,
      "url": 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=tron&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h',
      "method": "GET",
    }


    $.ajax(settings_mob_4_4).done(function (response) {
      console.log(response);

      var Procent_mob_4_4 = (response[0].price_change_percentage_24h_in_currency.toFixed(2));
      var colors = document.querySelector('.bot-right-4_mob')

      $("#procent_mob_4_4").append(Procent_mob_4_4 + "%");
      if (Procent_mob_4_4 > 0) {
        colors.style.color = "#09C382";
      } else {
        colors.style.color = "#EE4949";
      }
    });

