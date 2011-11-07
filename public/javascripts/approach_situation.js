if(!Vantage) {
  var Vantage = {};
}

Vantage.situation = function () {
  return {}
}();

(function($) {
  
})(jQuery);


$(function(){
  
  var deck = $('#approach_slidedeck').slidedeck({hideSpines:true});
  
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
    Vantage.utils.setCurrentDeck(slide);
  });
 
  $("#slidedeck_mini .right .next").click(function() {
    deck.next();
  });
  
  $("#slidedeck_mini .right .prev").click(function() {
    deck.prev();
  });
  
});