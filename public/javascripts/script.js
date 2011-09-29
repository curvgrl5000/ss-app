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
  
  var defaultImages = {
    "april": "mini-shot-april.png",
    "tom": "mini-shot-tom.png",
    "may": "mini-shot-may.png",
    "mark": "mini-shot-mark.png",
    "julie" : "mini-shot-julie.png",
    "rich": "mini-shot-rich.png",
    "gene": "mini-shot-gene.png",
    "audrey": "mini-shot-audrey.png",
    "steve": "mini-shot-steve.png",
    "irene": "mini-shot-irene.png",
    "brynne": "mini-shot-brynne.png" 
  }
  
  var mapping = {
    "home": 1,
    "april": {
      logos: [
        {image: "10gen", alt: "10 Gen", grid: 3},
        {image: "mindflash", alt: "MindFlash!", grid: 3},
        {image: "criteo", alt: "Criteo", grid: 3},
        {image: "razoo", alt: "Razoo", grid: 2},
      ],
      bigpic: "April_HomePage_IMG_1472.png",
      name: "April B. King",
      jobs: ["Specializing in Software","Saas / Internet","Systems / CleanTech"]
    },
    "tom": {
      logos:[
        {image: "oracle", alt: "Oracle", grid: 3},
        {image: "merced", alt: "Merced", grid: 2},
        {image: "10gen", alt: "10 Gen", grid: 3},
        {image: "betfair", alt: "BetFair", grid: 3}
      ],
      bigpic: "Tom_HomePage-IMG-284.png",
      name: "Tom Callahan",
      jobs: ["Specializing in Infrastructure","Consumer Internet","Saas / Software"]
    },
    "may": {
      logos:[
        {image: "tagged", alt: "Tagged", grid: 3},
        {image: "lynda", alt: "Lynda", grid: 3},
        {image: "razoo", alt: "Razoo", grid: 2},
        {image: "webroot", alt: "Webroot", grid: 3}
      ],
      bigpic: "May_homepage_1581.png",
      name: "May Young",
      jobs: ["Specializing in Media","Interactive / Software","Consumer Internet"]
    },
    "mark": {
      logos:[
        {image: "zynga", alt: "Zynga", grid: 2},
        {image: "tagged", alt: "Tagged", grid: 3},
        {image: "songkick", alt: "SongKick", grid: 3},
        {image: "turn", alt: "Turn", grid: 3}
      ],
      bigpic: "Mark_PersonalPage_IMG-1858.png",
      name: "Mark Hubbell",
      jobs: ["Specializing in Software","Internet Media / Interactive","Consumer Internet"]
    },
    "julie": {
      logos:[
        {image: "zynga", alt: "Zynga", grid: 2},
        {image: "like", alt: "Like", grid: 3},
        {image: "adchemy", alt: "Adchemy", grid: 3},
        {image: "topsy", alt: "Topsy", grid: 3}
      ],
      bigpic: "Julie_HomePage_IMG-0954.png",
      name: "Julie Locke",
      jobs: ["Specializing in Media","Interactive / Consumer","Internet Software"]
    },
    "rich": {
      logos:[
        {image: "webroot", alt: "Webroot", grid: 3},
        {image: "ebates", alt: "Ebates", grid: 3},
        {image: "songkick", alt: "SongKick", grid: 2},
        {image: "pubmatic", alt: "Pubmatic", grid: 3}
      ],
      bigpic: "Rich_HomePage_IMG-1132.png",
      name: "Richard Lear",
      jobs: ["Specializing in Media","Interactive / eCommerce","Saas Open Source"]
    },
    "gene": {
      logos:[
        {image: "yahoo", alt: "Yahoo", grid: 3},
        {image: "markmonitor", alt: "Markmonitor", grid: 3},
        {image: "razoo", alt: "Razoo", grid: 2},
        {image: "marklogic", alt: "Marklogic", grid: 3}
      ],
      bigpic: "Gene_HomePg_IMG-1823.png",
      name: "Gene Zaccor",
      jobs: ["Specializing in Internet","Software / Cleantech"]
    },
    "audrey": {
      logos:[
        {image: "webroot", alt: "Webroot", grid: 3},
        {image: "markmonitor", alt: "MarkMonitor", grid: 3},
        {image: "yahoo_narrow", alt: "Yahoo", grid: 2},
        {image: "marklogic", alt: "MarkLogic", grid: 3}
      ],
      bigpic: "Audrey_personal_IMG-0988.png",
      name: "Audery Shuster",
      jobs: ["Specializing in Software","Saas / Internet"]
    },
    "steve": {
      logos:[
        {image: "splunk", alt: "Splunk", grid: 3},
        {image: "xen", alt: "Xen", grid: 3},
        {image: "get-satisfaction", alt: "Get Satisfaction", grid: 3},
        {image: "boomi", alt: "Boomi", grid: 2}
      ],
      bigpic: "Steve_HomePage_IMG-0601.png",
      name: "Steve O'Deegan",
      jobs: ["Specializing in Engineering","Infrastructure Application","Systems / Saas / Sales"]
    },
    "irene": {
      logos:[
        {image: "10gen", alt: "10 Gen", grid: 3},
        {image: "rti", alt: "RTI", grid: 2},
        {image: "infusion", alt: "IP Infusion", grid: 3},
        {image: "ingres", alt: "Ingres", grid: 3}
      ],
      bigpic: "Irene_Home_IMG-0818.png",
      name: "Irene Murphy",
      jobs: ["Specializing in","Software / Internet","Cleantech / Saas"]
    },
    "brynne":  {
      logos:[
        {image: "", alt: ""},
        {image: "", alt: ""},
        {image: "", alt: ""},
        {image: "", alt: ""}
      ],
      bigpic: "Brynne_HomePage_IMG-1416.png",
      name: "Brynne Pogoncheff",
      jobs: ["Vantage Team Coordinator"]
    },
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
    
    getTemplate: function(rel) {
      var t = {};
      $.extend(t, defaultImages);
      t[rel] = t[rel].replace(/\.png/,"-hover.png");
      $.extend(t, this.getMapping(rel))
      return t;
    },
    
    getMapping : function (rel) {
      return mapping[rel];
    }
  }
  
}();

$(function(){
  
  // for(var i = 0, len = 10; i < len; i++) {
  //     $("#tvTemplate" ).tmpl({test: i}).appendTo("#left-content .ct");
  //   }
  
  $("a.nav-bottom-vantage").click(function(e){
    e.preventDefault();
    if(tv) {
      tv.goTo(1)
    }
  });
  
  var tv, mission, deck;
  if($('#team_vantage').length) { 
    //tv = $('#team_vantage').slidedeck({ hideSpines: true, speed: 1000});
  }
  
  if($('#team_mission').length) {
    mission = $('#team_mission').slidedeck({ hideSpines: true, keys: false, touch: false, cycle: true, speed: 1000, transition: "easeInBounce" });
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
  
  $(".mini-shot").live('hover',function(e){
    e.preventDefault();
    $(this).find("img").toggleClass("mini-shot-light");
  });
  
  $(".mini-shot").live('click', function(e){
    e.preventDefault();
    var rel = $(this).find("img").attr("rel");
    if(rel) {
      var t = Vantage.utils.getTemplate(rel);
      // stamp out a template for the name
      // of course the exception is the home page and the secretary
      if(rel != 'brynne') {
        $("dd#home").fadeOut('slow');
        $("#other_slides").fadeOut('slow', function() {
          $(this).html("");
          $("#tvTemplate").tmpl(t).appendTo($(this));
          $(".mini_logos").children(".grid_3:last").addClass("omega");
          $(".mini_logos").children(".grid_3:first").addClass("alpha")
          $(this).fadeIn('slow');
        });
      }
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
