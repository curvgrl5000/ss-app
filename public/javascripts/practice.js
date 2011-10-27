if(!Vantage) {
  var Vantage = {};
}

Vantage.practice = function () { 

var keys = [
  {name: "internet", value: 1},
  {name: "software-services", value: 2},
  {name: "mobile-wireless", value: 3},
  {name: "clean-tech", value: 4},
  {name: "client-portfolio", value: 5}
]

var PORTFOLIO_COLUMNS = 5;
var ROWS = 3;
var COLS = 4;

var assets = [
  {company: "10GEN", name: "ten_gen", categories: [5]},
  {company: "ADCHEMY", name: "adchemy", categories: [5]},
  {company: "AGILIANCE", name: "agiliance", categories: [5]},
  {company: "AMITIVE", name: "amitive", categories: [5]},
  {company: "ANCHOR INTELLIGENCE", name: "anchor_intelligence", categories: [5]},
  {company: "ANNOUNCE MEDIA", name: "announce_media", categories: [5]},
  {company: "AOL", name: "aol", categories: [1,5]},
  {company: "APPTERA", name: "aptera", categories: [5]},
  {company: "BEA", name: "bea", categories: [5]},
  {company: "BETFAIR", name: "betfair", categories: [5]},
  {company: "BLOOM ENERGY", name: "bloom_energy", categories: [5]},
  {company: "BLUEROADS", name: "blue_roads", categories: [5]},
  {company: "BOOMI", name: "boomi", categories: [5]},
  {company: "CAKE FINANCIAL", name: "cake", categories: [5]},
  {company: "CLICKFORENSICS", name: "click_forensics", categories: [5]},
  {company: "COPAN", name: "copan", categories: [5]},
  {company: "CORNERSTONE ON-DEMAND", name: "corner_stone", categories: [5]}, 
  {company: "COURSESMART", name: "course_mart", categories: [5]},
  {company: "CRITEO", name: "criteo", categories: [5]},
  {company: "CROWDCAST", name: "crowdcast", categories: [5]},
  {company: "DAINTREE NETWORKS", name: "daintree", categories: [5]},
  {company: "DAPTIV", name: "daptiv", categories: [5]},
  {company: "EBATES", name: "ebates", categories: [5]},
  {company: "EMSENSE", name: "emsense", categories: [5]},
  {company: "EVERYONE.NET", name: "everyone", categories: [5]},
  {company: "FACETIME", name: "facetime", categories: [5]},
  {company: "FANSNAP", name: "fansnap", categories: [5]},
  {company: "FIRE EYE", name: "fireeye", categories: [5]},
  {company: "FUNAMBOL", name: "funambol", categories: [5]},
  {company: "GENIUS.COM", name: "genius", categories: [5]},
  {company: "GET SATISFACTION", name: "get_satisfaction", categories: [1,5]},
  {company: "GIGAOM", name: "gigaom", categories: [5]},
  {company: "GOOGLE", name: "google", categories: [1,5]},
  {company: "GREENROAD", name: "green_road", categories: [5]},
  {company: "GUARDIAN EDGE", name: "guardian_edge", categories: [5]},
  {company: "HELPSTREAM", name: "helpstream", categories: [5]},
  {company: "HOST ANALYTICS", name: "host_analytics", categories: [5]},
  {company: "HUMAN CONCEPTS", name: "human_concepts", categories: [5]},
  {company: "INFINIAN", name: "infinian", categories: [5]},
  {company: "INFOBLOX", name: "infoblox", categories: [5]},
  {company: "INIGRAL", name: "inigral", categories: [5]},
  {company: "INGRES", name: "ingres", categories: [5]},
  {company: "IP INFUSION", name: "IP_infusion", categories: [5]},
  {company: "KABIRA TECHNOLOGIES", name: "kabira", categories: [5]},
  {company: "KOMLI", name: "komli", categories: [5]},
  {company: "LIKE.COM", name: "like", categories: [5]},
  {company: "LIMELIFE", name: "limelife", categories: [5]},
  {company: "LOOMIA", name: "loomia", categories: [5]},
  {company: "LYNDA.COM", name: "lynda", categories: [5]},
  {company: "MARKLOGIC", name: "mark_logic", categories: [5]},
  {company: "MARKMONITOR", name: "mark_monitor", categories: [5]},
  {company: "MEEZ", name: "meez", categories: [5]},
  {company: "MERCED SYSTEMS", name: "merced_systems", categories: [5]},
  {company: "METACAFE", name: "meta_cafe", categories: [5]},
  {company: "MICROSOFT", name: "microsoft", categories: [5]},
  {company: "M!NDFLASH", name: "mindflash", categories: [5]},
  {company: "MOKAFIVE", name: "mokafive", categories: [5]},
  {company: "MSN", name: "msn", categories: [5]},
  {company: "NEARBY NOW", name: "nearby_now", categories: [5]},
  {company: "NEOSCALE", name: "neoscale", categories: [5]},
  {company: "NETLI", name: "netli", categories: [5]},
  {company: "NIKU", name: "niku", categories: [5]},
  {company: "ONVANTAGE", name: "ON_vantage", categories: [5]},
  {company: "ORACLE", name: "oracle", categories: [5]},
  {company: "PHOENIX TECHNOLOGIES", name: "phoenix", categories: [5]}, 
  {company: "PINC SOLUTIONS", name: "pinc", categories: [5]},
  {company: "PLUM", name: "plum", categories: [5]},        
  {company: "PROXIMIC", name: "proximic", categories: [5]},
  {company: "PSS ATLAS", name: "PSS_atlas", categories: [5]},
  {company: "PUBMATIC", name: "pubmatic", categories: [5]},
  {company: "QUANTIVO", name: "quantivo", categories: [5]},
  {company: "RAZOO", name: "razoo", categories: [1,5]},
  {company: "REALNETWORKS", name: "real_networks", categories: [1,5]},
  {company: "REPLAY SOLUTIONS", name: "replay", categories: [1,5]},
  {company: "RETREVO", name: "retrovo", categories: [5]},
  {company: "RHAPSODY NETWORKS", name: "rhapsody", categories: [5]},
  {company: "RINGCUBE", name: "ringcube", categories: [5]},
  {company: "RTI", name: "RTI", categories: [5]},
  {company: "SAYNOW", name: "saynow", categories: [5]},
  {company: "SCANCAFE", name: "scancafe", categories: [5]},
  {company: "SKYBOX SECURITY", name: "skybox", categories: [5]},
  {company: "SNAP SHOTS", name: "snapshots", categories: [5]},
  {company: "SNAPVINE", name: "snapvine", categories: [5]},
  {company: "SOCIALTEXT", name: "socialtext", categories: [1,5]},
  {company: "SONGKICK", name: "songkick", categories: [1,5]},
  {company: "SPLUNK", name: "splunk", categories: [5]},
  {company: "SPRINGCM", name: "springCM", categories: [5]},
  {company: "STREETLINE", name: "streetline", categories: [5]},
  {company: "SUPPORTSOFT", name: "supportsoft", categories: [5]},
  {company: "SYMANTEC", name: "symantec", categories: [5]},
  {company: "TAGGED", name: "tagged", categories: [5]},
  {company: "TELEPHIA", name: "telephia", categories: [5]},
  {company: "TEROS", name: "teros", categories: [5]},
  {company: "TOPSY", name: "topsy", categories: [1,5]},
  {company: "TOTAL DEFENSE", name: "total_defense", categories: [5]},
  {company: "TURN", name: "turn", categories: [5]},
  {company: "UNTANGLE", name: "untangle", categories: [5]},
  {company: "VERIX", name: "verix", categories: [5]},
  {company: "VOLOMEDIA", name: "volomedia", categories: [5]},
  {company: "WAZAP!", name: "wazap", categories: [5]},
  {company: "WEATHERBILL", name: "weatherbill", categories: [5]},
  {company: "WEBROOT", name: "webroot", categories: [5]},
  {company: "WHITE PAGES", name: "whitepages", categories: [5]},
  {company: "WIDE ORBIT", name: "wide_orbit", categories: [5]},
  {company: "WS O2", name: "WSO2", categories: [5]},
  {company: "YAHOO!", name: "yahoo", categories: [1,5]},
  {company: "YOLA", name: "yola", categories: [5]},
  {company: "ZEND", name: "zend", categories: [5]},
  {company: "ZONELABS", name: "zone_labs", categories: [5]},
  {company: "ZYNGA", name: "zynga", categories: [1,5]}
];

// return some functions that do things like sort, filter, etc. on these things.
return {
  
  getKeys : function () {
    return keys;
  },
  
  getAssets : function() {
    return assets;
  },
  
  filterByCategory : function(category) {
    return _.filter(assets, function(asset){
      return _.include(asset.categories, category);
    });
  },    
  
  getNumCompaniesPerColumn : function () {
    return Math.ceil(assets.length / PORTFOLIO_COLUMNS);
  },
  
  // look inside the assets for companies with the right category, and get that from start up to max
  getCompanies : function (category, start, max) {
    var companies = this.filterByCategory(category);
    if(start+max > companies.length) {
      console.log("we are asking for too many companies here ", start, max, companies.length);
    }
    return companies.splice(start, max);
  }
}
}();

(function ($) {

  $.renderClientPortfolio = function () {
    var max = Vantage.practice.getNumCompaniesPerColumn(); // we know how many companies we want per column now... 
    var clients = $(".clients", "#logo_content");
    _.each(clients, function(client, idx){
      var sublist = Vantage.practice.getCompanies(5, max*(idx), max);
      _.each(sublist, function(list){
        $("<p>",{
          text: list.company
        }).appendTo($(client));
      });
    });
  } 
  
  // any company that gets the category == 1 will be rendered here. 
  // they can be randomly shown or alphabetical... or as a luxury, in a user determined ordering...
  $.renderClientLogos = function(id, category, ordering, page) {
    var setup = (ordering)? ordering : 'alphabetical';
    var curr_page = (page)? page : 1;
    var ROWS = 3;
    var COLS = 4;
    var internet = Vantage.practice.filterByCategory(category);
    for(var i = 0, len = ROWS; i < len; i++) {
      var logos = internet.splice(0,COLS);
      var blanks = COLS - logos.length;
      _.each(logos, function(logo,idx){
        var klass = logo.name;
        var margin = (!idx)? "alpha" : "";
        if(!margin){
          margin = (idx == 3)? "omega" : "";  
        }
        $("#logoTemplate").tmpl({klass: klass, margin: margin, href: "#"+logo.name, title: logo.name, name: logo.company}).appendTo("#"+id);
         if(idx == 3) {
           $("<div>",{
              "class": "spacer"
           }).appendTo("#"+id);
         }
      });
      if(blanks) {
        for(var x = 0, xlen = blanks; x < xlen; x++) {
          var margin = (!x && blanks == COLS)? "alpha" : null;
          if(!margin){
            margin = (x == (xlen-1))? "omega" : "";  
          }
          $("#logoTemplate").tmpl({klass: "", margin: margin, href: "#", title: "", name: ""}).appendTo("#"+id);
          if(margin == "omega") {
             $("<div>",{
                "class": "spacer"
             }).appendTo("#"+id);
          }
        }
      }
    }
  }
})(jQuery);

$(function(){
  if($("#tabs")[0]) {
    $("#tabs").tabs();
    var keys = Vantage.practice.getKeys();
    _.each(keys, function(k){
      if(k.name != "client-portfolio") {
        $.renderClientLogos(k.name, k.value);
      } else {
        $.renderClientPortfolio(); 
      }
    });
  } 
  $('#tabs').bind('tabsselect', function(event, ui) {
  });
}); 
