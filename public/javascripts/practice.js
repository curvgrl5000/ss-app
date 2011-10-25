if(!Vantage) {
  var Vantage = {};
}

Vantage.practice = function () { 

var keys = {
  "internet": 1,
  "software": 2,
  "mobile": 3,
  "cleantech": 4,
  "clients": 5
}

var assets = [
  {company: "10GEN", logo: "10gen.png", categories: [5]},
  {company: "ADCHEMY", logo: "adchemy.png", categories: [5]},
  {company: "AGILIANCE", logo: "agiliance", categories: [5]},
  {company: "AMITIVE", logo: "amitive.png", categories: [5]},
  {company: "ANCHOR INTELLIGENCE", logo: "anchor_intelligence.png", categories: [5]},
  {company: "ANNOUNCE MEDIA", logo: "announce_media.png", categories: [5]},
  {company: "AOL", logo: "aol.png", categories: [5]},
  {company: "APPTERA", logo: "aptera.png", categories: [5]},
  {company: "BEA", logo: "bea.png", categories: [5]},
  {company: "BETFAIR", logo: "betfair.png", categories: [5]},
  {company: "BLOOM ENERGY", logo: "bloom_energy.png", categories: [5]},
  {company: "BLUEROADS", logo: "blue_roads.png", categories: [5]},
  {company: "BOOMI", logo: "boomi.png", categories: [5]},
  {company: "CAKE FINANCIAL", logo: "cake.png", categories: [5]},
  {company: "CLICKFORENSICS", logo: "click_forensics.png", categories: [5]},
  {company: "COPAN", logo: "copan.png", categories: [5]},
  {company: "CORNERSTONE ON-DEMAND", logo: "corner_stone.png", categories: [5]}, 
  {company: "COURSESMART", logo: "course_mart.png", categories: [5]},
  {company: "CRITEO", logo: "criteo.png", categories: [5]},
  {company: "CROWDCAST", logo: "crowdcast.png", categories: [5]},
  {company: "DAINTREE NETWORKS", logo: "daintree.png", categories: [5]},
  {company: "DAPTIV", logo: "daptiv.png", categories: [5]},
  {company: "EBATES", logo: "ebates.png", categories: [5]},
  {company: "EMSENSE", logo: "emsense.png", categories: [5]},
  {company: "EVERYONE.NET", logo: "everyone.png", categories: [5]},
  {company: "FACETIME", logo: "facetime.png", categories: [5]},
  {company: "FANSNAP", logo: "fansnap.png", categories: [5]},
  {company: "FIRE EYE", logo: "fireeye.png", categories: [5]},
  {company: "FUNAMBOL", logo: "funambol.png", categories: [5]},
  {company: "GENIUS.COM", logo: "genius.png", categories: [5]},
  {company: "GET SATISFACTION", logo: "get_satisfaction.png", categories: [5]},
  {company: "GIGAOM", logo: "gigaom.png", categories: [5]},
  {company: "GOOGLE", logo: "google.png", categories: [5]},
  {company: "GREENROAD", logo: "green_road.png", categories: [5]},
  {company: "GUARDIAN EDGE", logo: "guardian_edge.png", categories: [5]},
  {company: "HELPSTREAM", logo: "helpstream.png", categories: [5]},
  {company: "HOST ANALYTICS", logo: "host_analytics.png", categories: [5]},
  {company: "HUMAN CONCEPTS", logo: "human_concepts.png", categories: [5]},
  {company: "INFINIAN", logo: "infinian.png", categories: [5]},
  {company: "INFOBLOX", logo: "infoblox.png", categories: [5]},
  {company: "INIGRAL", logo: "inigral.png", categories: [5]},
  {company: "INGRES", logo: "ingres.png", categories: [5]},
  {company: "IP INFUSION", logo: "IP_infusion.png", categories: [5]},
  {company: "KABIRA TECHNOLOGIES", logo: "kabira.png", categories: [5]},
  {company: "KOMLI", logo: "komli.png", categories: [5]},
  {company: "LIKE.COM", logo: "like.png", categories: [5]},
  {company: "LIMELIFE", logo: "limelife.png", categories: [5]},
  {company: "LOOMIA", logo: "loomia.png", categories: [5]},
  {company: "LYNDA.COM", logo: "lynda.png", categories: [5]},
  {company: "MARKLOGIC", logo: "mark_logic.png", categories: [5]},
  {company: "MARKMONITOR", logo: "mark_monitor.png", categories: [5]},
  {company: "MEEZ", logo: "meez.png", categories: [5]},
  {company: "MERCED SYSTEMS", logo: "merced_systems.png", categories: [5]},
  {company: "METACAFE", logo: "meta_cafe.png", categories: [5]},
  {company: "MICROSOFT", logo: "microsoft.png", categories: [5]},
  {company: "M!NDFLASH", logo: "mindflash.png", categories: [5]},
  {company: "MOKAFIVE", logo: "mokafive.png", categories: [5]},
  {company: "MSN", logo: "msn.png", categories: [5]},
  {company: "NEARBY NOW", logo: "nearby_now.png", categories: [5]},
  {company: "NEOSCALE", logo: "neoscale.png", categories: [5]},
  {company: "NETLI", logo: "netli.png", categories: [5]},
  {company: "NIKU", logo: "niku.png", categories: [5]},
  {company: "ONVANTAGE", logo: "ON_vantage.png", categories: [5]},
  {company: "ORACLE", logo: "oracle.png", categories: [5]},
  {company: "PHOENIX TECHNOLOGIES", logo: "phoenix.png", categories: [5]}, 
  {company: "PINC SOLUTIONS", logo: "pinc.png", categories: [5]},
  {company: "PLUM", logo: "plum.png", categories: [5]},        
  {company: "PROXIMIC", logo: "proximic.png", categories: [5]},
  {company: "PSS ATLAS", logo: "PSS_atlas.png", categories: [5]},
  {company: "PUBMATIC", logo: "pubmatic.png", categories: [5]},
  {company: "QUANTIVO", logo: "quantivo.png", categories: [5]},
  {company: "RAZOO", logo: "razoo.png", categories: [5]},
  {company: "REALNETWORKS", logo: "real_networks.png", categories: [5]},
  {company: "REPLAY SOLUTIONS", logo: "replay.png", categories: [5]},
  {company: "RETREVO", logo: "retrovo.png", categories: [5]},
  {company: "RHAPSODY NETWORKS", logo: "rhapsody.png", categories: [5]},
  {company: "RINGCUBE", logo: "ringcube.png", categories: [5]},
  {company: "RTI", logo: "RTI.png", categories: [5]},
  {company: "SAYNOW", logo: "saynow.png", categories: [5]},
  {company: "SCANCAFE", logo: "scancafe.png", categories: [5]},
  {company: "SKYBOX SECURITY", logo: "skybox.png", categories: [5]},
  {company: "SNAP SHOTS", logo: "snapshots.png", categories: [5]},
  {company: "SNAPVINE", logo: "snapvine.png", categories: [5]},
  {company: "SOCIALTEXT", logo: "socialtext.png", categories: [5]},
  {company: "SONGKICK", logo: "songkick.png", categories: [5]},
  {company: "SPLUNK", logo: "splunk.png", categories: [5]},
  {company: "SPRINGCM", logo: "springCM.png", categories: [5]},
  {company: "STREETLINE", logo: "streetline.png", categories: [5]},
  {company: "SUPPORTSOFT", logo: "supportsoft.png", categories: [5]},
  {company: "SYMANTEC", logo: "symantec.png", categories: [5]},
  {company: "TAGGED", logo: "tagged.png", categories: [5]},
  {company: "TELEPHIA", logo: "telephia.png", categories: [5]},
  {company: "TEROS", logo: "teros.png", categories: [5]},
  {company: "TOPSY", logo: "topsy.png", categories: [5]},
  {company: "TOTAL DEFENSE", logo: "total_defense.png", categories: [5]},
  {company: "TURN", logo: "turn.png", categories: [5]},
  {company: "UNTANGLE", logo: "untangle.png", categories: [5]},
  {company: "VERIX", logo: "verix.png", categories: [5]},
  {company: "VOLOMEDIA", logo: "volomedia.png", categories: [5]},
  {company: "WAZAP!", logo: "wazap.png", categories: [5]},
  {company: "WEATHERBILL", logo: "weatherbill.png", categories: [5]},
  {company: "WEBROOT", logo: "webroot.png", categories: [5]},
  {company: "WHITE PAGES", logo: "whitepages.png", categories: [5]},
  {company: "WIDE ORBIT", logo: "wide_orbit.png", categories: [5]},
  {company: "WS O2", logo: "WSO2.png", categories: [5]},
  {company: "YAHOO!", logo: "yahoo.png", categories: [5]},
  {company: "YOLA", logo: "yola.png", categories: [5]},
  {company: "ZEND", logo: "zend.png", categories: [5]},
  {company: "ZONELABS", logo: "zone_labs.png", categories: [5]},
  {company: "ZYNGA", logo: "zynga.png", categories: [5]}
];

// return some functions that do things like sort, filter, etc. on these things.
return {
  
  getAssets : function() {
    return assets;
  },
  
  filterByCategory : function(category) {
    _.filter(assets, function(asset){
       return _.include(asset.categories, category);
    });
  }
  
}
}(); 
