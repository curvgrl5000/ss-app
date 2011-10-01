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
  
  var tv_slides = ["home", "april", "tom","may","mark","julie","rich","gene","audrey","steve","irene","brynne"];
  
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
      jobs: ["Specializing in Internet","Software & Services","Mobile / Wireless"]
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
      jobs: ["Specializing in Internet","Software & Services","Mobile / Wireless"]
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
      jobs: ["Specializing in Internet","Software & Services"]
    },
    "mark": {
      logos:[
        {image: "zynga", alt: "Zynga", grid: 3},
        {image: "tagged", alt: "Tagged", grid: 3},
        {image: "songkick", alt: "SongKick", grid: 2},
        {image: "turn", alt: "Turn", grid: 3}
      ],
      bigpic: "Mark_PersonalPage_IMG-1858.png",
      name: "Mark Hubbell",
      jobs: ["Specializing in Internet","Software & Services","Mobile / Wireless"]
    },
    "julie": {
      logos:[ 
        {image: "topsy", alt: "Topsy", grid: 3},
        {image: "zynga", alt: "Zynga", grid: 2},
        {image: "like", alt: "Like", grid: 3},
        {image: "adchemy", alt: "Adchemy", grid: 3}

      ],
      bigpic: "Julie_HomePage_IMG-0954.png",
      name: "Julie Locke",
      jobs: ["Specializing in Internet","Software & Services","Mobile / Wireless"]
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
      jobs: ["Specializing in Internet","Software & Services"] 
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
      jobs: ["Specializing in Internet","Software & Services"]
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
      jobs: ["Specializing in Internet","Software & Services", "Mobile / Wireless"]
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
      jobs: ["Specializing in Internet","Software & Services",]
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
      jobs: ["Specializing in Internet","Software & Services","Mobile / Wireless","Cleantech"]
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
  var current_TVSlide = 'home';
  
  return {
    
    setCurrentDeck : function(deck){
      current_deck = deck;
    },
    
    getCurrentDeck : function() {
      return decks[current_deck-1];
    },
    
    setCurrentTVSlide : function(key) {
      current_TVSlide = key;
    },
    
    getCurrentTVSlide : function() {
      return current_TVSlide;
    },
    
    getNextTVSlide : function() {
      var current = current_TVSlide;
      var idx = $.inArray(current_TVSlide, tv_slides);
      var slide = (!tv_slides[idx+1])? tv_slides[0] : tv_slides[idx+1];
      current_TVSlide = slide;
      return slide;
    },
    
    getPrevTVSlide : function() {
      var current = current_TVSlide;
      var idx = $.inArray(current_TVSlide, tv_slides);
      var slide = (!tv_slides[idx-1])? tv_slides[tv_slides.length-1] : tv_slides[idx-1];
      current_TVSlide = slide;
      return slide;
    }, 
    
    getTemplate: function(rel) {
      current_TVSlide = rel;
      var t = {};
      $.extend(t, defaultImages);
      t[rel] = t[rel].replace(/\.png/,"-hover.png");
      $.extend(t, this.getMapping(rel));
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
      if(slide == 1) {
        $("#other_slides").fadeOut('slow', function() {
          $(this).empty();
          $("dd#home").fadeIn('slow');
          Vantage.utils.setCurrentTVSlide('home');                
        });
      }
      Vantage.utils.setCurrentDeck(slide);
    });
  } 
  
  $(".close-button").live('click', function(){
    $("#other_slides").fadeOut('slow', function() {
      $(this).empty();
      $("dd#home").fadeIn('slow');
      Vantage.utils.setCurrentTVSlide('home');                
    });
  });
  
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
    if(Vantage.utils.getCurrentTVSlide() == 'home') {
      $("dd#home").fadeOut('slow');  
      var rel = $(this).find("img").attr("rel");
      if(rel) {
        var t = Vantage.utils.getTemplate(rel);
        switch_slide(rel);
      }
    } else {
      var rel = $(this).find("img").attr("rel");
      if(rel) {
        var t = Vantage.utils.getTemplate(rel);
        switch_slide(rel);
      }
    }
  });
  
  $("#outer-slidedeck_nav .right .next").click(function() {
    var currentDeck = Vantage.utils.getCurrentDeck();
    if(currentDeck == "#team_vantage") {
      var rel = Vantage.utils.getNextTVSlide();
      if(rel == 'home') {
        $("#other_slides").fadeOut('slow', function() {
          $(this).empty();
          $("dd#home").fadeIn();
        });
      } else {
        if($("dd#home").is(":visible")) {
          $("dd#home").fadeOut('slow', function(){
            switch_slide(rel);
          });
        } else { 
          switch_slide(rel);
        }
      }                
    } else if (currentDeck) {
      $(currentDeck).slidedeck().next();
    }
  });
  
  function switch_slide(rel) {
    $("#other_slides").fadeOut('fast', function() {
      var t = Vantage.utils.getTemplate(rel); 
      $(this).empty(); 
      if(rel == 'brynne') {
        $("#brynneTemplate").tmpl(t).appendTo("#other_slides");
      } else {
        $("#tvTemplate").tmpl(t).appendTo("#other_slides");
        $(".mini_logos").children(".grid_3:last").addClass("omega");
        $(".mini_logos").children(".grid_3:first").addClass("alpha")
      }
      $(this).fadeIn('slow');
    });
  } 
     
  $("#outer-slidedeck_nav .right .prev").click(function(e){
     var currentDeck = Vantage.utils.getCurrentDeck();
      if(currentDeck == "#team_vantage") {
        var rel = Vantage.utils.getPrevTVSlide();
        if(rel == 'home') {
          $("#other_slides").fadeOut('slow', function() {
            $(this).empty();
            $("dd#home").fadeIn();
          });
        } else {
          if($("dd#home").is(":visible")) {
            $("dd#home").fadeOut('slow', function(){
              switch_slide(rel);
            });
          } else { 
            switch_slide(rel);
          }
        }                
      } else if (currentDeck) {
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
           startAngle: 325,
           diameter: 155,
           showDataLabels: false
         }
       }
     }
   );
   
   var plot2 = jQuery.jqplot ('chart_2', [[['Repeat Business', 95],['other', 5]]], 
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
            startAngle: 325,
            diameter: 155,
            showDataLabels: false
          }
        }
      }
    );
    
    var plot3 = jQuery.jqplot ('chart_3',[[['High Growth Client', 94], ['Other', 6]]], 
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
             startAngle: 325,
             diameter: 155,
             showDataLabels: false
           }
         }
       }
     );
});
