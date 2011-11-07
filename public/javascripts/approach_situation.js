if(!Vantage) {
  var Vantage = {};
}

Vantage.situation = function () {
  var info = [
    {
      heading: "WE START WITH A 360º APPROACH",
      tagline: "To create a framework for the search, we perform a thorough evaluation of market conditions, business objectives, corporate culture, and organizational landscape."
    },{
      heading: "EVALUATE ORGANIZATIONAL LANDSCAPE",
      tagline: "Through initial comprehensive stakeholder interviews, we are able to quickly assess the corporate culture and team framework."
    },{
      heading: "MAP PROCESS CHANNELS",
      tagline: "We believe it is critical to identify and partner with key influencers and decision makers early in our search process."
    },{
      heading: "DETERMINE CORPORATE CULTURE",
      tagline: "By conducting in-depth client-side interviews and applying our deep understanding of the overall marketplace, we are able to easily distill and articulate the corporate values and culture of our clients."
    },{
      heading: "MAP CORPORATE GOALS & MILESTONES",
      tagline: "By listening carefully and posing the difficult questions, we are able to help our clients articulate their goals, needs, and priorities more clearly."
    },{
      heading: "LINK ORGANIZATIONAL OBJECTIVES WITH ROLE",
      tagline: "We synthesize the client’s needs and objectives to create the most direct path to invaluable and effectual executive hires."
    },{
      heading: "DEVELOP KEY ROLES & OBJECTIVES",
      tagline: "In partnership with our client, we construct the definitive profile that optimally aligns with our client’s needs and objectives."
    },{
      heading: "MAP ROLE IMPACT TO SUCCESS FACTORS",
      tagline: "As part of our rigorous best practices, we identify the key Success Factors that define core competencies, experiences, and proof points to drive a highly-effective executive search."
    }
  ]
  return {
    getInfo : function(idx) {
      return info[idx-1];
    }
  }
}();

(function($) {
  
  $.updateSlides = function(slide) {
    $(".small-trustmark").attr('style','background: white url("../images/approach-trustmark-'+slide+'.png") no-repeat 0 0');
    var info = Vantage.situation.getInfo(slide);
    $(".mission > h2").text(info.heading);
    $(".mission > p").text(info.tagline);
  }
  
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
    $.updateSlides(deck.current);
  });
  
  $("#slidedeck_mini .right .prev").click(function() {
    deck.prev();
    $.updateSlides(deck.current);
  });
  
});