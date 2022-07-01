var settings = {
  "async": true,
  "crossDomain": true,
  "url": 'https://api.coingecko.com/api/v3/simple/price?ids=Binancecoin&vs_currencies=usd',
  "method": "GET"
}

$.ajax(settings).done(function (response) {
  console.log(response);

  var Price = parseFloat(response.binancecoin.usd, 2);
  $("#price_3").append("$ "+ Price);
});

var settings_1 = {
  "async": true,
  "crossDomain": true,
  "url": 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h',
  "method": "GET",
}


$.ajax(settings_1).done(function (response) {
  console.log(response);

  var Procent_1 = (response[0].price_change_percentage_24h_in_currency.toFixed(2));
  var colors = document.querySelector('.bot-right-3')

  $("#procent_3").append(Procent_1 + "%");
  if (Procent_1 > 0) {
    colors.style.color = "#8AD4B8";
  } else {
    colors.style.color = "#FF929F";
  }
});

var settings_mob_3 = {
    "async": true,
    "crossDomain": true,
    "url": 'https://api.coingecko.com/api/v3/simple/price?ids=Binancecoin&vs_currencies=usd',
    "method": "GET"
}

$.ajax(settings_mob_3).done(function (response) {
    console.log(response);

    var Price_mob_3 = parseFloat(response.binancecoin.usd, 2);
    $("#price_mob_3").append("$"+ Price_mob_3);
  });

  var settings_mob_3_3 = {
    "async": true,
    "crossDomain": true,
    "url": 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h',
    "method": "GET",
  }


  $.ajax(settings_mob_3_3).done(function (response) {
    console.log(response);

    var Procent_mob_3_3 = (response[0].price_change_percentage_24h_in_currency.toFixed(2));
    var colors = document.querySelector('.bot-right-3_mob')

    $("#procent_mob_3_3").append(Procent_mob_3_3 + "%");
  if (Procent_mob_3_3 > 0) {
    colors.style.color = "#09C382";
  } else {
    colors.style.color = "#EE4949";
  }
  });
