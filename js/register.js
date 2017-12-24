$('#registerSend').click(function()
{
  var registerData = $('#registerForm').serialize();
  $.post('../php/insertRegisterData.php', registerData, function(data, status)
{
  if(status == "success")
  {
    //here re Arrange the site and change some of the Content

  }
});

});
