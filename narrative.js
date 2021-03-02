$(document).ready(function(){

  $(".first").click(function(){
    $(".first").replaceWith($(".second")); 
  });

$('.second').hide();
$('.first').click(function(){
    $('.second').show();       
	});


 $(".second").click(function(){
    $(".second").replaceWith($(".third")); 
	});

  $('.third').hide();
$('.second').click(function(){
    $('.third').show();       
	});


 $(".third").click(function(){
    $(".third").replaceWith($(".fourth")); 
	});

  $('.fourth').hide();
$('.third').click(function(){
    $('.fourth').show();       
	});


$(".fourth").click(function(){
    $(".fourth").replaceWith($(".fifth")); 
	});

  $('.fifth').hide();
$('.fourth').click(function(){
    $('.fifth').show();       
	});


$(".fifth").click(function(){
    $(".fifth").replaceWith($(".sixth")); 
	});

  $('.sixth').hide();
$('.fifth').click(function(){
    $('.sixth').show();       
	});

  $('.next').hide();
$('.fifth').click(function(){
    $('.next').show();       
  });
});

