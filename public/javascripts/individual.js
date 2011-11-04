if(!Vantage) {
  var Vantage = {};
}

Vantage.individual = function () {
     
  return {
    
  }
  
}();

(function($) {
  
})(jQuery);


$(function(){
  $("#slideToggle").click(function () {
    $('.slideTogglebox').slideDown('slow');
  });
  $("#slideToggle").hover(function () {
    $(this).css("color","#F37421");
  });
  $("#slideToggle").mouseout(function () {
    $(this).css("color","#455560");
  });             
  $("#clickme").click(function() {
    $('.slideTogglebox').slideUp('slow'); 
  });
  $("#clickme").hover(function () {
    $(this).css("color","#F37421");
  });
  $("#clickme").mouseout(function () {
    $(this).css("color","#455560");
  });
  
  $("tr.stripe:even").addClass("even");             
});
