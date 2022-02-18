$(function(){
  $('.banner li').hover(function(){
      $(this).toggleClass('on').siblings().toggleClass('off');
  });
});