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
  
  // these are the only decks worth keeping track of for the horizontal arrows
  var decks = ["#team_vantage","#team_mission"];
  var current_deck = 1;
  
  return {
    
    setCurrentDeck : function(deck){
      current_deck = deck;
    },
    
    getCurrentDeck : function() {
      return decks[current_deck-1];
    },
    
    getMapping : function (rel) {
      return mapping[rel];
    }
  }
  
}();

$(function(){
  
  $("a.nav-bottom-vantage").click(function(e){
    e.preventDefault();
    if(tv) {
      tv.goTo(1)
    }
  });
  
  var tv, mission, deck;
  if($('#team_vantage').length) { 
    tv = $('#team_vantage').slidedeck({ hideSpines: true, speed: 1000});
  }
  
  if($('#team_mission').length) {
    mission = $('#team_mission').slidedeck({ hideSpines: true, keys: false, touch: false, cycle: true, speed: 1000, transition: "linear" });
  }
  
  if($('#my_slidedeck').length) {
    // init the main slidedeck if we're on a page that has one...
    deck = $('#my_slidedeck').slidedeck({hideSpines:true});
    deck.vertical();
    
    // these are clicks on the 4 bottom icons... so one of these will set the table for the current deck we want to control
    $("a.vertical_menu").click(function(e){
      e.preventDefault();
      var slide = this.href.replace(/.+#/,'');
      $('#my_slidedeck').slidedeck({scroll:true}).goTo(1).vertical().goTo(slide);
      Vantage.utils.setCurrentDeck(slide);        
    });
  }
  
  $.fn.superfish.defaults.autoArrows = false;
  $('#main-nav').superfish({
    pathClass: 'current'
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
  
  $("#outer-slidedeck_nav .right .next").click(function(e){
    var currentDeck = Vantage.utils.getCurrentDeck();  
    if(currentDeck) {
      $(currentDeck).slidedeck().next();
    }
  }); 
     
  $("#outer-slidedeck_nav .right .prev").click(function(e){
    var currentDeck = Vantage.utils.getCurrentDeck();  
    if(currentDeck) {
      $(currentDeck).slidedeck().prev();  
    }
  });
  
   var plot1 = jQuery.jqplot ('chart_1', [[['Success Ratio', 99],['other', 1]]], 
     {
       grid: {
         background: "#ffffff",
         borderColor: "#ffffff",
         shadow: false
       },
       seriesColors: ["#5f6a72", "#FFFFFF"],
       seriesDefaults: {
         renderer: jQuery.jqplot.PieRenderer, 
         rendererOptions: {
           diameter: 155,
           showDataLabels: false
         }
       }
     }
   );
   
   var plot2 = jQuery.jqplot ('chart_2', [[['Repeat Business', 87],['other', 13]]], 
      {
        grid: {
           background: "#ffffff",
           borderColor: "#ffffff",
           shadow: false
         },
        seriesColors: ["#F37421", "#FFFFFF"],
        seriesDefaults: {
          renderer: jQuery.jqplot.PieRenderer, 
          rendererOptions: {
            diameter: 155,
            showDataLabels: false
          }
        }
      }
    );
    
    var plot3 = jQuery.jqplot ('chart_3',[[['High Growth Client', 88], ['Other', 12]]], 
       {
         grid: {
            background: "#ffffff",
            borderColor: "#ffffff",
            shadow: false
          },
         seriesColors: ["#a9b2ba", "#FFFFFF"],
         seriesDefaults: {
           renderer: jQuery.jqplot.PieRenderer, 
           rendererOptions: {
             diameter: 155,
             showDataLabels: false
           }
         }
       }
     );
});
