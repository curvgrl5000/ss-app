$(function(){
  
  var deck = $('#my_slidedeck').slidedeck({hideSpines:true}).vertical();
  console.log("deck ", deck);
  
  $("a.vertical_menu").click(function(e){
    e.preventDefault();
    var slide = this.href.replace(/.+#/,'');
    $('#my_slidedeck').slidedeck({scroll:true}).vertical().goTo(slide);  
  });

  $.fn.superfish.defaults.autoArrows = false;
  $('#main-nav').superfish({
    pathClass: 'current'
  });
});
