(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.tabs').tabs({"swipeable":true});
    $('.parallax').parallax();
    $("#mostrarTitols").on("click",function(){
      $.ajax({
        method: "GET",
        url: "https://api.spaceflightnewsapi.net/v3/articles?_limit=8",
        dataType: "json",   // necessitem això pq ens retorni un objecte JSON
      }).done(function (msg) {
        $("#test-swipe-3").append('<div class="tabs-content"></div>');
        $("#test-swipe-3 .tabs-content").append('<div class="container"></div>');
        $(".tabs-content .container").append('<div class="section"></div>');
        let count = 0;
        let countRow = 0;
        for(let item in msg) {
          
          if(count %3 == 0){
            console.log(count);
            $(".container .section").append('<div class="row row'+count+'"></div>');
            countRow = count;
          }

          elem = $("<a href='#!' class='collection-item'>"+msg[item].title+"</a>");
          $(".collection").append(elem);
          $(elem).click(function() {
            $(".tabs").tabs("select","test-swipe-2");
            $("#test-swipe-2").empty();
            $("#test-swipe-2").append("<h1>"+msg[item].title+"</h1><p>"+msg[item].summary+"</p><img src='"+msg[item].imageUrl+"'><br>");
            readMore = $("<a href='#'>Read more...</a>");
            $("#test-swipe-2").append(readMore);
            $(readMore).click(function(){
              window.open(msg[item].url, '_system'); return false;
            });
          });

          columna = '<div class="col s12 m6 l4 col'+count+'"></div>';
          iconBlock = '<div class="icon-block icon-block'+count+'"></div>';
          imagen = '<img src="'+msg[item].imageUrl+'">';
          titulo = '<h2>'+msg[item].title+'</h2>';
          summary = '<p>'+msg[item].summary+'</p>';
          
          $(".section .row"+countRow+"").append(columna);
          $(".row"+countRow+" .col"+count+"").append(iconBlock);
          $(".row"+countRow+" .col"+count+" .icon-block"+count+"").append(imagen);
          $(".row"+countRow+" .col"+count+" .icon-block"+count+"").append(titulo);
          $(".row"+countRow+" .col"+count+" .icon-block"+count+"").append(summary);
          
          count += 1;
        };
      }).fail(function () {
        alert("ERROR");
      });
    })
  }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function(){
  $('.fixed-action-btn').floatingActionButton();
}); 
 
document.addEventListener('deviceready', onDeviceReady, false);
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
 
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
}


