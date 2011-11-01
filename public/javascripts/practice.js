if(!Vantage) {
  var Vantage = {};
}

Vantage.practice = function () { 

var keys = [
  {name: "consumer-internet", value: 1},
  {name: "enterprise-saas", value: 2},
  {name: "mobile-wireless", value: 3},
  {name: "client-portfolio", value: 5}
]

var PORTFOLIO_COLUMNS = 5;
var ROWS = 3;
var COLS = 4;

var assets2 = [
  {
    "company": "10GEN",
    "name": "ten_gen",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Engineering",
        "lead": "Tom",
        "recruit": [

        ],
        "investors": "Flybridge Capital Partners, Sequoia, Union Square Ventures"
      },
      {
        "position": "VP Marketing",
        "lead": "April",
        "recruit": [
          "Irene"
        ],
        "investors": "Flybridge Capital Partners, Sequoia, Union Square Ventures"
      }
    ]
  },
  {
    "company": "ADCHEMY",
    "name": "adchemy",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "VP Marketing",
        "lead": "Rich",
        "recruit": [
          "Julie"
        ],
        "investors": "August Capital, Mayfield Fund, Sandhill Capital"
      },
      {
        "position": "VP Media",
        "lead": "Rich",
        "recruit": [
          "Mark",
          "Gene"
        ],
        "investors": "August Capital, Mayfield Fund, Sandhill Capital"
      }
    ]
  },
  {
    "company": "AGILIANCE",
    "name": "agiliance",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Sales",
        "lead": "Irene",
        "recruit": [

        ],
        "investors": "Castile Ventures, Walden International, Intel Capital, Red Rock Ventures"
      }
    ]
  },
  {
    "company": "AMITIVE",
    "name": "amitive",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Marketing",
        "lead": "Audrey",
        "recruit": [
          "Gene"
        ],
        "investors": "Logispring, CMEA Ventures"
      },
      {
        "position": "VP Sales",
        "lead": "Audrey",
        "recruit": [
          "Gene"
        ],
        "investors": "Logispring, CMEA Ventures"
      }
    ]
  },
  {
    "company": "ANCHOR INTELLIGENCE",
    "name": "anchor_intelligence",
    "categories": [
      1,
      2
    ],
    "details": [
      {
        "position": "VP Business Development",
        "lead": "Rich",
        "recruit": [
          "Mark"
        ],
        "investors": "JK&B Capital, Maples Investments, Baseline Ventures"
      }
    ]
  },
  {
    "company": "ANNOUNCE MEDIA",
    "name": "announce_media",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Corporate & Business Development",
        "lead": "Mark",
        "recruit": [
          "Mark",
          "Rich"
        ],
        "investors": "Summit Partners"
      }
    ]
  },
  {
    "company": "AOL",
    "name": "aol",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "VP Interactive",
        "lead": "Rich",
        "recruit": [
          "Carren"
        ],
        "investors": "Criterion Capital Partners"
      }
    ]
  },
  {
    "company": "APPTERA",
    "name": "aptera",
    "categories": [
      2,
      3
    ],
    "details": [
      {
        "position": "SVP Sales",
        "lead": "Irene",
        "recruit": [

        ],
        "investors": "Alloy Ventures, Lightspeed Venture Partners, Walden International"
      }
    ]
  },
  {
    "company": "BEA",
    "name": "bea",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Product Marketing",
        "lead": "Rich",
        "recruit": [
          "Gene"
        ],
        "investors": "Acquired by Oracle (NASDAQ: ORCL)"
      },
      {
        "position": "VP Business Development",
        "lead": "Rich",
        "recruit": [

        ],
        "investors": "Acquired by Oracle (NASDAQ: ORCL)"
      }
    ]
  },
  {
    "company": "BETFAIR",
    "name": "betfair",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "VP Social Media",
        "lead": "April",
        "recruit": [
          "Mark"
        ],
        "investors": "Wholly owned subsidiary of Betfair  Group (UK)"
      },
      {
        "position": "VP Engineering",
        "lead": "April",
        "recruit": [
          "Tom"
        ],
        "investors": "Wholly owned subsidiary of Betfair  Group (UK)"
      }
    ]
  },
  {
    "company": "BLOOM ENERGY",
    "name": "bloom_energy",
    "categories": [

    ],
    "details": [

    ]
  },
  {
    "company": "BLUEROADS",
    "name": "blue_roads",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "SVP Engineering & Operations",
        "lead": "April",
        "recruit": [

        ],
        "investors": "Cardinal Venture Capital, ArrowPath, El Dorado Ventures "
      },
      {
        "position": "SVP Marketing & Sales",
        "lead": "April",
        "recruit": [

        ],
        "investors": "Cardinal Venture Capital, ArrowPath, El Dorado Ventures "
      }
    ]
  },
  {
    "company": "BOOMI",
    "name": "boomi",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Sales",
        "lead": "Steve",
        "recruit": [

        ],
        "investors": "FirstMark Capital"
      }
    ]
  },
  {
    "company": "CAKE FINANCIAL",
    "name": "cake",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "VP Marketing & Strategy",
        "lead": "April",
        "recruit": [
          "Mark"
        ],
        "investors": "Alsop Louie "
      }
    ]
  },
  {
    "company": "CLICKFORENSICS",
    "name": "click_forensics",
    "categories": [
      1,
      2
    ],
    "details": [
      {
        "position": "VP Sales",
        "lead": "April",
        "recruit": [
          "Mark"
        ],
        "investors": "Austin Ventures, Shasta Ventures, Sierra Ventures"
      }
    ]
  },
  {
    "company": "COPAN",
    "name": "copan",
    "categories": [

    ],
    "details": [

    ]
  },
  {
    "company": "CORNERSTONE ONDEMAND",
    "name": "corner_stone",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Sales",
        "lead": "Irene",
        "recruit": [

        ],
        "investors": "Bay Partners, Bessemer Venture Partners"
      }
    ]
  },
  {
    "company": "COURSESMART",
    "name": "course_smart",
    "categories": [
      1,
      2
    ],
    "details": [
      {
        "position": "CMO",
        "lead": "April",
        "recruit": [
          "Rich"
        ],
        "investors": "Joint Venture"
      },
      {
        "position": "SVP Products",
        "lead": "April",
        "recruit": [
          "Tom"
        ],
        "investors": "Joint Venture"
      }
    ]
  },
  {
    "company": "CRITEO",
    "name": "criteo",
    "categories": [

    ],
    "details": [

    ]
  },
  {
    "company": "CROWDCAST",
    "name": "crowdcast",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Marketing",
        "lead": "Irene",
        "recruit": [

        ],
        "investors": "Alsop Louie Partners"
      }
    ]
  },
  {
    "company": "DAINTREE NETWORKS",
    "name": "daintree",
    "categories": [
      1,
      3
    ],
    "details": [
      {
        "position": "VP Business Development",
        "lead": "Irene",
        "recruit": [
          "Tom"
        ],
        "investors": "Jolimont Capital"
      }
    ]
  },
  {
    "company": "DAPTIV",
    "name": "daptiv",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Engineering",
        "lead": "Steve",
        "recruit": [

        ],
        "investors": "Draper Fisher Jurvetson, Bay Partners, Kennet Venture  Partners"
      }
    ]
  },
  {
    "company": "EBATES",
    "name": "ebates",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "CEO",
        "lead": "Rich",
        "recruit": [
          "Julie"
        ],
        "investors": "Foundation Capital, August Capital, Cannan Partners, Rembrandt Venture Partners"
      }
    ]
  },
  {
    "company": "EMSENSE",
    "name": "emsense",
    "categories": [
      1,
      2
    ],
    "details": [
      {
        "position": "SVP Sales & Marketing",
        "lead": "Mark",
        "recruit": [
          "Irene"
        ],
        "investors": "The Foundry Group"
      },
      {
        "position": "Regional Vice President",
        "lead": "Mark",
        "recruit": [
          "Irene"
        ],
        "investors": "The Foundry Group"
      },
      {
        "position": "CFO",
        "lead": "Mark",
        "recruit": [
          "Irene"
        ],
        "investors": "The Foundry Group"
      }
    ]
  },
  {
    "company": "EVERYONE.NET",
    "name": "everyone",
    "categories": [
      2,
      3
    ],
    "details": [
      {
        "position": "VP Engineering",
        "lead": "April",
        "recruit": [

        ],
        "investors": "El Dorado Ventures, Labrador Ventures "
      }
    ]
  },
  {
    "company": "FACETIME",
    "name": "facetime",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP WW Sales",
        "lead": "Irene",
        "recruit": [

        ],
        "investors": "Scale Ventures, Sutter Hill Ventures"
      },
      {
        "position": "VP Marketing",
        "lead": "Rich",
        "recruit": [
          "Gene"
        ],
        "investors": "Scale Ventures, Sutter Hill Ventures"
      }
    ]
  },
  {
    "company": "FANSNAP",
    "name": "fansnap",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "VP Products",
        "lead": "April",
        "recruit": [
          "Mark"
        ],
        "investors": "General Catalyst Partners, Highland Capital Partners"
      }
    ]
  },
  {
    "company": "FIREEYE",
    "name": "fireeye",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Marketing",
        "lead": "Rich",
        "recruit": [

        ],
        "investors": "Sequoia Capital, Norwest Venture Partners, JAFCO Ventures, SVB Capital, DAG Ventures, Juniper Networks"
      }
    ]
  },
  {
    "company": "FUNAMBOL",
    "name": "funambol",
    "categories": [
      2,
      3
    ],
    "details": [
      {
        "position": "VP Marketing",
        "lead": "Irene",
        "recruit": [

        ],
        "investors": "Walden International, HIG Ventures"
      },
      {
        "position": "VP Sales",
        "lead": "Irene",
        "recruit": [

        ],
        "investors": "Walden International, HIG Ventures"
      }
    ]
  },
  {
    "company": "GENIUS",
    "name": "genius",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP WW Sales",
        "lead": "Irene",
        "recruit": [

        ],
        "investors": "Accel Partners, Mohr Davidow, Walden International, Emergence Capital"
      }
    ]
  },
  {
    "company": "GET SATISFACTION",
    "name": "get_satisfaction",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Product Management",
        "lead": "Steve",
        "recruit": [

        ],
        "investors": "First Round Capital, Azure Capital Partners, O'Reilly Alphatech Ventures, SoftTech VC"
      }
    ]
  },
  {
    "company": "GIGAOM",
    "name": "gigaom",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "SVP Marketing & Product Management",
        "lead": "Tom",
        "recruit": [
          "Mark"
        ],
        "investors": "Alloy Ventures, True Ventures"
      }
    ]
  },
  {
    "company": "GOOGLE",
    "name": "google",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "Corporate Controller",
        "lead": "Rich",
        "recruit": [

        ],
        "investors": "NASDAQ: GOOG"
      }
    ]
  },
  {
    "company": "GREENROAD",
    "name": "green_road",
    "categories": [
      1,
      3
    ],
    "details": [
      {
        "position": "GM",
        "lead": "April",
        "recruit": [
          "Tom"
        ],
        "investors": "Benchmark Israel, Virgin Green Fund"
      },
      {
        "position": "SVP Marketing",
        "lead": "Dan",
        "recruit": [
          "April"
        ],
        "investors": "Benchmark Israel, Virgin Green Fund "
      }
    ]
  },
  {
    "company": "GUARDIAN EDGE",
    "name": "guardian_edge",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Products",
        "lead": "Gene",
        "recruit": [

        ],
        "investors": "Cargill Ventures, Thomvest Ventures, Altos Ventures, Cardinal Venture Capital"
      }
    ]
  },
  {
    "company": "HELPSTREAM",
    "name": "helpstream",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "CEO",
        "lead": "Steve",
        "recruit": [

        ],
        "investors": "Foundation Capital, Mohr Davidow Ventures"
      },
      {
        "position": "VP Marketing",
        "lead": "Steve",
        "recruit": [

        ],
        "investors": "Foundation Capital, Mohr Davidow Ventures"
      }
    ]
  },
  {
    "company": "HOST ANALYTICS",
    "name": "host_analytics",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Services",
        "lead": "Steve",
        "recruit": [

        ],
        "investors": "Trident Capital, ATV, Next World Capital, StarVest Partners"
      }
    ]
  },
  {
    "company": "HUMAN CONCEPTS",
    "name": "human_concepts",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "Director of Product Marketing",
        "lead": "Gene",
        "recruit": [

        ],
        "investors": "Privately held"
      }
    ]
  },
  {
    "company": "INFINIAN",
    "name": "infinian",
    "categories": [
      2,
      3
    ],
    "details": [
      {
        "position": "CEO",
        "lead": "April",
        "recruit": [

        ],
        "investors": "Self-funded"
      }
    ]
  },
  {
    "company": "INFOBLOX",
    "name": "infoblox",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "Sr. Director of Marketing Communications",
        "lead": "Julie",
        "recruit": [

        ],
        "investors": "Sequoia Capital, Lehman Brothers, Duchossois Technology Partners "
      }
    ]
  },
  {
    "company": "INIGRAL",
    "name": "inigral",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "CEO",
        "lead": "April",
        "recruit": [
          "Steve"
        ],
        "investors": "Founders Fund, Retro Ventures, Gates Foundation"
      }
    ]
  },
  {
    "company": "INGRES",
    "name": "ingres",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "Director Business Development",
        "lead": "Irene",
        "recruit": [

        ],
        "investors": "Garnett & Helfrich Capital"
      },
      {
        "position": "VP Sales, NA",
        "lead": "Irene",
        "recruit": [
          "Steve"
        ],
        "investors": "Garnett & Helfrich Capital"
      }
    ]
  },
  {
    "company": "IP INFUSION",
    "name": "IP_infusion",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "SVP Global Sales & Business Dev",
        "lead": "Audrey",
        "recruit": [
          "Irene"
        ],
        "investors": "Privately held"
      }
    ]
  },
  {
    "company": "KABIRA TECHNOLOGIES",
    "name": "kabira",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Sales",
        "lead": "Irene",
        "recruit": [

        ],
        "investors": "Acquired by Tibco Software"
      },
      {
        "position": "VP Business Development",
        "lead": "Tom",
        "recruit": [

        ],
        "investors": "Acquired by Tibco Software"
      }
    ]
  },
  {
    "company": "KOMLI",
    "name": "komli",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "COO ",
        "lead": "Rich",
        "recruit": [
          "Mark"
        ],
        "investors": "Nexus Venture Partners, Helion Venture Partners, Norwest, DFJ"
      }
    ]
  },
  {
    "company": "LIKE.COM",
    "name": "like",
    "categories": [
      1,
      2
    ],
    "details": [
      {
        "position": "VP Finance",
        "lead": "Julie",
        "recruit": [

        ],
        "investors": "Menlo Ventures, Crosslink Capital, BlueRun Ventures, Bay Partners, Leapfrog Ventures"
      },
      {
        "position": "VP Online Marketing",
        "lead": "Mark",
        "recruit": [

        ],
        "investors": "Menlo Ventures, Crosslink Capital, BlueRun Ventures, Bay Partners, Leapfrog Ventures"
      }
    ]
  },
  {
    "company": "LIMELIFE",
    "name": "limelife",
    "categories": [
      1,
      3
    ],
    "details": [
      {
        "position": "COO / SVP Product",
        "lead": "Mark ",
        "recruit": [

        ],
        "investors": "Rustic Canyon Partners, US Venture Partners, i-Hatch Ventures, Monitor Ventures"
      },
      {
        "position": "CTO/VP Engineering",
        "lead": "Mark ",
        "recruit": [
          "Mark",
          "Tom"
        ],
        "investors": "Rustic Canyon Partners, US Venture Partners, i-Hatch Ventures, Monitor Ventures"
      }
    ]
  },
  {
    "company": "LOOMIA",
    "name": "loomia",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "CEO/VP Marketing",
        "lead": "April",
        "recruit": [

        ],
        "investors": "Asset Management Company, Telefonica Capital, NBC/Peacock Capital "
      },
      {
        "position": "VP Sales",
        "lead": "April",
        "recruit": [
          "Irene"
        ],
        "investors": "Ron Conway, Teleonica Capital, Asset Management Company"
      }
    ]
  },
  {
    "company": "LYNDA.COM",
    "name": "lynda",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Marketing",
        "lead": "April",
        "recruit": [
          "Rich",
          "Mark",
          "May"
        ],
        "investors": "Self-funded"
      }
    ]
  },
  {
    "company": "MARKLOGIC",
    "name": "mark_logic",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "Director of Software Engineering",
        "lead": "Tom",
        "recruit": [

        ],
        "investors": "Sequoia Capital"
      },
      {
        "position": "VP Professional Services, Media Market",
        "lead": "Audrey",
        "recruit": [
          "Gene"
        ],
        "investors": "Sequoia Capital"
      }
    ]
  },
  {
    "company": "MARKMONITOR",
    "name": "mark_monitor",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "Sr Director Business Development",
        "lead": "Audrey",
        "recruit": [
          "Gene"
        ],
        "investors": "Cargill Ventures, Focus Ventures, Foundation Capital, Institutional Venture Partners"
      },
      {
        "position": "VP Human Resources",
        "lead": "Rich",
        "recruit": [
          "Tom"
        ],
        "investors": "Cargill Ventures, Focus Ventures, Foundation Capital, Institutional Venture Partners"
      }
    ]
  },
  {
    "company": "MEEZ",
    "name": "meez",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "CTO",
        "lead": "Mark ",
        "recruit": [
          "Tom"
        ],
        "investors": "Battery Ventures, Transcosmos"
      }
    ]
  },
  {
    "company": "MERCED SYSTEMS",
    "name": "merced_systems",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "CTO",
        "lead": "Tom",
        "recruit": [

        ],
        "investors": "Sutter Hil Ventures"
      }
    ]
  },
  {
    "company": "METACAFE",
    "name": "meta_cafe",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "VP Product",
        "lead": "Mark ",
        "recruit": [
          "Julie"
        ],
        "investors": "Accel Partners, Benchmark Capital, DAG Ventures, Highland Capital Partners"
      }
    ]
  },
  {
    "company": "MICROSOFT",
    "name": "microsoft",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "Assistant Controller",
        "lead": null,
        "recruit": [

        ],
        "investors": "NASDAQ: MSFT"
      }
    ]
  },
  {
    "company": "MINDFLASH",
    "name": "mindflash",
    "categories": [
      1,
      2
    ],
    "details": [
      {
        "position": "CEO",
        "lead": "April",
        "recruit": [
          "Rich"
        ],
        "investors": "IGSB"
      }
    ]
  },
  {
    "company": "MOKAFIVE",
    "name": "mokafive",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP WW Sales",
        "lead": "April",
        "recruit": [
          "Irene"
        ],
        "investors": "Khosla Ventures, Highland Capital Partners "
      },
      {
        "position": "VP Products",
        "lead": "Rich",
        "recruit": [
          "April"
        ],
        "investors": "Khosla Ventures, Highland Capital Partners "
      }
    ]
  },
  {
    "company": "MSN",
    "name": "msn",
    "categories": [

    ],
    "details": [

    ]
  },
  {
    "company": "NEARBY NOW",
    "name": "nearby_now",
    "categories": [
      1,
      2
    ],
    "details": [
      {
        "position": "VP Marketing",
        "lead": null,
        "recruit": [
          "Rich"
        ],
        "investors": "Norwest Venture Partners, Draper Fisher Jurvetson, Draper Richards"
      },
      {
        "position": "BOARD",
        "lead": null,
        "recruit": [
          "Rich"
        ],
        "investors": "Norwest Venture Partners, Draper Fisher Jurvetson, Draper Richards"
      }
    ]
  },
  {
    "company": "NEOSCALE",
    "name": "neoscale",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Sales",
        "lead": "Rich",
        "recruit": [

        ],
        "investors": "Advanced Technology Ventures, Bay Partners, Sevin Rosen Funds, Lightspeed Venture Partners"
      }
    ]
  },
  {
    "company": "NETLI",
    "name": "netli",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "Board Member",
        "lead": null,
        "recruit": [

        ],
        "investors": "Acquired by Akami (NASDAQ: AKAM)"
      }
    ]
  },
  {
    "company": "NIKU",
    "name": "niku",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "EVP WW Sales",
        "lead": "Irene",
        "recruit": [

        ],
        "investors": "Acquired by Computer Associates (NYSE: CA)"
      }
    ]
  },
  {
    "company": "ONVANTAGE",
    "name": "ON_vantage",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Sales",
        "lead": "Irene",
        "recruit": [

        ],
        "investors": "Acquired by StarCite"
      }
    ]
  },
  {
    "company": "ORACLE",
    "name": "oracle",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Engineering, Enterprise 2.0",
        "lead": "Tom",
        "recruit": [
          "Steve"
        ],
        "investors": "NASDAQ:ORCL"
      },
      {
        "position": "SVP (GM) Enterprise 2.0",
        "lead": "Tom",
        "recruit": [
          "Steve"
        ],
        "investors": "NASDAQ:ORCL"
      }
    ]
  },
  {
    "company": "PHOENIX TECHNOLOGIES",
    "name": "phoenix",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Product Management",
        "lead": null,
        "recruit": [

        ],
        "investors": "eSupport.com"
      },
      {
        "position": "VP Engineering",
        "lead": "Tom",
        "recruit": [
          "Tom"
        ],
        "investors": "eSupport.com"
      }
    ]
  },
  {
    "company": "PINC SOLUTIONS",
    "name": "pinc",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Engineering",
        "lead": "Tom",
        "recruit": [
          "Tom"
        ],
        "investors": "Horizon Ventures, Sutter Hill Ventures "
      }
    ]
  },
  {
    "company": "PLUM",
    "name": "plum",
    "categories": [

    ],
    "details": [

    ]
  },
  {
    "company": "PROXIMIC",
    "name": "proximic",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "CEO",
        "lead": "Rich",
        "recruit": [
          "Julie"
        ],
        "investors": "Wellington Partners"
      }
    ]
  },
  {
    "company": "PSS ATLAS",
    "name": "PSS_atlas",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Strategic Sales",
        "lead": "Rich",
        "recruit": [
          "Gene"
        ],
        "investors": "Azure Capital, Granite Ventures, Cipio Partners, FTVentures, NBC Universal, Hercules Technology Growth Capital"
      }
    ]
  },
  {
    "company": "PUBMATIC",
    "name": "pubmatic",
    "categories": [
      1,
      2
    ],
    "details": [
      {
        "position": "VP Business Development",
        "lead": "Rich",
        "recruit": [
          "Gene"
        ],
        "investors": "Draper Fisher Jurvetson, Nexus India Capital, Helion Ventures"
      },
      {
        "position": "VP Publisher Services",
        "lead": "April/Rich",
        "recruit": [
          "Gene"
        ],
        "investors": "Draper Fisher Jurvetson, Nexus India Capital, Helion Ventures"
      }
    ]
  },
  {
    "company": "QUANTIVO",
    "name": "quantivo",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Engineering",
        "lead": "April",
        "recruit": [
          "Tom"
        ],
        "investors": "Foundation Capital, Partech International "
      }
    ]
  },
  {
    "company": "RAZOO",
    "name": "razoo",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "CEO",
        "lead": "April",
        "recruit": [
          "Gene",
          "May"
        ],
        "investors": "Legatum Capital"
      }
    ]
  },
  {
    "company": "REALNETWORKS",
    "name": "real_networks",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "SVP Sales & Marketing",
        "lead": "Rich",
        "recruit": [
          "Gene"
        ],
        "investors": "NASDAQ:RNWK"
      },
      {
        "position": "GM Consumer",
        "lead": "Rich",
        "recruit": [
          "Gene"
        ],
        "investors": "NASDAQ:RNWK"
      }
    ]
  },
  {
    "company": "REPLAY SOLUTIONS",
    "name": "replay",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VPE",
        "lead": "Tom",
        "recruit": [
          "Tom"
        ],
        "investors": "Hummer Winblad, Sigma Partners, Partech "
      }
    ]
  },
  {
    "company": "RETREVO",
    "name": "retrovo",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "VP Product Management",
        "lead": "Rich",
        "recruit": [
          "Mark",
          "Julie"
        ],
        "investors": "Alloy Ventures, Norwest Venture Partners, "
      },
      {
        "position": "VP Business Development",
        "lead": "Rich",
        "recruit": [
          "Mark"
        ],
        "investors": "Alloy Ventures, Norwest Venture Partners, "
      }
    ]
  },
  {
    "company": "RHAPSODY NETWORKS",
    "name": "rhapsody",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "CFO",
        "lead": "April",
        "recruit": [

        ],
        "investors": "Acquired by Brocade (NASDAQ: BRCD)"
      }
    ]
  },
  {
    "company": "RINGCUBE",
    "name": "ringcube",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Marketing",
        "lead": "Rich",
        "recruit": [

        ],
        "investors": "NEA, Mohr Davidow Ventures"
      }
    ]
  },
  {
    "company": "RTI",
    "name": "RTI",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Marketing",
        "lead": "Irene",
        "recruit": [

        ],
        "investors": "Privately held"
      }
    ]
  },
  {
    "company": "SAYNOW",
    "name": "saynow",
    "categories": [
      1,
      3
    ],
    "details": [
      {
        "position": "SVP Sales & Strategy",
        "lead": "April",
        "recruit": [
          "Mark"
        ],
        "investors": "Shasta Ventures, Tugboat Ventures, Altos Ventures"
      }
    ]
  },
  {
    "company": "SCANCAFE",
    "name": "scancafe",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "CMO",
        "lead": "Rich",
        "recruit": [

        ],
        "investors": "Sigma Partners"
      }
    ]
  },
  {
    "company": "SKYBOX SECURITY",
    "name": "skybox",
    "categories": [

    ],
    "details": [

    ]
  },
  {
    "company": "SNAP SHOTS",
    "name": "snapshots",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "VP Product",
        "lead": "Mark ",
        "recruit": [

        ],
        "investors": "Mayfield Fund, Idealab"
      }
    ]
  },
  {
    "company": "SNAPVINE",
    "name": "snapvine",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "CRO",
        "lead": "Mark ",
        "recruit": [
          "Gene"
        ],
        "investors": "Russell Siegelman, DFJ, First Round Capital, Bridgescale Partners"
      }
    ]
  },
  {
    "company": "SOCIALTEXT",
    "name": "socialtext",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Sales",
        "lead": "April",
        "recruit": [
          "Irene"
        ],
        "investors": "Omidyar Network, DFJ, SAP Ventures"
      },
      {
        "position": "CMO",
        "lead": "April",
        "recruit": [
          "Irene"
        ],
        "investors": "Omidyar Network, DFJ, SAP Ventures"
      }
    ]
  },
  {
    "company": "SONGKICK",
    "name": "songkick",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "VP/GM Business Development",
        "lead": "Rich",
        "recruit": [
          "Mark"
        ],
        "investors": "Y Combinator, SoftTech VC, Index Ventures"
      }
    ]
  },
  {
    "company": "SPLUNK",
    "name": "splunk",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Marketing",
        "lead": "Steve",
        "recruit": [

        ],
        "investors": "Ignition Partners, August Captial , JK&B Capital, Sevin Rosen Funds"
      }
    ]
  },
  {
    "company": "SPRINGCM",
    "name": "springCM",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Marketing",
        "lead": "Steve",
        "recruit": [

        ],
        "investors": "Foundation Capital, Northbridge Venture Partners"
      }
    ]
  },
  {
    "company": "STREETLINE",
    "name": "streetline",
    "categories": [
      2,
      3
    ],
    "details": [
      {
        "position": "SVP Sales & Marketing",
        "lead": "Irene",
        "recruit": [

        ],
        "investors": "Sutter Hill Ventures"
      },
      {
        "position": "VP Applications",
        "lead": "Tom",
        "recruit": [
          "Tom"
        ],
        "investors": "Sutter Hill Ventures"
      }
    ]
  },
  {
    "company": "SUPPORTSOFT",
    "name": "supportsoft",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "Board Member",
        "lead": "Irene",
        "recruit": [

        ],
        "investors": "NASDAQ: SPRT"
      }
    ]
  },
  {
    "company": "SYMANTEC",
    "name": "symantec",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Product Management",
        "lead": "Audrey",
        "recruit": [
          "Gene"
        ],
        "investors": "NASDAQ: SYMC"
      },
      {
        "position": "VP Product Marketing, Consulting Svcs",
        "lead": "Audrey",
        "recruit": [
          "Gene"
        ],
        "investors": "NASDAQ: SYMC"
      }
    ]
  },
  {
    "company": "TAGGED",
    "name": "tagged",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "Chief Customer Officer",
        "lead": "Mark",
        "recruit": [
          "Julie"
        ],
        "investors": "Mayfield"
      },
      {
        "position": "VP Online Marketing",
        "lead": "Mark",
        "recruit": [
          "Mark",
          "May"
        ],
        "investors": "Mayfield"
      }
    ]
  },
  {
    "company": "TELEPHIA",
    "name": "telephia",
    "categories": [
      1,
      3
    ],
    "details": [
      {
        "position": "VP/GM",
        "lead": "Rich",
        "recruit": [
          "Irene"
        ],
        "investors": "Acquired by Nielsen"
      }
    ]
  },
  {
    "company": "TEROS",
    "name": "teros",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Business Development",
        "lead": "Rich",
        "recruit": [
          "Julie",
          "Gene"
        ],
        "investors": "Institutional Venture Partners, NEA. CMEA Ventures, Scale Venture Partners, GF Private Equity, Chevron Technology Ventures, Symantec"
      },
      {
        "position": "VP Marketing",
        "lead": "Rich",
        "recruit": [
          "Audrey"
        ],
        "investors": "Institutional Venture Partners, NEA. CMEA Ventures, Scale Venture Partners, GF Private Equity, Chevron Technology Ventures, Symantec"
      }
    ]
  },
  {
    "company": "TOPSY",
    "name": "topsy",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "VP Operations",
        "lead": "Mark",
        "recruit": [
          "Julie"
        ],
        "investors": "BlueRun Ventures, Ignition Partners, The Founders Fund"
      }
    ]
  },
  {
    "company": "TOTAL DEFENSE",
    "name": "total_defense",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Online Marketing",
        "lead": "Rich",
        "recruit": [
          "Julie"
        ],
        "investors": "Privately held"
      }
    ]
  },
  {
    "company": "TURN",
    "name": "turn",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "Chief Scientist",
        "lead": "Mark ",
        "recruit": [

        ],
        "investors": "Norwest Venture Partners, Shasta Ventures, Trident Capital, Focus Ventures"
      },
      {
        "position": "VP Product Management",
        "lead": "Mark ",
        "recruit": [
          "Gene"
        ],
        "investors": "Norwest Venture Partners, Shasta Ventures, Trident Capital, Focus Ventures"
      }
    ]
  },
  {
    "company": "UNTANGLE",
    "name": "untangle",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "SVP Online Sales & Marketing",
        "lead": "Audrey",
        "recruit": [
          "Gene"
        ],
        "investors": "CMEA Ventures, Rustic Canyon Ventures"
      },
      {
        "position": "VP Business Development",
        "lead": "Audrey",
        "recruit": [

        ],
        "investors": "CMEA Ventures, Rustic Canyon Ventures"
      }
    ]
  },
  {
    "company": "VERIX",
    "name": "verix",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP WW Sales",
        "lead": "Audrey",
        "recruit": [
          "Irene"
        ],
        "investors": "Gemini Israel Funds, Hillsven Capital. Carmel Ventures"
      }
    ]
  },
  {
    "company": "VOLOMEDIA",
    "name": "volomedia",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "CEO",
        "lead": "Rich",
        "recruit": [
          "Julie"
        ],
        "investors": "Worldview Technology Partners, Mayfield Fund, Sutter Hill Ventures, Leader Ventures"
      }
    ]
  },
  {
    "company": "WAZAP",
    "name": "wazap",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "GM/Counrtry Manager",
        "lead": null,
        "recruit": [
          "Mark"
        ],
        "investors": "Wellington Partners, Partech International"
      }
    ]
  },
  {
    "company": "WEATHERBILL",
    "name": "weatherbill",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Sales",
        "lead": "Irene",
        "recruit": [

        ],
        "investors": "Khosla Ventures, Google Ventures, NEA, Index Ventures, Allen & Company, First Round Capital"
      },
      {
        "position": "VP Engineering",
        "lead": "Tom",
        "recruit": [

        ],
        "investors": "Khosla Ventures, Google Ventures, NEA, Index Ventures, Allen & Company, First Round Capital"
      }
    ]
  },
  {
    "company": "WEBROOT",
    "name": "webroot",
    "categories": [
      1,
      2
    ],
    "details": [
      {
        "position": "SVP Global Online",
        "lead": "Rich",
        "recruit": [
          "Audrey",
          "May"
        ],
        "investors": "Accel Partners, Mayfield, Technology Crossover Ventures"
      }
    ]
  },
  {
    "company": "WHITE PAGES",
    "name": "whitepages",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "CTO",
        "lead": "April",
        "recruit": [
          "Tom"
        ],
        "investors": "Madrona Venture Group, Technology Crossover Ventures "
      }
    ]
  },
  {
    "company": "WIDE ORBIT",
    "name": "wide_orbit",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "SVP Engineering",
        "lead": "April",
        "recruit": [
          "Tom"
        ],
        "investors": "Khosla Ventures, Mayfield Fund "
      },
      {
        "position": "CMO",
        "lead": "Rich",
        "recruit": [
          "April"
        ],
        "investors": "Khosla Ventures, Mayfield Fund "
      }
    ]
  },
  {
    "company": "WS O2",
    "name": "WSO2",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "VP Business Development",
        "lead": "Tom",
        "recruit": [

        ],
        "investors": "Intel Capital"
      }
    ]
  },
  {
    "company": "YAHOO!",
    "name": "yahoo",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "VP Customer Experience",
        "lead": "Audrey",
        "recruit": [
          "Gene"
        ],
        "investors": "NSDQ: YHOO"
      },
      {
        "position": "VP Ad Operations",
        "lead": "Audrey",
        "recruit": [
          "Gene"
        ],
        "investors": "NSDQ: YHOO"
      }
    ]
  },
  {
    "company": "YOLA",
    "name": "yola",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "SVP Engineering",
        "lead": "Tom",
        "recruit": [

        ],
        "investors": "Columbus Venture Capital, Reinet Investments S.C.A."
      },
      {
        "position": "SVP Product Management",
        "lead": "Tom",
        "recruit": [

        ],
        "investors": "Columbus Venture Capital, Reinet Investments S.C.A."
      }
    ]
  },
  {
    "company": "ZEND",
    "name": "zend",
    "categories": [
      2
    ],
    "details": [
      {
        "position": "CMO",
        "lead": "Rich",
        "recruit": [
          "Audrey"
        ],
        "investors": "Azure Capital, Index Ventures, SAP Ventures, Intel Capital, Walden Israel Venture Capital, Greylock Partners, Platinum Neurom Ventures (PNV)"
      },
      {
        "position": "VP Sales",
        "lead": "Rich",
        "recruit": [
          "Audrey"
        ],
        "investors": "Azure Capital, Index Ventures, SAP Ventures, Intel Capital, Walden Israel Venture Capital, Greylock Partners, Platinum Neurom Ventures (PNV)"
      }
    ]
  },
  {
    "company": "ZONELABS",
    "name": "zone_labs",
    "categories": [
      1,
      2
    ],
    "details": [
      {
        "position": "Head of Professional Services",
        "lead": "Gene",
        "recruit": [
          "Gene"
        ],
        "investors": "Acquired by Checkpoint Software NASDAQ: CHKP"
      },
      {
        "position": "VP Sales",
        "lead": "Rich",
        "recruit": [
          "Gene"
        ],
        "investors": "Acquired by Checkpoint Software NASDAQ: CHKP"
      }
    ]
  },
  {
    "company": "ZYNGA",
    "name": "zynga",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "VP Customer Service",
        "lead": "Mark",
        "recruit": [
          "Jule"
        ],
        "investors": "Kleiner Perkins, IVP, Union Square Ventures, Foundry Group, Avalon Ventures, Clarium Capital, Pilot Group, individual Investors"
      },
      {
        "position": "SVP Network Operations",
        "lead": "Mark",
        "recruit": [
          "Julie"
        ],
        "investors": "Kleiner Perkins, IVP, Union Square Ventures, Foundry Group, Avalon Ventures, Clarium Capital, Pilot Group, individual Investors"
      }
    ]
  }
]

// return some functions that do things like sort, filter, etc. on these things.
return {
  
  getKeys : function () {
    return keys;
  },
  
  getNumRows : function () {
    return ROWS;
  },
  
  getNumCols : function () {
    return COLS;
  },
  
  getNumPortfolioCols : function () {
    return PORTFOLIO_COLUMNS;
  },
  
  getAssets : function() {
    return assets2;
  },
  
  filterByCategory : function(category) {
    return _.filter(assets2, function(asset){
      return _.include(asset.categories, category);
    });
  },
  
  filterByName : function(name) {
    return _.filter(assets2, function(asset){
      return asset.name == name;
    });
  },    
  
  getNumCompaniesPerColumn : function () {
    return Math.ceil(assets2.length / PORTFOLIO_COLUMNS);
  },
  
  // look inside the assets for companies with the right category, and get that from start up to max
  getCompanies : function (category, start, max) {
    var companies = this.filterByCategory(category);
    if(start+max > companies.length) {
      console.log("we are asking for too many companies here ", start, max, companies.length);
    }
    return companies.splice(start, max);
  },
  
  getAllCompanies : function (start, max) {
    var companies = assets2;
    return companies.splice(start, max);
  }
}
}();

(function ($) {

  $.renderClientPortfolio = function () {
    var max = Vantage.practice.getNumCompaniesPerColumn(); // we know how many companies we want per column now... 
    var num_cols = Vantage.practice.getNumPortfolioCols();
    var clients = $(".clients", "#logo_content");
    _.each(clients, function(client, idx){
      var sublist = Vantage.practice.getAllCompanies(0, max);
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
    var ROWS = Vantage.practice.getNumRows();
    var COLS = Vantage.practice.getNumCols();
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
        $("#logoTemplate").tmpl({klass: klass, margin: margin, href: "#"+logo.name, title: logo.name, name: logo.company, details: logo.details}).appendTo("#"+id);
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
  
  $(".vantage-link").each(function(i,v){
    var name = $(v).text();
    var anchor = $("<a>",{
      text: name,
      href: "#"
    });
    $(this).html(anchor);
  });
  
  $('#tabs').bind('tabsselect', function(event, ui) {
  });
  
  // $(".logo-column").click(function(e){
  //      e.preventDefault();
  //      var record = _.first(Vantage.practice.filterByName(_.first(_.without($(this).attr("class").split(" "), "logo-column"))));
  //      $.extend(record, {url: "#"})
  //      $("#recent_logo").removeClass().addClass(record.name);
  //      $("#recent_details").empty();
  //      $("#recentTemplate").tmpl(record).appendTo("#recent_details");
  //   });
  
  $(".lightitupbud").fancybox();
}); 
