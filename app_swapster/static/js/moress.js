var more = document.querySelectorAll('.more');

for (var i = 0; i < more.length; i++) {
  more[i].addEventListener('click', function() {
    var showPerClick = 7;

    var hidden = this.parentNode.querySelectorAll('div.hidden');
    for (var i = 0; i < showPerClick; i++) {
      if (!hidden[i]) return this.outerHTML = "";

      hidden[i].classList.add('box');
      hidden[i].classList.remove('hidden');
    }
  });
}

// $("button").click(function(){
//   $( "ul.menu" ).toggleClass("tm-menu, newclass");
//  });


//  /*Add or Remove the Class on Click*/
//  $("button").click(function(){
//   $( "ul.menu" ).removeClass( "tm-menu" ).addClass( "newclass" );
//  });

