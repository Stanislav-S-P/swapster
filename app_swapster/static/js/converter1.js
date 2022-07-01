var currency = {name: '', price: ''};
$.ajax({
    method: 'GET',
    url: "https://whitebit.com/api/v4/public/ticker",
    dataType: 'json',
    success: function(data){
        currency.name = data.data[0].name;
        currency.price = data.data[0].quote.USD.price;
        console.log(currency);
    },
    error: function(jqXHR, textStatus, errorThrown){
        alert("ERROR");
    }
});
