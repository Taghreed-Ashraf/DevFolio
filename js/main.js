// top botton 
let sectionOffset = $('#services').offset().top;
$(window).scroll(function () {
  if($(window).scrollTop()>sectionOffset - 100)
  {
    $('#topBtn').fadeIn(1000)
  }
  else
  {
    $('#topBtn').fadeOut(1000)
  }
})
$('#topBtn').click(function () {
  $('body,html').animate({scrollTop:0},1000)
})