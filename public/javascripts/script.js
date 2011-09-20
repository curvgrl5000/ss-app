$(function(){
  
  if($('#team_mission').slidedeck() != null) {
    var mission = $('#team_mission').slidedeck({ hideSpines: true, keys: false, touch: false, cycle: true, speed: 1000, transition: "linear" });
    $('.inner_mission_nav .prev').click(function(e){
      e.preventDefault();
      mission.prev();
    });

    $('.inner_mission_nav .next').click(function(e){
      e.preventDefault();
      mission.next();
    });
  }
  
  if($('#my_slidedeck').length) {
    $('#my_slidedeck').slidedeck({hideSpines:true}).vertical();
    $("a.vertical_menu").click(function(e){
      e.preventDefault();
      var slide = this.href.replace(/.+#/,'');
      $('#my_slidedeck').slidedeck({scroll:true}).vertical().goTo(slide);  
    });
  }
  
  $.fn.superfish.defaults.autoArrows = false;
  $('#main-nav').superfish({
    pathClass: 'current'
  });
});
