$("#loginSend").click(function()
{
  var loginData = $("#loginForm").serialize();
  $.post('../php/login.php', loginData, function(data, status){
    if(status == "success")
    {

      //Action made if Login is Successfully (Rearrange the website)
      if(data == 1) // 1 is success 0 is fail
      {
        removeDiv("#registerContentBox",0)
        removeDiv("#loginContentBox",180);
        removeDiv("#welcomeContentBox",360);
        removeDiv("#youContentBox",540);
        removeDiv("#backContentBox",720);
      }

      //Action made if Login was wrong
      if(data == 0)
      {

      }
    }
  });
});

//Animates a Div and then let it disapear
function removeDiv(divName, delay)
{
  $(divName).delay(delay).animate({opacity: 0, top: "-20px"},200, function(){$(divName).remove();});
}
