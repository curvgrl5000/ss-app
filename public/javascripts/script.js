/**
 * Team Vantage Javascript
 * Resistor Software Inc.
 * (c) David Lazar, 2011
 */
if (typeof(console) === 'undefined') {
    var console = {
        log: function () {},
        info: function () {},
        warn: function () {},
        error: function () {},
        time: function () {}
    };
}
else if (typeof(console.log) === 'undefined') {
    console.log = function () {};
}

if(!Vantage) {
  var Vantage = {};
}

Vantage.utils = function () {

  var mapping = {
    "home": 1,
    "april": 2,
    "tom": 3,
    "may": 4,
    "mark": 5,
    "julie": 6,
    "rich": 7,
    "gene": 8,
    "audrey": 9,
    "steve": 10,
    "irene": 11,
    "brynne": 12
  }
  
  return {
    getMapping: function (rel) {
      return mapping[rel];
    }
  }
  
}();

$(function(){
  
  var tv;
  if($('#team_vantage').slidedeck() != null) { 
    tv = $('#team_vantage').slidedeck({ hideSpines: true, speed: 1000});
  }
  
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
    pathClass: 'fugly'
  });
  
  $('#main-nav li a').click(function(e){
    $(this).parent().addClass('current');
  });
  
  $(".mini-shot").hover(function(e){
    e.preventDefault();
    $(this).find("img").toggleClass("mini-shot-light");
  });
  
  $(".mini-shot").click(function(e){
    e.preventDefault();
    var rel = $(this).find("img").attr("rel");
    if(rel && tv) {
      tv.goTo(Vantage.utils.getMapping(rel));
    }
  });
  
});
