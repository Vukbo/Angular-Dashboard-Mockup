$(document).ready(function() {

$(".topDivider").hide();

//MiddleDivider Animations
  $("#welcome").click(function(){
    $(".middleDivider").animate({height:'100%'}, 200);
$("#welcome").fadeOut(250);
  });


//Circle Animations
  $("#back").click(function(){
    $(".circle").animate({height:'800px', width: '800px'}, 300);
$("#back").fadeOut(250);
  });


//Top Divider SlideIn
$(".slideIn").hover(function()
{
  $(".topDivider").slideDown(250);
}, function()
{
  $(".topDivider").slideUp(250);
});

});
