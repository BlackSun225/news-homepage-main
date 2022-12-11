$(document).ready(function(){
  $('nav.mob > img').click(function(){
    $('#menu').css('display', 'block');
  });
  $('#menu img').click(function(){
    $('#menu').css('display', 'none');
  });
});