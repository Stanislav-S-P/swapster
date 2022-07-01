// BTC
var use_btc = 0;
$.ajax({
  url: 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd',
  method: "GET",
  success: function(data){
    use_btc = data.bitcoin.usd;
  },
});

// ETH
var use_eth = 0;
$.ajax({
  url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
  method: "GET",
  success: function(data){
    use_eth = data.ethereum.usd;
  },
});

// BNB
var use_bnb = 0;
$.ajax({
  url: 'https://api.coingecko.com/api/v3/simple/price?ids=Binancecoin&vs_currencies=usd',
  method: "GET",
  success: function(data){
    use_bnb = data.binancecoin.usd;
  },
});

// TRX
var use_trx = 0;
$.ajax({
  url: 'https://api.coingecko.com/api/v3/simple/price?ids=tron&vs_currencies=usd',
  method: "GET",
  success: function(data){
    use_trx = data.tron.usd;
  },
});

// USD
var use_usd = 0;
$.ajax({
  url: 'https://api.coingecko.com/api/v3/simple/price?ids=usd&vs_currencies=rub',
  method: "GET",
  success: function(data){
    use_usd = data.usd.rub;
  },
});

// USDC
var use_usdc = 0;
$.ajax({
  url: 'https://api.coingecko.com/api/v3/simple/price?ids=usd-coin&vs_currencies=usd',
  method: "GET",
  success: function(data){
    use_usdc = data.u=='usd-coin'.usd;
  },
});

// USDT
var use_usdt = 0;
$.ajax({
  url: 'https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd',
  method: "GET",
  success: function(data){
    use_usdt = data.tether.usd;
  },
});

// convert
window.onload = function () {
  let c = {'Bitcoin BTC':use_btc, 'Ethereum ETH':use_eth, 'BNB BNB':use_bnb, 'Tron TRX':use_trx, 'Рубли RUB':'1', 'Tether USDT':use_usdt, 'USD-Coin USDC':use_usdc, 'USD':use_usd}; // Устанавливаем курс валют

  let val = document.getElementById('val'); // Получаем элемент ввода данных
  let currency1 = document.getElementById('cur1'); // Получаем первый селект
  let currency2 = document.getElementById('cur2'); // Получаем второй селект
  let result = document.getElementsByClassName('convert_result')[0]; // Получаем поле куда будем писать результат
  function summ() { // Делаем функцию
      if(currency1.value === currency2.value){ // Если оба значения в селектах равны
          result.innerText = val.value; // То просто вписываем данные из поля ввода
      } else {
          if(currency1.value === 'Bitcoin BTC' && currency2.value === 'BNB BNB'){
            result.innerHTML = ((1-0.4/100)*val.value*use_btc/use_bnb).toFixed(4)
          };
          if(currency1.value === 'Bitcoin BTC' && currency2.value === 'Ethereum ETH'){
            result.innerHTML = ((1-0.4/100)*val.value*use_btc/use_eth).toFixed(5)
          };
          if(currency1.value === 'Bitcoin BTC' && currency2.value === 'Tron TRX'){
            result.innerHTML = ((1-0.4/100)*val.value*use_btc/use_trx).toFixed(2)
          };
          if(currency1.value === 'Bitcoin BTC' && currency2.value === 'Рубли RUB'){
            result.innerHTML = ((1-0.4/100)*val.value*use_btc*use_usd).toFixed(2)
          };
          if(currency1.value === 'Bitcoin BTC' && currency2.value === 'USD'){
            result.innerHTML = ((1-0.4/100)*val.value*use_btc).toFixed(8)
          };
          if(currency1.value === 'Bitcoin BTC' && currency2.value === 'Tether USDT'){
            result.innerHTML = ((1-0.4/100)*val.value*use_btc/use_usdt).toFixed(2)
          };
          if(currency1.value === 'Bitcoin BTC' && currency2.value === 'USD-Coin USDC'){
            result.innerHTML = ((1-0.4/100)*val.value*use_btc/use_usdc).toFixed(2)
          };
          if(currency1.value === 'Ethereum ETH' && currency2.value === 'Bitcoin BTC'){
            result.innerHTML = ((1-0.4/100)*val.value*use_eth/use_btc).toFixed(8)
          };
          if(currency1.value === 'Ethereum ETH' && currency2.value === 'BNB BNB'){
            result.innerHTML = ((1-0.4/100)*val.value*use_eth/use_bnb).toFixed(4)
          };
          if(currency1.value === 'Ethereum ETH' && currency2.value === 'Tron TRX'){
            result.innerHTML = ((1-0.4/100)*val.value*use_eth/use_trx).toFixed(5)
          };
          if(currency1.value === 'Ethereum ETH' && currency2.value === 'Рубли RUB'){
            result.innerHTML = ((1-0.4/100)*val.value*use_eth*use_usd).toFixed(5)
          };
          if(currency1.value === 'Ethereum ETH' && currency2.value === 'USD'){
            result.innerHTML = ((1-0.4/100)*val.value*use_eth).toFixed(5)
          };
          if(currency1.value === 'Ethereum ETH' && currency2.value === 'Tether USDT'){
            result.innerHTML = ((1-0.4/100)*val.value*use_eth/use_usdt).toFixed(2)
          };
          if(currency1.value === 'Ethereum ETH' && currency2.value === 'USD-Coin USDC'){
            result.innerHTML = ((1-0.4/100)*val.value*use_eth/use_usdc).toFixed(2)
          };
          if(currency1.value === 'BNB BNB' && currency2.value === 'Bitcoin BTC'){
            result.innerHTML = ((1-0.4/100)*val.value*use_bnb/use_btc).toFixed(8)
          };
          if(currency1.value === 'BNB BNB' && currency2.value === 'Ethereum ETH'){
            result.innerHTML = ((1-0.4/100)*val.value*use_bnb/use_eth).toFixed(5)
          };
          if(currency1.value === 'BNB BNB' && currency2.value === 'Tron TRX'){
            result.innerHTML = ((1-0.4/100)*val.value*use_bnb/use_trx)
          };
          if(currency1.value === 'BNB BNB' && currency2.value === 'Рубли RUB'){
            result.innerHTML = ((1-0.4/100)*val.value*use_bnb*use_usd)
          };
          if(currency1.value === 'BNB BNB' && currency2.value === 'USD'){
            result.innerHTML = ((1-0.4/100)*val.value*use_bnb)
          };
          if(currency1.value === 'BNB BNB' && currency2.value === 'Tether USDT'){
            result.innerHTML = ((1-0.4/100)*val.value*use_bnb/use_usdt).toFixed(2)
          };
          if(currency1.value === 'BNB BNB' && currency2.value === 'USD-Coin USDC'){
            result.innerHTML = ((1-0.4/100)*val.value*use_bnb/use_usdc).toFixed(2)
          };
          if(currency1.value === 'Tron TRX' && currency2.value === 'Bitcoin BTC'){
            result.innerHTML = ((1-0.4/100)*val.value*use_trx/use_btc).toFixed(8)
          };
          if(currency1.value === 'Tron TRX' && currency2.value === 'Ethereum ETH'){
            result.innerHTML = ((1-0.4/100)*val.value*use_trx/use_eth).toFixed(5)
          };
          if(currency1.value === 'Tron TRX' && currency2.value === 'BNB BNB'){
            result.innerHTML = ((1-0.4/100)*val.value*use_trx/use_bnb).toFixed(4)
          };
          if(currency1.value === 'Tron TRX' && currency2.value === 'Рубли RUB'){
            result.innerHTML = ((1-0.4/100)*val.value*use_trx*use_usd).toFixed(2)
          };
          if(currency1.value === 'Tron TRX' && currency2.value === 'USD'){
            result.innerHTML = ((1-0.4/100)*val.value*use_trx)
          };
          if(currency1.value === 'Tron TRX' && currency2.value === 'Tether USDT'){
            result.innerHTML = ((1-0.4/100)*val.value*use_trx/use_usdt).toFixed(2)
          };
          if(currency1.value === 'Tron TRX' && currency2.value === 'USD-Coin USDC'){
            result.innerHTML = ((1-0.4/100)*val.value*use_trx/use_usdc).toFixed(2)
          };
          if(currency1.value === 'Рубли RUB' && currency2.value === 'Bitcoin BTC'){
            result.innerHTML = ((1-0.4/100)*val.value*1/use_usd/use_btc).toFixed(8)
          };
          if(currency1.value === 'Рубли RUB' && currency2.value === 'Ethereum ETH'){
            result.innerHTML = ((1-0.4/100)*val.value*1/use_usd/use_eth).toFixed(5)
          };
          if(currency1.value === 'Рубли RUB' && currency2.value === 'BNB BNB'){
            result.innerHTML = ((1-0.4/100)*val.value*1/use_usd/use_bnb).toFixed(4)
          };
          if(currency1.value === 'Рубли RUB' && currency2.value === 'Tron TRX'){
            result.innerHTML = ((1-0.4/100)*val.value*1/use_usd/use_trx).toFixed(2)
          };
          if(currency1.value === 'Рубли RUB' && currency2.value === 'USD'){
            result.innerHTML = ((1-0.4/100)*val.value*1/use_usd).toFixed(8)
          };
          if(currency1.value === 'Рубли RUB' && currency2.value === 'Tether USDT'){
            result.innerHTML = ((1-0.4/100)*val.value*1/use_usd/use_usdt).toFixed(2)
          };
          if(currency1.value === 'Рубли RUB' && currency2.value === 'USD-Coin USDC'){
            result.innerHTML = ((1-0.4/100)*val.value*1/use_usd/use_usdc).toFixed(2)
          };
          if(currency1.value === 'USD' && currency2.value === 'Bitcoin BTC'){
            result.innerHTML = ((1-0.4/100)*val.value/use_btc).toFixed(8)
          };
          if(currency1.value === 'USD' && currency2.value === 'Ethereum ETH'){
            result.innerHTML = ((1-0.4/100)*val.value/use_eth).toFixed(5)
          };
          if(currency1.value === 'USD' && currency2.value === 'BNB BNB'){
            result.innerHTML = ((1-0.4/100)*val.value/use_bnb).toFixed(4)
          };
          if(currency1.value === 'USD' && currency2.value === 'Tron TRX'){
            result.innerHTML = ((1-0.4/100)*val.value/use_trx).toFixed(8)
          };
          if(currency1.value === 'USD' && currency2.value === 'Рубли RUB'){
            result.innerHTML = ((1-0.4/100)*val.value*use_usd).toFixed(8)
          };
          if(currency1.value === 'Tether USDT' && currency2.value === 'Рубли RUB'){
            result.innerHTML = ((1-0.4/100)*val.value*use_usdt*use_usd).toFixed(2)
          };
          if(currency1.value === 'Tether USDT' && currency2.value === 'Bitcoin BTC'){
            result.innerHTML = ((1-0.4/100)*val.value*use_usdt/use_btc).toFixed(8)
          };
          if(currency1.value === 'Tether USDT' && currency2.value === 'Ethereum ETH'){
            result.innerHTML = ((1-0.4/100)*val.value*use_usdt/use_eth).toFixed(5)
          };
          if(currency1.value === 'Tether USDT' && currency2.value === 'BNB BNB'){
            result.innerHTML = ((1-0.4/100)*val.value*use_usdt/use_bnb).toFixed(4)
          };
          if(currency1.value === 'Tether USDT' && currency2.value === 'Tron TRX'){
            result.innerHTML = ((1-0.4/100)*val.value*use_usdt/use_trx).toFixed(2)
          };
          if(currency1.value === 'Tether USDT' && currency2.value === 'USD-Coin USDC'){
            result.innerHTML = ((1-0.4/100)*val.value*use_usdt/use_usdc).toFixed(2)
          };
          if(currency1.value === 'USD-Coin USDC' && currency2.value === 'Рубли RUB'){
            result.innerHTML = ((1-0.4/100)*val.value*use_usdc*use_usd).toFixed(2)
          };
          if(currency1.value === 'USD-Coin USDC' && currency2.value === 'Bitcoin BTC'){
            result.innerHTML = ((1-0.4/100)*val.value*use_usdc/use_btc).toFixed(8)
          };
          if(currency1.value === 'USD-Coin USDC' && currency2.value === 'Ethereum ETH'){
            result.innerHTML = ((1-0.4/100)*val.value*use_usdc/use_eth).toFixed(5)
          };
          if(currency1.value === 'USD-Coin USDC' && currency2.value === 'BNB BNB'){
            result.innerHTML = ((1-0.4/100)*val.value*use_usdc/use_bnb).toFixed(4)
          };
          if(currency1.value === 'USD-Coin USDC' && currency2.value === 'Tron TRX'){
            result.innerHTML = ((1-0.4/100)*val.value*use_usdc/use_trx).toFixed(2)
          };
          if(currency1.value === 'USD-Coin USDC' && currency2.value === 'Tether USDT'){
            result.innerHTML = ((1-0.4/100)*val.value*use_usdc/use_usdc).toFixed(2)
          };
        }
      }
  val.oninput = function () { // При вводе данных в поле вызываем функцию.
      summ();
  };
  currency1.onchange = function () { // При смене первого селекта вызываем функцию.
      summ();
  };
  currency2.onchange = function () { // При смене второго селекта вызываем функцию.
      summ();
  }
}
