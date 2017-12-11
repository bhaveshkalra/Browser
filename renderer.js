var $ = require('jquery');
$('boom')[0].play();

$('#visit').click(function() {
    var url=$('#urlinput').val();
    $(this).css("color","red");
    $('boom')[0].play();
    $('.tab.active').text(url); 
    $('.view.active').attr('src',url);
  
});

$('#newtab').click(function(){
    var url=$('#urlinput').val();

    $('.tab,.view').removeClass('active');

    $('#tabbar').append('<li class="tab active">'+'</li>');
    $('#viewss').append('<webview class="tab active" src="'+url+'"></webview>');
});

$('body').on('click','.tab',function(){
    $('.tab, .view').removeClass('active');

    var index=$(this).index();

    $('.tab').eq(index).addClass('active');
    $('.view').eq(index).addClass('active');

});