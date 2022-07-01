var settings = {
  "async": true,
  "crossDomain": true,
  "url": 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd',
  "method": "GET",
}

$.ajax(settings).done(function (response) {
  console.log(response);

  var Price_1 = parseFloat(response.bitcoin.usd, 2);
  $("#price_1").append("$ "+ Price_1);
});

var settings_1 = {
  "async": true,
  "crossDomain": true,
  "url": 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h',
  "method": "GET",
}

$.ajax(settings_1).done(function (response) {
  console.log(response);

  var Procent_1 = (response[0].price_change_percentage_24h_in_currency.toFixed(2));
  var colors = document.querySelector('.bot-right-1')

  $("#procent_1").append(Procent_1 + "%");
  if (Procent_1 > 0) {
    colors.style.color = "#8AD4B8";
  } else {
    colors.style.color = "#FF929F";
  }
});

var settings_mob_1 = {
  "async": true,
  "crossDomain": true,
  "url": 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd',
  "method": "GET",
}

$.ajax(settings_mob_1).done(function (response) {
  console.log(response);

  var Price_mob_1 = parseFloat(response.bitcoin.usd, 2);
  $("#price_mob_1").append("$"+ Price_mob_1);
});

var settings_mob_1_1 = {
  "async": true,
  "crossDomain": true,
  "url": 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h',
  "method": "GET",
}

$.ajax(settings_mob_1_1).done(function (response) {
  console.log(response);

  var Procent_mob_1_1 = (response[0].price_change_percentage_24h_in_currency.toFixed(2));
  var colors = document.querySelector('.bot-right-1_mob')

  $("#procent_mob_1_1").append(Procent_mob_1_1 + "%");
  if (Procent_mob_1_1 > 0) {
    colors.style.color = "#09C382";
  } else {
    colors.style.color = "#EE4949";
  }
});
