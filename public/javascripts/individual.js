if(!Vantage) {
  var Vantage = {};
}

Vantage.individual = function () {
  var consultants = {
    "mark": [
      {
        "company": "Komli",
        "sector": "Consumer / Internet",
        "position": "COO "
      },
      {
        "company": "Limelife",
        "sector": "Consumer / Internet and Mobile / Wireless",
        "position": "COO / SVP Product"
      },
      {
        "company": "Emsense",
        "sector": "Consumer / Internet and Enterprise / SaaS",
        "position": "CFO"
      },
      {
        "company": "Tagged",
        "sector": "Consumer / Internet",
        "position": "Chief Customer Officer"
      },
      {
        "company": "Turn",
        "sector": "Consumer / Internet",
        "position": "Chief Scientist"
      },
      {
        "company": "Betfair",
        "sector": "Consumer / Internet",
        "position": "CRO"
      },
      {
        "company": "Snapvine",
        "sector": "Consumer / Internet",
        "position": "CRO"
      },
      {
        "company": "Meez",
        "sector": "Consumer / Internet",
        "position": "CTO"
      },
      {
        "company": "Limelife",
        "sector": "Consumer / Internet and Mobile / Wireless",
        "position": "CTO/VP Engineering"
      },
      {
        "company": "EmSense",
        "sector": "Consumer / Internet and Enterprise / SaaS",
        "position": "Regional Vice President"
      },
      {
        "company": "Tagged",
        "sector": "Consumer / Internet",
        "position": "Senior Director of Analytics"
      },
      {
        "company": "GigaOm",
        "sector": "Consumer / Internet ",
        "position": "SVP Marketing & Product Management"
      },
      {
        "company": "Zynga",
        "sector": "Consumer / Internet",
        "position": "SVP Network Operations"
      },
      {
        "company": "EmSense",
        "sector": "Consumer / Internet and Enterprise / SaaS",
        "position": "SVP Sales & Marketing"
      },
      {
        "company": "SayNow",
        "sector": "Consumer / Internet and Mobile / Wireless",
        "position": "SVP Sales & Strategy"
      },
      {
        "company": "Wazap",
        "sector": "Consumer / Internet",
        "position": "GM/Counrtry Manager"
      },
      {
        "company": "Songkick",
        "sector": "Consumer / Internet",
        "position": "VP/GM Business Development"
      },
      {
        "company": "Anchor Intelligence",
        "sector": "Consumer / Internet and Enterprise / SaaS",
        "position": "VP Business Development"
      },
      {
        "company": "Like.com",
        "sector": "Consumer / Internet and Enterprise / SaaS",
        "position": "VP Business Development"
      },
      {
        "company": "Retrevo",
        "sector": "Consumer / Internet",
        "position": "VP Business Development"
      },
      {
        "company": "Turn",
        "sector": "Consumer / Internet",
        "position": "VP Business Development"
      },
      {
        "company": "Announce Media",
        "sector": "Enterprise / SaaS",
        "position": "VP Corporate & Business Development"
      },
      {
        "company": "Zynga",
        "sector": "Consumer / Internet",
        "position": "VP Customer Service"
      },
      {
        "company": "Cake Financial",
        "sector": "Consumer / Internet",
        "position": "VP Marketing & Strategy"
      },
      {
        "company": "Adchemy",
        "sector": "Consumer / Internet",
        "position": "VP Media"
      },
      {
        "company": "Like.com",
        "sector": "Consumer / Internet and Enterprise / SaaS",
        "position": "VP Online Marketing"
      },
      {
        "company": "Tagged",
        "sector": "Consumer / Internet",
        "position": "VP Online Marketing"
      },
      {
        "company": "EmSense",
        "sector": "Consumer / Internet and Enterprise / SaaS",
        "position": "VP Operations"
      },
      {
        "company": "Topsy",
        "sector": "Consumer / Internet",
        "position": "VP Operations"
      },
      {
        "company": "MetaCafe",
        "sector": "Consumer / Internet",
        "position": "VP Product"
      },
      {
        "company": "Snap Shots",
        "sector": "Consumer / Internet",
        "position": "VP Product"
      },
      {
        "company": "Retrevo",
        "sector": "Consumer / Internet",
        "position": "VP Product Management"
      },
      {
        "company": "Turn",
        "sector": "Consumer / Internet",
        "position": "VP Product Management"
      },
      {
        "company": "Fansnap",
        "sector": "Consumer / Internet",
        "position": "VP Products"
      },
      {
        "company": "ClickForensics",
        "sector": "Consumer / Internet and Enterprise / SaaS",
        "position": "VP Sales"
      },
      {
        "company": "Betfair",
        "sector": "Consumer / Internet",
        "position": "VP Social Media"
      },
      {
        "company": "Tagged",
        "sector": "Consumer / Internet",
        "position": "Director of Security"
      }
    ],
    "april": [
      {
        "company": "Razoo",
        "sector": "Consumer / Internet ",
        "position": "CEO"
      },
      {
        "company": "Infinian",
        "sector": "Enterprise / SaaS :: Mobile / Wireless",
        "position": "CEO"
      },
      {
        "company": "Inigral",
        "sector": "Enterprise / SaaS",
        "position": "CEO"
      },
      {
        "company": "Mindflash",
        "sector": "Consumer / Internet :: Enterprise / SaaS",
        "position": "CEO"
      },
      {
        "company": "Teleplace",
        "sector": "Enterprise / SaaS",
        "position": "CEO"
      },
      {
        "company": "Loomia",
        "sector": "Consumer / Internet",
        "position": "CEO/VP Marketing"
      },
      {
        "company": "Samasource",
        "sector": "Enterprise / SaaS",
        "position": "COO"
      },
      {
        "company": "Rhapsody Networks",
        "sector": "Enterprise / SaaS",
        "position": "CFO"
      },
      {
        "company": "CourseSmart",
        "sector": "Consumer / Internet :: Enterprise / SaaS",
        "position": "CMO"
      },
      {
        "company": "Socialtext",
        "sector": "Enterprise / SaaS",
        "position": "CMO"
      },
      {
        "company": "WideOrbit",
        "sector": "Enterprise / SaaS",
        "position": "CMO"
      },
      {
        "company": "WhitePages",
        "sector": "Consumer / Internet ",
        "position": "CTO"
      },
      {
        "company": "Criteo",
        "sector": "Consumer / Internet",
        "position": "US President"
      },
      {
        "company": "Greenroad Technology",
        "sector": "Consumer / Internet :: Mobile / Wireless",
        "position": "GM, Consumer"
      },
      {
        "company": "CourseSmart",
        "sector": "Consumer / Internet :: Enterprise / SaaS",
        "position": "SVP Business Development"
      },
      {
        "company": "WideOrbit",
        "sector": "Enterprise / SaaS",
        "position": "SVP Engineering"
      },
      {
        "company": "BlueRoads Corporation",
        "sector": "Enterprise / SaaS",
        "position": "SVP Engineering & Operations"
      },
      {
        "company": "Greenroad Technology",
        "sector": "Consumer / Internet :: Mobile / Wireless",
        "position": "SVP Marketing"
      },
      {
        "company": "BlueRoads Corporation",
        "sector": "Enterprise / SaaS",
        "position": "SVP Marketing & Sales"
      },
      {
        "company": "CourseSmart",
        "sector": "Consumer / Internet :: Enterprise / SaaS",
        "position": "SVP Products"
      },
      {
        "company": "SayNow",
        "sector": "Consumer / Internet :: Mobile / Wireless",
        "position": "SVP Sales & Strategy"
      },
      {
        "company": "Betfair",
        "sector": "Consumer / Internet",
        "position": "VP Engineering"
      },
      {
        "company": "Quantivo",
        "sector": "Enterprise / SaaS",
        "position": "VP Engineering"
      },
      {
        "company": "10gen",
        "sector": "Enterprise / SaaS",
        "position": "VP Marketing"
      },
      {
        "company": "Betfair",
        "sector": "Consumer / Internet",
        "position": "VP Marketing"
      },
      {
        "company": "Lynda.com",
        "sector": "Enterprise / SaaS",
        "position": "VP Marketing"
      },
      {
        "company": "Cake Financial",
        "sector": "Consumer / Internet",
        "position": "VP Marketing & Strategy"
      },
      {
        "company": "Fansnap",
        "sector": "Consumer / Internet",
        "position": "VP Products"
      },
      {
        "company": "Mokafive",
        "sector": "Enterprise / SaaS",
        "position": "VP Products"
      },
      {
        "company": "PubMatic",
        "sector": "Consumer / Internet :: Enterprise / SaaS",
        "position": "VP Publisher Services"
      },
      {
        "company": "ClickForensics",
        "sector": "Consumer / Internet :: Enterprise / SaaS",
        "position": "VP Sales"
      },
      {
        "company": "Loomia",
        "sector": "Consumer / Internet",
        "position": "VP Sales"
      },
      {
        "company": "Socialtext",
        "sector": "Enterprise / SaaS",
        "position": "VP Sales"
      },
      {
        "company": "Betfair",
        "sector": "Consumer / Internet",
        "position": "VP Social Media"
      },
      {
        "company": "Mokafive",
        "sector": "Enterprise / SaaS",
        "position": "VP WW Sales"
      }
    ],
    "audrey": [
      {
        "company": "Zend",
        "sector": "Enterprise / SaaS",
        "position": "CMO"
      },
      {
        "company": "Symantec",
        "sector": "Enterprise / SaaS",
        "position": "Group Product Manager Education Svcs"
      },
      {
        "company": "Symantec",
        "sector": "Enterprise / SaaS",
        "position": "SVP Consulting Services "
      },
      {
        "company": "Webroot",
        "sector": "Consumer / Internet :: Enterprise / SaaS",
        "position": "SVP Global Online"
      },
      {
        "company": "IP Infusion",
        "sector": "Enterprise / SaaS",
        "position": "SVP Global Sales & Business Dev"
      },
      {
        "company": "Untangle",
        "sector": "Enterprise / SaaS",
        "position": "SVP Online Sales & Marketing"
      },
      {
        "company": "Yahoo!",
        "sector": "Consumer / Internet",
        "position": "VP Ad Operations"
      },
      {
        "company": "Untangle",
        "sector": "Enterprise / SaaS",
        "position": "VP Business Development"
      },
      {
        "company": "Symantec",
        "sector": "Enterprise / SaaS",
        "position": "VP Channel Marketing & Sales "
      },
      {
        "company": "Yahoo!",
        "sector": "Consumer / Internet",
        "position": "VP Customer Experience"
      },
      {
        "company": "Zend",
        "sector": "Enterprise / SaaS",
        "position": "VP Global Services Ventures"
      },
      {
        "company": "Amitive",
        "sector": "Enterprise / SaaS",
        "position": "VP Marketing"
      },
      {
        "company": "Teros",
        "sector": "Enterprise / SaaS",
        "position": "VP Marketing"
      },
      {
        "company": "Untangle",
        "sector": "Enterprise / SaaS",
        "position": "VP Marketing & Product Management"
      },
      {
        "company": "Symantec",
        "sector": "Enterprise / SaaS",
        "position": "VP Product Management"
      },
      {
        "company": "Symantec",
        "sector": "Enterprise / SaaS",
        "position": "VP Product Marketing, Consulting Svcs"
      },
      {
        "company": "MarkMonitor",
        "sector": "Enterprise / SaaS",
        "position": "VP Professional Services"
      },
      {
        "company": "MarkLogic",
        "sector": "Enterprise / SaaS",
        "position": "VP Professional Services, Media Market"
      },
      {
        "company": "Yahoo!",
        "sector": "Consumer / Internet",
        "position": "VP RMX/Ad Platform"
      },
      {
        "company": "Amitive",
        "sector": "Enterprise / SaaS",
        "position": "VP Sales"
      },
      {
        "company": "Untangle",
        "sector": "Enterprise / SaaS",
        "position": "VP Sales"
      },
      {
        "company": "Zend",
        "sector": "Enterprise / SaaS",
        "position": "VP Sales"
      },
      {
        "company": "Verix",
        "sector": "Enterprise / SaaS",
        "position": "VP WW Sales"
      },
      {
        "company": "MarkMonitor",
        "sector": "Enterprise / SaaS",
        "position": "Sr Director Business Development"
      },
      {
        "company": "Symantec",
        "sector": "Enterprise / SaaS",
        "position": "Sr. Director Online Support"
      }
    ],
    "gene": [
      {
        "company": "Razoo",
        "sector": "Consumer / Internet ",
        "position": "CEO"
      },
      {
        "company": "Snapvine",
        "sector": "Consumer / Internet",
        "position": "CRO"
      },
      {
        "company": "Criteo",
        "sector": "Consumer / Internet",
        "position": "President"
      },
      {
        "company": "RealNetworks",
        "sector": "Consumer / Internet",
        "position": "GM Consumer"
      },
      {
        "company": "Symantec",
        "sector": "Enterprise / SaaS",
        "position": "Group Product Manager Education Svcs"
      },
      {
        "company": "Untangle",
        "sector": "Enterprise / SaaS",
        "position": "SVP Online Sales & Marketing"
      },
      {
        "company": "RealNetworks",
        "sector": "Consumer / Internet",
        "position": "SVP Sales & Marketing"
      },
      {
        "company": "Yahoo!",
        "sector": "Consumer / Internet",
        "position": "VP Ad Operations"
      },
      {
        "company": "Pubmatic",
        "sector": "Consumer / Internet :: Enterprise / SaaS",
        "position": "VP Business Development"
      },
      {
        "company": "Teros",
        "sector": "Enterprise / SaaS",
        "position": "VP Business Development"
      },
      {
        "company": "Turn",
        "sector": "Consumer / Internet",
        "position": "VP Business Development"
      },
      {
        "company": "Yahoo!",
        "sector": "Consumer / Internet",
        "position": "VP Customer Experience"
      },
      {
        "company": "Amitive",
        "sector": "Enterprise / SaaS",
        "position": "VP Marketing"
      },
      {
        "company": "FaceTime",
        "sector": "Enterprise / SaaS",
        "position": "VP Marketing"
      },
      {
        "company": "Adchemy",
        "sector": "Consumer / Internet",
        "position": "VP Media"
      },
      {
        "company": "Symantec",
        "sector": "Enterprise / SaaS",
        "position": "VP Product Management"
      },
      {
        "company": "Turn",
        "sector": "Consumer / Internet",
        "position": "VP Product Management"
      },
      {
        "company": "BEA",
        "sector": "Enterprise / SaaS",
        "position": "VP Product Marketing"
      },
      {
        "company": "Symantec",
        "sector": "Enterprise / SaaS",
        "position": "VP Product Marketing, Consulting Svcs"
      },
      {
        "company": "GuardianEdge",
        "sector": "Enterprise / SaaS",
        "position": "VP Products"
      },
      {
        "company": "MarkMonitor",
        "sector": "Enterprise / SaaS",
        "position": "VP Professional Services"
      },
      {
        "company": "MarkLogic",
        "sector": "Enterprise / SaaS",
        "position": "VP Professional Services, Media Market"
      },
      {
        "company": "Zone Labs",
        "sector": "Consumer / Internet :: Enterprise / SaaS",
        "position": "Head of Professional Services"
      },
      {
        "company": "PubMatic",
        "sector": "Consumer / Internet :: Enterprise / SaaS",
        "position": "VP Publisher Services"
      },
      {
        "company": "Yahoo!",
        "sector": "Consumer / Internet",
        "position": "VP RMX/Ad Platform"
      },
      {
        "company": "Amitive",
        "sector": "Enterprise / SaaS",
        "position": "VP Sales"
      },
      {
        "company": "Teros",
        "sector": "Enterprise / SaaS",
        "position": "VP Sales"
      },
      {
        "company": "Zone Labs",
        "sector": "Consumer / Internet :: Enterprise / SaaS",
        "position": "VP Sales"
      },
      {
        "company": "PSS Atlas",
        "sector": "Enterprise / SaaS",
        "position": "VP Strategic Sales"
      },
      {
        "company": "Tagged",
        "sector": "Consumer / Internet",
        "position": "Sr Director of Analytics"
      },
      {
        "company": "MarkMonitor",
        "sector": "Enterprise / SaaS",
        "position": "Sr Director Business Development"
      },
      {
        "company": "Symantec",
        "sector": "Enterprise / SaaS",
        "position": "Sr. Director Online Support"
      },
      {
        "company": "Human Concepts",
        "sector": "Enterprise / SaaS",
        "position": "Director of Product Marketing"
      },
      {
        "company": "Tagged",
        "sector": "Consumer / Internet",
        "position": "Director of Security"
      },
      {
        "company": "Untangle",
        "sector": "Enterprise / SaaS",
        "position": "Director Product Management"
      }
    ],
    "irene": [
      {
        "company": "Tablus",
        "sector": "Enterprise / SaaS",
        "position": "Board Member"
      },
      {
        "company": "SupportSoft",
        "sector": "Enterprise / SaaS",
        "position": "Board Member"
      },
      {
        "company": "Emsense",
        "sector": "Consumer / Internet :: Enterprise / SaaS",
        "position": "CFO"
      },
      {
        "company": "Socialtext",
        "sector": "Enterprise / SaaS",
        "position": "CMO"
      },
      {
        "company": "Niku",
        "sector": "Enterprise / SaaS",
        "position": "EVP WW Sales"
      },
      {
        "company": "CourseSmart",
        "sector": "Consumer / Internet :: Enterprise / SaaS",
        "position": "SVP Business Development"
      },
      {
        "company": "IP Infusion",
        "sector": "Enterprise / SaaS",
        "position": "SVP Global Sales & Business Dev"
      },
      {
        "company": "Apptera",
        "sector": "Enterprise / SaaS :: Mobile / Wireless",
        "position": "SVP Sales"
      },
      {
        "company": "FaceTime",
        "sector": "Enterprise / SaaS",
        "position": "SVP Sales"
      },
      {
        "company": "EmSense",
        "sector": "Consumer / Internet :: Enterprise / SaaS",
        "position": "SVP Sales & Marketing"
      },
      {
        "company": "Streetline",
        "sector": "Enterprise / SaaS :: Mobile / Wireless",
        "position": "SVP Sales & Marketing"
      },
      {
        "company": "DainTree Networks",
        "sector": "Consumer / Internet :: Mobile / Wireless",
        "position": "VP Business Development"
      },
      {
        "company": "10gen",
        "sector": "Enterprise / SaaS",
        "position": "VP Marketing"
      },
      {
        "company": "CrowdCast",
        "sector": "Enterprise / SaaS",
        "position": "VP Marketing"
      },
      {
        "company": "Funambol",
        "sector": "Enterprise / SaaS :: Mobile / Wireless",
        "position": "VP Marketing"
      },
      {
        "company": "RTI",
        "sector": "Enterprise / SaaS",
        "position": "VP Marketing"
      },
      {
        "company": "EmSense",
        "sector": "Consumer / Internet :: Enterprise / SaaS",
        "position": "VP Operations"
      },
      {
        "company": "WeatherBill",
        "sector": "Enterprise / SaaS",
        "position": "VP Sales"
      },
      {
        "company": "Agiliance",
        "sector": "Enterprise / SaaS",
        "position": "VP Sales"
      },
      {
        "company": "Cornerstone OnDem::",
        "sector": "Enterprise / SaaS",
        "position": "VP Sales"
      },
      {
        "company": "Funambol",
        "sector": "Enterprise / SaaS :: Mobile / Wireless",
        "position": "VP Sales"
      },
      {
        "company": "Kabira Technologies",
        "sector": "Enterprise / SaaS",
        "position": "VP Sales"
      },
      {
        "company": "Loomia",
        "sector": "Consumer / Internet",
        "position": "VP Sales"
      },
      {
        "company": "OnVantage",
        "sector": "Enterprise / SaaS",
        "position": "VP Sales"
      },
      {
        "company": "Socialtext",
        "sector": "Enterprise / SaaS",
        "position": "VP Sales"
      },
      {
        "company": "Ingres",
        "sector": "Enterprise / SaaS",
        "position": "VP Sales, NA"
      },
      {
        "company": "FaceTime",
        "sector": "Enterprise / SaaS",
        "position": "VP WW Sales"
      },
      {
        "company": "Genius",
        "sector": "Enterprise / SaaS",
        "position": "VP WW Sales"
      },
      {
        "company": "Mokafive",
        "sector": "Enterprise / SaaS",
        "position": "VP WW Sales"
      },
      {
        "company": "Verix",
        "sector": "Enterprise / SaaS",
        "position": "VP WW Sales"
      },
      {
        "company": "Telephia",
        "sector": "Consumer / Internet :: Mobile / Wireless",
        "position": "VP/GM"
      },
      {
        "company": "EmSense",
        "sector": "Consumer / Internet :: Enterprise / SaaS",
        "position": "Regional Vice President"
      },
      {
        "company": "Ingres",
        "sector": "Enterprise / SaaS",
        "position": "Director Business Development"
      }
    ],
    "julie": [
      {
        "company": "Ebates",
        "sector": "Consumer / Internet",
        "position": "CEO"
      },
      {
        "company": "MokaFive",
        "sector": "Enterprise / SaaS",
        "position": "CEO"
      },
      {
        "company": "Proximic",
        "sector": "Consumer / Internet",
        "position": "CEO"
      },
      {
        "company": "Tagged",
        "sector": "Consumer / Internet",
        "position": "Chief Customer Officer"
      },
      {
        "company": "Zynga",
        "sector": "Consumer / Internet",
        "position": "SVP Network Operations"
      },
      {
        "company": "Zynga",
        "sector": "Consumer / Internet",
        "position": "VP Customer Service"
      },
      {
        "company": "Like.com",
        "sector": "Consumer / Internet",
        "position": "VP Finance"
      },
      {
        "company": "Adchemy",
        "sector": "Consumer / Internet",
        "position": "VP Marketing"
      },
      {
        "company": "Mokafive",
        "sector": "Enterprise / SaaS",
        "position": "VP Marketing"
      },
      {
        "company": "Total Defense",
        "sector": "Enterprise / SaaS",
        "position": "VP Online Marketing"
      },
      {
        "company": "Topsy",
        "sector": "Consumer / Internet",
        "position": "VP Operations"
      },
      {
        "company": "MetaCafe",
        "sector": "Consumer / Internet",
        "position": "VP Product"
      },
      {
        "company": "Retrevo",
        "sector": "Consumer / Internet",
        "position": "VP Product Management"
      },
    ],
    "may": [
      {
        "company": "Razoo",
        "sector": "Consumer / Internet ",
        "position": "CEO"
      },
      {
        "company": "Samasource",
        "sector": "Enterprise / SaaS",
        "position": "COO"
      },
      {
        "company": "Inflection",
        "sector": "Consumer / Internet ",
        "position": "CTO"
      },
      {
        "company": "Webroot",
        "sector": "Consumer / Internet :: Enterprise / SaaS",
        "position": "SVP Global Online"
      },
      {
        "company": "Tagged",
        "sector": "Consumer / Internet",
        "position": "VP Online Marketing"
      }
    ],
    "rich": [
      {
        "company": "Ebates",
        "sector": "Consumer / Internet",
        "position": "CEO"
      },
      {
        "company": "Mindflash",
        "sector": "Consumer / Internet :: Enterprise / SaaS",
        "position": "CEO"
      },
      {
        "company": "Mokafive",
        "sector": "Enterprise / SaaS",
        "position": "CEO"
      },
      {
        "company": "Proximic",
        "sector": "Consumer / Internet",
        "position": "CEO"
      },
      {
        "company": "VoloMedia",
        "sector": "Consumer / Internet",
        "position": "CEO"
      },
      {
        "company": "Teleplace",
        "sector": "Enterprise / SaaS",
        "position": "CEO"
      },
      {
        "company": "ScanCafe",
        "sector": "Consumer / Internet",
        "position": "CMO"
      },
      {
        "company": "CourseSmart",
        "sector": "Consumer / Internet :: Enterprise / SaaS",
        "position": "CMO"
      },
      {
        "company": "WideOrbit",
        "sector": "Enterprise / SaaS",
        "position": "CMO"
      },
      {
        "company": "Zend",
        "sector": "Enterprise / SaaS",
        "position": "CMO"
      },
      {
        "company": "Komli",
        "sector": "Consumer / Internet",
        "position": "COO "
      },
      {
        "company": "Betfair",
        "sector": "Consumer / Internet",
        "position": "CRO"
      },
      {
        "company": "RealNetworks",
        "sector": "Consumer / Internet",
        "position": "GM Consumer"
      },
      {
        "company": "Criteo",
        "sector": "Consumer / Internet",
        "position": "President"
      },
      {
        "company": "Songkick",
        "sector": "Consumer / Internet",
        "position": "VP/GM Business Development"
      },
      {
        "company": "Webroot",
        "sector": "Consumer / Internet :: Enterprise / SaaS",
        "position": "SVP Global Online"
      },
      {
        "company": "RealNetworks",
        "sector": "Consumer / Internet",
        "position": "SVP Sales & Marketing"
      },
      {
        "company": "Anchor Intelligence",
        "sector": "Consumer / Internet :: Enterprise / SaaS",
        "position": "VP Business Development"
      },
      {
        "company": "BEA",
        "sector": "Enterprise / SaaS",
        "position": "VP Business Development"
      },
      {
        "company": "FaceTime",
        "sector": "Enterprise / SaaS",
        "position": "VP Business Development"
      },
      {
        "company": "Pubmatic",
        "sector": "Consumer / Internet :: Enterprise / SaaS",
        "position": "VP Business Development"
      },
      {
        "company": "Retrevo",
        "sector": "Consumer / Internet",
        "position": "VP Business Development"
      },
      {
        "company": "Teros",
        "sector": "Enterprise / SaaS",
        "position": "VP Business Development"
      },
      {
        "company": "Announce Media",
        "sector": "Enterprise / SaaS",
        "position": "VP Corporate & Business Development"
      },
      {
        "company": "Zend",
        "sector": "Enterprise / SaaS",
        "position": "VP Global Services Ventures, Azure Capital"
      },
      {
        "company": "MarkMonitor",
        "sector": "Enterprise / SaaS",
        "position": "VP Human Resources"
      },
      {
        "company": "AOL",
        "sector": "Consumer / Internet",
        "position": "VP Interactive"
      },
      {
        "company": "Adchemy",
        "sector": "Consumer / Internet",
        "position": "VP Marketing"
      },
      {
        "company": "Betfair",
        "sector": "Consumer / Internet",
        "position": "VP Marketing"
      },
      {
        "company": "FaceTime",
        "sector": "Enterprise / SaaS",
        "position": "VP Marketing"
      },
      {
        "company": "FireEye",
        "sector": "Enterprise / SaaS",
        "position": "VP Marketing"
      },
      {
        "company": "Lynda.com",
        "sector": "Enterprise / SaaS",
        "position": "VP Marketing"
      },
      {
        "company": "Mokafive",
        "sector": "Enterprise / SaaS",
        "position": "VP Marketing"
      },
      {
        "company": "Nearby Now",
        "sector": "Consumer / Internet",
        "position": "VP Marketing"
      },
      {
        "company": "OnVantage",
        "sector": "Enterprise / SaaS",
        "position": "VP Marketing"
      },
      {
        "company": "Plum ",
        "sector": "Consumer / Internet",
        "position": "VP Marketing"
      },
      {
        "company": "RingCube",
        "sector": "Enterprise / SaaS",
        "position": "VP Marketing"
      },
      {
        "company": "Teros",
        "sector": "Enterprise / SaaS",
        "position": "VP Marketing"
      },
      {
        "company": "Untangle",
        "sector": "Enterprise / SaaS",
        "position": "VP Marketing & Product Management"
      },
      {
        "company": "Adchemy",
        "sector": "Consumer / Internet",
        "position": "VP Media"
      },
      {
        "company": "Total Defense",
        "sector": "Enterprise / SaaS",
        "position": "VP Online Marketing"
      },
      {
        "company": "Retrevo",
        "sector": "Consumer / Internet",
        "position": "VP Product Management"
      },
      {
        "company": "BEA",
        "sector": "Enterprise / SaaS",
        "position": "VP Product Marketing"
      },
      {
        "company": "Mokafive",
        "sector": "Enterprise / SaaS",
        "position": "VP Products"
      },
      {
        "company": "PubMatic",
        "sector": "Consumer / Internet :: Enterprise / SaaS",
        "position": "VP Publisher Services"
      },
      {
        "company": "NeoScale",
        "sector": "Enterprise / SaaS",
        "position": "VP Sales"
      },
      {
        "company": "Teros",
        "sector": "Enterprise / SaaS",
        "position": "VP Sales"
      },
      {
        "company": "Untangle",
        "sector": "Enterprise / SaaS",
        "position": "VP Sales"
      },
      {
        "company": "Zend",
        "sector": "Enterprise / SaaS",
        "position": "VP Sales"
      },
      {
        "company": "Zone Labs",
        "sector": "Consumer / Internet :: Enterprise / SaaS",
        "position": "VP Sales"
      },
      {
        "company": "PSS Atlas",
        "sector": "Enterprise / SaaS",
        "position": "VP Strategic Sales"
      },
      {
        "company": "Telephia",
        "sector": "Consumer / Internet :: Mobile / Wireless",
        "position": "VP/GM"
      },
      {
        "company": "Google",
        "sector": "Consumer / Internet",
        "position": "Corporate Controller"
      }
    ],
    "steve": [
      {
        "company": "Helpstream (acq'd by Innotas)",
        "sector": "Enterprise / SaaS",
        "position": "CEO"
      },
      {
        "company": "Inigral",
        "sector": "Enterprise / SaaS",
        "position": "CEO"
      },
      {
        "company": "Pubmatic",
        "sector": "Consumer / Internet and Enterprise / SaaS",
        "position": "CFO"
      },
      {
        "company": "Aria Systems",
        "sector": "Enterprise / SaaS",
        "position": "CMO"
      },
      {
        "company": "Get Satisfaction",
        "sector": "Enterprise / SaaS",
        "position": "Chief Product Officer"
      },
      {
        "company": "Oracle",
        "sector": "Enterprise / SaaS",
        "position": "SVP (GM) Enterprise 2.0"
      },
      {
        "company": "Daptiv",
        "sector": "Enterprise / SaaS",
        "position": "VP Engineering"
      },
      {
        "company": "Oracle",
        "sector": "Enterprise / SaaS",
        "position": "VP Engineering, Enterprise 2.0"
      },
      {
        "company": "Helpstream (acq'd by Innotas)",
        "sector": "Enterprise / SaaS",
        "position": "VP Marketing"
      },
      {
        "company": "Splunk",
        "sector": "Enterprise / SaaS",
        "position": "VP Marketing"
      },
      {
        "company": "Spring CM",
        "sector": "Enterprise / SaaS",
        "position": "VP Marketing"
      },
      {
        "company": "Boomi, (acq'd by Dell)",
        "sector": "Enterprise / SaaS",
        "position": "VP Sales"
      },
      {
        "company": "Ingres",
        "sector": "Enterprise / SaaS",
        "position": "VP Sales, NA"
      },
      {
        "company": "Host Analytics",
        "sector": "Enterprise / SaaS",
        "position": "VP Professional Services"
      }
    ],
    "tom": [
      {
        "company": "Inflection",
        "sector": "Consumer / Internet ",
        "position": "CTO"
      },
      {
        "company": "Meez",
        "sector": "Consumer / Internet",
        "position": "CTO"
      },
      {
        "company": "Merced Systems",
        "sector": "Enterprise / SaaS",
        "position": "CTO"
      },
      {
        "company": "WhitePages",
        "sector": "Consumer / Internet ",
        "position": "CTO"
      },
      {
        "company": "Oracle",
        "sector": "Enterprise / SaaS",
        "position": "CTO, Fusion Middleware"
      },
      {
        "company": "Limelife",
        "sector": "Consumer / Internet :: Mobile / Wireless",
        "position": "CTO/VP Engineering"
      },
      {
        "company": "Greenroad Technology",
        "sector": "Consumer / Internet :: Mobile / Wireless",
        "position": "GM"
      },
      {
        "company": "Oracle",
        "sector": "Enterprise / SaaS",
        "position": "SVP (GM) Enterprise 2.0"
      },
      {
        "company": "GigaOm",
        "sector": "Consumer / Internet ",
        "position": "SVP Marketing & Product Management"
      },
      {
        "company": "Oracle",
        "sector": "Enterprise / SaaS",
        "position": "SVP Engineering"
      },
      {
        "company": "WideOrbit",
        "sector": "Enterprise / SaaS",
        "position": "SVP Engineering"
      },
      {
        "company": "Yola",
        "sector": "Enterprise / SaaS",
        "position": "SVP Engineering"
      },
      {
        "company": "Yola",
        "sector": "Enterprise / SaaS",
        "position": "SVP Product Management"
      },
      {
        "company": "CourseSmart",
        "sector": "Consumer / Internet :: Enterprise / SaaS",
        "position": "SVP Products"
      },
      {
        "company": "Streetline",
        "sector": "Enterprise / SaaS :: Mobile / Wireless",
        "position": "VP Applications"
      },
      {
        "company": "DainTree Networks",
        "sector": "Consumer / Internet :: Mobile / Wireless",
        "position": "VP Business Development"
      },
      {
        "company": "Kabira Technologies",
        "sector": "Enterprise / SaaS",
        "position": "VP Business Development"
      },
      {
        "company": "WSO2",
        "sector": "Enterprise / SaaS",
        "position": "VP Business Development"
      },
      {
        "company": "10gen",
        "sector": "Enterprise / SaaS",
        "position": "VP Engineering"
      },
      {
        "company": "Amitive",
        "sector": "Enterprise / SaaS",
        "position": "VP Engineering"
      },
      {
        "company": "Betfair",
        "sector": "Consumer / Internet",
        "position": "VP Engineering"
      },
      {
        "company": "Oracle",
        "sector": "Enterprise / SaaS",
        "position": "VP Engineering"
      },
      {
        "company": "Phoenix Technologies",
        "sector": "Enterprise / SaaS",
        "position": "VP Engineering"
      },
      {
        "company": "PINC Solutions",
        "sector": "Enterprise / SaaS",
        "position": "VP Engineering"
      },
      {
        "company": "Quantivo",
        "sector": "Enterprise / SaaS",
        "position": "VP Engineering"
      },
      {
        "company": "WeatherBill",
        "sector": "Enterprise / SaaS",
        "position": "VP Engineering"
      },
      {
        "company": "Oracle",
        "sector": "Enterprise / SaaS",
        "position": "VP Engineering, Enterprise 2.0"
      },
      {
        "company": "MarkMonitor",
        "sector": "Enterprise / SaaS",
        "position": "VP Human Resources"
      },
      {
        "company": "Oracle",
        "sector": "Enterprise / SaaS",
        "position": "VP Quality Assurance"
      },
      {
        "company": "Replay Solutions",
        "sector": "Enterprise / SaaS",
        "position": "VP Engineering"
      },
      {
        "company": "Phoenix Technologies",
        "sector": "Enterprise / SaaS",
        "position": "Sr. Director Engineering"
      },
      {
        "company": "Oracle",
        "sector": "Enterprise / SaaS",
        "position": "Sr. Director Quality Assurance"
      },
      {
        "company": "MarkLogic",
        "sector": "Enterprise / SaaS",
        "position": "Director of Software Engineering"
      }
    ]
  }   
  
  return {
    getConsultant : function(key) {
      return consultants[key];
    }
  }
  
}();

(function($) {
  
})(jQuery);


$(function() {
  
  var list = Vantage.individual.getConsultant(document.location.pathname.replace(/\//,""));
  _.each(list, function(row){
     $("#archiveTemplate").tmpl(row).appendTo("#archives > tbody");
  });
  
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
