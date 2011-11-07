if(!Vantage) {
  var Vantage = {};
}

Vantage.teams = function () {
     
  return {}
  
}();

(function($) {
  
})(jQuery);


$(function(){
  
  // first deck has no left/right motions.. so hide the left/right arrows
  $("#slidedeck_nav li.right").hide();
  
  deck = $('#teams_slidedeck').slidedeck({hideSpines:true});
  deck.vertical();  
  mission = $('#team_mission').slidedeck({ hideSpines: true, keys: false, touch: false, cycle: true, speed: 1000, transition: "linear" });
  
  // these are clicks on the 4 bottom icons... so one of these will set the table for the current deck we want to control
  $("a.vertical_menu").click(function(e){
    e.preventDefault();
    var slide = this.href.replace(/.+#/,'');
    // show/hide the controls here
    if(slide == 1) {
      $("#slidedeck_nav li.right").hide();
    } else if (slide == 2) {
      $("#slidedeck_nav li.right").show();
    }
    $('#teams_slidedeck').slidedeck({scroll:true}).goTo(1).vertical().goTo(slide);
    Vantage.utils.setCurrentDeck(slide);
  });
 
  $("#slidedeck_nav .right .next").click(function() {
    var currentDeck = Vantage.utils.getCurrentDeck();
    if (currentDeck) {
      $(currentDeck).slidedeck().next();
    }
  });
  
  $("#slidedeck_nav .right .prev").click(function() {
    var currentDeck = Vantage.utils.getCurrentDeck();
    if (currentDeck) {
      $(currentDeck).slidedeck().prev();
    }
  });
  
});
