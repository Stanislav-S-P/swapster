var settings = {
  "async": true,
  "crossDomain": true,
  "url": 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
  "method": "GET"
}

$.ajax(settings).done(function (response) {
    console.log(response);

    var Price = parseFloat(response.ethereum.usd, 2);
    $("#price_2").append("$ "+ Price);
  });

var settings_2 = {
  "async": true,
  "crossDomain": true,
  "url": 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h',
  "method": "GET",
}


$.ajax(settings_2).done(function (response) {
  console.log(response);

  var Procent_1 = (response[0].price_change_percentage_24h_in_currency.toFixed(2));
  var colors = document.querySelector('.bot-right-2')

  $("#procent_2").append(Procent_1 + "%");
  if (Procent_1 > 0) {
    colors.style.color = "#8AD4B8";
  } else {
    colors.style.color = "#FF929F";
  }
});

var settings_mob_2 = {
  "async": true,
  "crossDomain": true,
  "url": 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
  "method": "GET"
}

$.ajax(settings_mob_2).done(function (response) {
    console.log(response);

    var Price_mob_2 = parseFloat(response.ethereum.usd, 2);
    $("#price_mob_2").append("$"+ Price_mob_2);
  });

var settings_mob_2_2 = {
  "async": true,
  "crossDomain": true,
  "url": 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h',
  "method": "GET",
}


$.ajax(settings_mob_2_2).done(function (response) {
  console.log(response);

  var Procent_mob_2_2 = (response[0].price_change_percentage_24h_in_currency.toFixed(2));
  var colors = document.querySelector('.bot-right-2_mob')

  $("#procent_mob_2_2").append(Procent_mob_2_2 + "%");
  if (Procent_mob_2_2 > 0) {
    colors.style.color = "#09C382";
  } else {
    colors.style.color = "#EE4949";
  }
});
