$(function(){
  $('#my_slidedeck').slidedeck({hideSpines:true}).vertical();
  $.fn.superfish.defaults.autoArrows = false;
  $('#main-nav').superfish({
    pathClass: 'current'
  });
});
