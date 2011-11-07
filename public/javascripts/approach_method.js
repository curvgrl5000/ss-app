if(!Vantage) {
  var Vantage = {};
}

Vantage.methods = function () {
     
  return {}
  
}();

(function($) {
  
})(jQuery);


$(function(){
  
 $('#teams_slidedeck').slidedeck({hideSpines:true}).vertical();
  
  // these are clicks on the 4 bottom icons... so one of these will set the table for the current deck we want to control
  $("a.vertical_menu").click(function(e){
    e.preventDefault();
    var slide = this.href.replace(/.+#/,'');
    $('#teams_slidedeck').slidedeck({scroll:true}).goTo(1).vertical().goTo(slide);
  });
  
});
