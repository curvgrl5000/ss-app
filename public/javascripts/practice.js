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

var recent_searches = [
  {
    company: "Razoo",
    category: "Consumer / Internet",
    position: "CEO",
    lead: "April King",
    recruit: ["Gene Zaccor", "May Young"],
    investors: "Legatum Capital",
    logo: "razoo"
  },
  {
    company: "Songkick",
    category: "Consumer / Internet",
    position: "VP/GM Business Development",
    lead: "Richard Lear" ,
    recruit: ["Mark Hubbell"],
    investors: "Y Combinator, SoftTech VC, Index Ventures",
    logo: "songkick"
  },
  {
    company: "Inigral",
    category: "Enterprise / SaaS",
    position: "CEO",
    lead: "April King",
    recruit: ["Steve O'Deegan"],
    investors: "Founders Fund, Retro Ventures, Gates Foundation",
    logo: "inigral"
  },
  {
    company: "Inflection",
    category: "Consumer / Internet",
    position: "CTO",
    lead: "Tom Callahan" ,
    recruit: ["May Young"],
    investors: "Matrix Partners. Sutter Hill Ventures",
    logo: ""
  },
  {
    company: "Webroot",
    category: "Consumer / Internet & Enterprise / SaaS",
    position: "SVP Global Online",
    lead: "Richard Lear",
    recruit: ["Audrey Shuster", "May Young"],
    investors: "Accel Partners, Mayfield, Technology Crossover Ventures",
    logo: "webroot"
  },
  {
    company: "CourseSmart",
    category: "Consumer / Internet & Enterprise / SaaS",
    position: "SVP Business Development",
    lead: "April King",
    recruit: ["Irene Murphy"],
    investors: "Joint Venture",
    logo: "course_smart"
  },
  {
    company: "IP Infusion",
    category: "Enterprise / SaaS",
    position: "SVP Global Sales & Business Dev",
    lead: "Audrey Shuster" ,
    recruit: ["Irene Murphy"],
    investors: "Privately Held",
    logo: "IP_infusion"
  },
  {
    company: "Total Defense",
    category: "Enterprise / SaaS",
    position: "VP Online Marketing",
    lead: "Richard Lear" ,
    recruit: ["Julie Locke"],
    investors: "Privately Held",
    logo: "total_defense"
  },
  {
    company: "Get Satisfaction",
    category: "Enterprise / SaaS",
    position: "VP Product Management",
    lead: "Steve O'Deegan",
    recruit: [],
    investors: "First Round Capital, Azure Capital Partners, O’Reilly Alphatech Ventures, SoftTech VC",
    logo: "get_satisfaction"
  },
  {
    company: "Ingres",
    category: "Enterprise / SaaS",
    position: "VP Sales, NA",
    lead: "Irene Murphy" ,
    recruit: ["Steve O'Deegan"],
    investors: "Garnett & Helfrich Capital",
    logo: "ingres"
  },
  {
    company: "MarkMonitor",
    category: "Enterprise / SaaS",
    position: "VP Professional Services",
    lead: "Audrey Shuster" ,
    recruit: ["Gene Zaccor"],
    investors: "Cargill Ventures, Focus Ventures, Foundation Capital, Institutional Venture Partners",
    logo: "mark_monitor"
  }
]

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
        "lead": "Tom Callahan",
        "recruit": [

        ],
        "investors": "Flybridge Capital Partners, Sequoia, Union Square Ventures"
      },
      {
        "position": "VP Marketing",
        "lead": "April King",
        "recruit": [
          "Irene Murphy"
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
        "lead": "Richard Lear",
        "recruit": [
          "Julie Locke"
        ],
        "investors": "August Capital, Mayfield Fund, Sandhill Capital"
      },
      {
        "position": "VP Media",
        "lead": "Richard Lear",
        "recruit": [
          "Mark Hubbell",
          "Gene Zaccor"
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
        "lead": "Irene Murphy",
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
        "lead": "Audrey Shuster",
        "recruit": [
          "Gene Zaccor"
        ],
        "investors": "Logispring, CMEA Ventures"
      },
      {
        "position": "VP Sales",
        "lead": "Audrey Shuster",
        "recruit": [
          "Gene Zaccor"
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
        "lead": "Richard Lear",
        "recruit": [
          "Mark Hubbell"
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
        "lead": "Mark Hubbell",
        "recruit": [
          "Mark Hubbell",
          "Richard Lear"
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
        "lead": "Richard Lear",
        "recruit": [
          ""
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
        "lead": "Irene Murphy",
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
        "lead": "Richard Lear",
        "recruit": [
          "Gene Zaccor"
        ],
        "investors": "Acquired by Oracle (NASDAQ: ORCL)"
      },
      {
        "position": "VP Business Development",
        "lead": "Richard Lear",
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
        "lead": "April King",
        "recruit": [
          "Mark Hubbell"
        ],
        "investors": "Wholly owned subsidiary of Betfair  Group (UK)"
      },
      {
        "position": "VP Engineering",
        "lead": "April King",
        "recruit": [
          "Tom Callahan"
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
        "lead": "April King",
        "recruit": [

        ],
        "investors": "Cardinal Venture Capital, ArrowPath, El Dorado Ventures "
      },
      {
        "position": "SVP Marketing & Sales",
        "lead": "April King",
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
        "lead": "Steve O'Deegan",
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
        "lead": "April King",
        "recruit": [
          "Mark Hubbell"
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
        "lead": "April King",
        "recruit": [
          "Mark Hubbell"
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
        "lead": "Irene Murphy",
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
        "lead": "April King",
        "recruit": [
          "Richard Lear"
        ],
        "investors": "Joint Venture"
      },
      {
        "position": "SVP Products",
        "lead": "April King",
        "recruit": [
          "Tom Callahan"
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
        "lead": "Irene Murphy",
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
        "lead": "Irene Murphy",
        "recruit": [
          "Tom Callahan"
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
        "lead": "Steve O'Deegan",
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
        "lead": "Richard Lear",
        "recruit": [
          "Julie Locke"
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
        "lead": "Mark Hubbell",
        "recruit": [
          "Irene Murphy"
        ],
        "investors": "The Foundry Group"
      },
      {
        "position": "Regional Vice President",
        "lead": "Mark Hubbell",
        "recruit": [
          "Irene Murphy"
        ],
        "investors": "The Foundry Group"
      },
      {
        "position": "CFO",
        "lead": "Mark Hubbell",
        "recruit": [
          "Irene Murphy"
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
        "lead": "April King",
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
        "lead": "Irene Murphy",
        "recruit": [

        ],
        "investors": "Scale Ventures, Sutter Hill Ventures"
      },
      {
        "position": "VP Marketing",
        "lead": "Richard Lear",
        "recruit": [
          "Gene Zaccor"
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
        "lead": "April King",
        "recruit": [
          "Mark Hubbell"
        ],
        "investors": "Gene Zaccorral Catalyst Partners, Highland Capital Partners"
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
        "lead": "Richard Lear",
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
        "lead": "Irene Murphy",
        "recruit": [

        ],
        "investors": "Walden International, HIG Ventures"
      },
      {
        "position": "VP Sales",
        "lead": "Irene Murphy",
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
        "lead": "Irene Murphy",
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
        "lead": "Steve O'Deegan",
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
        "lead": "Tom Callahan",
        "recruit": [
          "Mark Hubbell"
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
        "lead": "Richard Lear",
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
        "lead": "April King",
        "recruit": [
          "Tom Callahan"
        ],
        "investors": "Benchmark Israel, Virgin Green Fund"
      },
      {
        "position": "SVP Marketing",
        "lead": "",
        "recruit": [
          "April King"
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
        "lead": "Gene Zaccor",
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
        "lead": "Steve O'Deegan",
        "recruit": [

        ],
        "investors": "Foundation Capital, Mohr Davidow Ventures"
      },
      {
        "position": "VP Marketing",
        "lead": "Steve O'Deegan",
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
        "lead": "Steve O'Deegan",
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
        "lead": "Gene Zaccor",
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
        "lead": "April King",
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
        "lead": "Julie Locke",
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
        "lead": "April King",
        "recruit": [
          "Steve O'Deegan"
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
        "lead": "Irene Murphy",
        "recruit": [

        ],
        "investors": "Garnett & Helfrich Capital"
      },
      {
        "position": "VP Sales, NA",
        "lead": "Irene Murphy",
        "recruit": [
          "Steve O'Deegan"
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
        "lead": "Audrey Shuster",
        "recruit": [
          "Irene Murphy"
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
        "lead": "Irene Murphy",
        "recruit": [

        ],
        "investors": "Acquired by Tibco Software"
      },
      {
        "position": "VP Business Development",
        "lead": "Tom Callahan",
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
        "lead": "Richard Lear",
        "recruit": [
          "Mark Hubbell"
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
        "lead": "Julie Locke",
        "recruit": [

        ],
        "investors": "Menlo Ventures, Crosslink Capital, BlueRun Ventures, Bay Partners, Leapfrog Ventures"
      },
      {
        "position": "VP Online Marketing",
        "lead": "Mark Hubbell",
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
        "lead": "Mark Hubbell ",
        "recruit": [

        ],
        "investors": "Rustic Canyon Partners, US Venture Partners, i-Hatch Ventures, Monitor Ventures"
      },
      {
        "position": "CTO/VP Engineering",
        "lead": "Mark Hubbell ",
        "recruit": [
          "Mark Hubbell",
          "Tom Callahan"
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
        "lead": "April King",
        "recruit": [

        ],
        "investors": "Asset Management Company, Telefonica Capital, NBC/Peacock Capital "
      },
      {
        "position": "VP Sales",
        "lead": "April King",
        "recruit": [
          "Irene Murphy"
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
        "lead": "April King",
        "recruit": [
          "Richard Lear",
          "Mark Hubbell",
          "May Young"
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
        "lead": "Tom Callahan",
        "recruit": [

        ],
        "investors": "Sequoia Capital"
      },
      {
        "position": "VP Professional Services, Media Market",
        "lead": "Audrey Shuster",
        "recruit": [
          "Gene Zaccor"
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
        "lead": "Audrey Shuster",
        "recruit": [
          "Gene Zaccor"
        ],
        "investors": "Cargill Ventures, Focus Ventures, Foundation Capital, Institutional Venture Partners"
      },
      {
        "position": "VP Human Resources",
        "lead": "Richard Lear",
        "recruit": [
          "Tom Callahan"
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
        "lead": "Mark Hubbell ",
        "recruit": [
          "Tom Callahan"
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
        "lead": "Tom Callahan",
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
        "lead": "Mark Hubbell ",
        "recruit": [
          "Julie Locke"
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
        "lead": "April King",
        "recruit": [
          "Richard Lear"
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
        "lead": "April King",
        "recruit": [
          "Irene Murphy"
        ],
        "investors": "Khosla Ventures, Highland Capital Partners "
      },
      {
        "position": "VP Products",
        "lead": "Richard Lear",
        "recruit": [
          "April King"
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
          "Richard Lear"
        ],
        "investors": "Norwest Venture Partners, Draper Fisher Jurvetson, Draper Richard Learards"
      },
      {
        "position": "BOARD",
        "lead": null,
        "recruit": [
          "Richard Lear"
        ],
        "investors": "Norwest Venture Partners, Draper Fisher Jurvetson, Draper Richard Learards"
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
        "lead": "Richard Lear",
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
        "lead": "Irene Murphy",
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
        "lead": "Irene Murphy",
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
        "lead": "Tom Callahan",
        "recruit": [
          "Steve O'Deegan"
        ],
        "investors": "NASDAQ:ORCL"
      },
      {
        "position": "SVP (GM) Enterprise 2.0",
        "lead": "Tom Callahan",
        "recruit": [
          "Steve O'Deegan"
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
        "lead": "Tom Callahan",
        "recruit": [
          "Tom Callahan"
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
        "lead": "Tom Callahan",
        "recruit": [
          "Tom Callahan"
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
        "lead": "Richard Lear",
        "recruit": [
          "Julie Locke"
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
        "lead": "Richard Lear",
        "recruit": [
          "Gene Zaccor"
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
        "lead": "Richard Lear",
        "recruit": [
          "Gene Zaccor"
        ],
        "investors": "Draper Fisher Jurvetson, Nexus India Capital, Helion Ventures"
      },
      {
        "position": "VP Publisher Services",
        "lead": "April King / Richard Lear",
        "recruit": [
          "Gene Zaccor"
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
        "lead": "April King",
        "recruit": [
          "Tom Callahan"
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
        "lead": "April King",
        "recruit": [
          "Gene Zaccor",
          "May Young"
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
        "lead": "Richard Lear",
        "recruit": [
          "Gene Zaccor"
        ],
        "investors": "NASDAQ:RNWK"
      },
      {
        "position": "GM Consumer",
        "lead": "Richard Lear",
        "recruit": [
          "Gene Zaccor"
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
        "lead": "Tom Callahan",
        "recruit": [
          "Tom Callahan"
        ],
        "investors": "Hummer Winblad, Sigma Partners, Partech "
      }
    ]
  },
  {
    "company": "RETREVO",
    "name": "retrevo",
    "categories": [
      1
    ],
    "details": [
      {
        "position": "VP Product Management",
        "lead": "Richard Lear",
        "recruit": [
          "Mark Hubbell",
          "Julie Locke"
        ],
        "investors": "Alloy Ventures, Norwest Venture Partners, "
      },
      {
        "position": "VP Business Development",
        "lead": "Richard Lear",
        "recruit": [
          "Mark Hubbell"
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
        "lead": "April King",
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
        "lead": "Richard Lear",
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
        "lead": "Irene Murphy",
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
        "lead": "April King",
        "recruit": [
          "Mark Hubbell"
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
        "lead": "Richard Lear",
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
        "lead": "Mark Hubbell ",
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
        "lead": "Mark Hubbell",
        "recruit": [
          "Gene Zaccor"
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
        "lead": "April King",
        "recruit": [
          "Irene Murphy"
        ],
        "investors": "Omidyar Network, DFJ, SAP Ventures"
      },
      {
        "position": "CMO",
        "lead": "April King",
        "recruit": [
          "Irene Murphy"
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
        "lead": "Richard Lear",
        "recruit": [
          "Mark Hubbell"
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
        "lead": "Steve O'Deegan",
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
        "lead": "Steve O'Deegan",
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
        "lead": "Irene Murphy",
        "recruit": [

        ],
        "investors": "Sutter Hill Ventures"
      },
      {
        "position": "VP Applications",
        "lead": "Tom Callahan",
        "recruit": [
          "Tom Callahan"
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
        "lead": "Irene Murphy",
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
        "lead": "Audrey Shuster",
        "recruit": [
          "Gene Zaccor"
        ],
        "investors": "NASDAQ: SYMC"
      },
      {
        "position": "VP Product Marketing, Consulting Svcs",
        "lead": "Audrey Shuster",
        "recruit": [
          "Gene Zaccor"
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
        "lead": "Mark Hubbell",
        "recruit": [
          "Julie Locke"
        ],
        "investors": "Mayfield"
      },
      {
        "position": "VP Online Marketing",
        "lead": "Mark Hubbell",
        "recruit": [
          "Mark Hubbell",
          "May Young"
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
        "lead": "Richard Lear",
        "recruit": [
          "Irene Murphy"
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
        "lead": "Richard Lear",
        "recruit": [
          "Julie Locke",
          "Gene Zaccor"
        ],
        "investors": "Institutional Venture Partners, NEA. CMEA Ventures, Scale Venture Partners, GF Private Equity, Chevron Technology Ventures, Symantec"
      },
      {
        "position": "VP Marketing",
        "lead": "Richard Lear",
        "recruit": [
          "Audrey Shuster"
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
        "lead": "Mark Hubbell",
        "recruit": [
          "Julie Locke"
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
        "lead": "Richard Lear",
        "recruit": [
          "Julie Locke"
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
        "lead": "Mark Hubbell ",
        "recruit": [

        ],
        "investors": "Norwest Venture Partners, Shasta Ventures, Trident Capital, Focus Ventures"
      },
      {
        "position": "VP Product Management",
        "lead": "Mark Hubbell ",
        "recruit": [
          "Gene Zaccor"
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
        "lead": "Audrey Shuster",
        "recruit": [
          "Gene Zaccor"
        ],
        "investors": "CMEA Ventures, Rustic Canyon Ventures"
      },
      {
        "position": "VP Business Development",
        "lead": "Audrey Shuster",
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
        "lead": "Audrey Shuster",
        "recruit": [
          "Irene Murphy"
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
        "lead": "Richard Lear",
        "recruit": [
          "Julie Locke"
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
          "Mark Hubbell"
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
        "lead": "Irene Murphy",
        "recruit": [

        ],
        "investors": "Khosla Ventures, Google Ventures, NEA, Index Ventures, Allen & Company, First Round Capital"
      },
      {
        "position": "VP Engineering",
        "lead": "Tom Callahan",
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
        "lead": "Richard Lear",
        "recruit": [
          "Audrey Shuster",
          "May Young"
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
        "lead": "April King",
        "recruit": [
          "Tom Callahan"
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
        "lead": "April King",
        "recruit": [
          "Tom Callahan"
        ],
        "investors": "Khosla Ventures, Mayfield Fund "
      },
      {
        "position": "CMO",
        "lead": "Richard Lear",
        "recruit": [
          "April King"
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
        "lead": "Tom Callahan",
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
        "lead": "Audrey Shuster",
        "recruit": [
          "Gene Zaccor"
        ],
        "investors": "NSDQ: YHOO"
      },
      {
        "position": "VP Ad Operations",
        "lead": "Audrey Shuster",
        "recruit": [
          "Gene Zaccor"
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
        "lead": "Tom Callahan",
        "recruit": [

        ],
        "investors": "Columbus Venture Capital, Reinet Investments S.C.A."
      },
      {
        "position": "SVP Product Management",
        "lead": "Tom Callahan",
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
        "lead": "Richard Lear",
        "recruit": [
          "Audrey Shuster"
        ],
        "investors": "Azure Capital, Index Ventures, SAP Ventures, Intel Capital, Walden Israel Venture Capital, Greylock Partners, Platinum Neurom Ventures (PNV)"
      },
      {
        "position": "VP Sales",
        "lead": "Richard Lear",
        "recruit": [
          "Audrey Shuster"
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
        "lead": "Gene Zaccor",
        "recruit": [
          "Gene Zaccor"
        ],
        "investors": "Acquired by Checkpoint Software NASDAQ: CHKP"
      },
      {
        "position": "VP Sales",
        "lead": "Richard Lear",
        "recruit": [
          "Gene Zaccor"
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
        "lead": "Mark Hubbell",
        "recruit": [
          "Jule Lock"
        ],
        "investors": "Kleiner Perkins, IVP, Union Square Ventures, Foundry Group, Avalon Ventures, Clarium Capital, Pilot Group, individual Investors"
      },
      {
        "position": "SVP Network Operations",
        "lead": "Mark Hubbell",
        "recruit": [
          "Julie Locke"
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
      var companies = _.clone(assets2);
      return companies.splice(start, max);
    },
  
    getRecentSearches : function () {
      return recent_searches;
    }
  
  }
}();

(function ($) {

  $.renderClientPortfolio = function () {
    var max = Vantage.practice.getNumCompaniesPerColumn(); // we know how many companies we want per column now... 
    var num_cols = Vantage.practice.getNumPortfolioCols();
    var clients = $(".clients", "#logo_content");
    _.each(clients, function(client, idx){
      start = idx * max;
      var sublist = Vantage.practice.getAllCompanies(start, max);
      _.each(sublist, function(list){
        $("<p>",{
          text: list.company
        }).appendTo($(client));
      });
    });
  } 
  
  // any company that gets the category == 1 will be rendered here. 
  // they can be randomly shown or alphabetical... or as a luxury, in a user determined ordering...
  $.renderClientLogos = function(id, category, ordering, curr_page) {
    var setup = (ordering)? ordering : 'alphabetical';
    var page = (curr_page)? curr_page : 1;
    var ROWS = Vantage.practice.getNumRows();
    var COLS = Vantage.practice.getNumCols();
    var internet = Vantage.practice.filterByCategory(category);
    var num_pages = Math.ceil(internet.length / (ROWS*COLS));
    var source_logos = internet.splice((page-1)*(ROWS*COLS), (ROWS*COLS));
    $("#"+id).empty();
    $('<div class="paging"></div><div class="clear"></div>').appendTo("#"+id);
    for(var i = 0, len = ROWS; i < len; i++) {
      var logos = source_logos.splice(0,COLS);
      var blanks = COLS - logos.length;
      _.each(logos, function(logo,idx){
        var klass = logo.name;
        var margin = (!idx)? "alpha" : "";
        if(!margin){
          margin = (idx == 3)? "omega" : "";  
        }
        $("#logoTemplate").tmpl({klass: klass, margin: margin, href: "#"+logo.name, title: logo.name, name: logo.company, details: logo.details}).insertBefore("#"+id+" .paging");
        $("#search_"+logo.name).find(".logo-header").attr("style", "background: url(/images/recent-searches/"+logo.name+".png) 0 0 no-repeat;height: 85px;margin:0 auto;");
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
          $("#logoTemplate").tmpl({klass: "", margin: margin, href: "#", title: "", name: ""}).insertBefore("#"+id+" .paging");
          if(margin == "omega") {
             $("<div>",{
                "class": "spacer"
             }).appendTo("#"+id);
          }
        }
      }
    }
    if(num_pages > 1) {
      for(var i = 0, len = num_pages; i < len; i++) {
        $("#pagingTemplate").tmpl({page: i+1, category: id}).appendTo("#"+id+" .paging");
      }
    }
  }
})(jQuery);

$(function(){
  
  $(".page-link").live('click',function(e){
    e.preventDefault();
    var page = this.href.replace(/.+#/,'');
    var keys = Vantage.practice.getKeys();
    var ref = $(this).attr("ref"); 
    _.each(keys, function(k){
      if(k.name == ref) {
        console.log("category ", ref, k.value);
        $.renderClientLogos(ref, k.value, "alpha", page);
      }
    });
  });
  
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
  $(".lightitupbud").fancybox();
  
  // setup a cycling slidedeck on the recent searchs
  var list = Vantage.practice.getRecentSearches();
  _.each(list, function(rs){
    $("#recentSearchTemplate").tmpl(rs).appendTo("#recent_searches_slidedeck dl");
    $("#recent_searches_slidedeck dd:last").find(".recent_search_logo").attr("style","background: url(/images/recent-searches/"+rs.logo+".png) 0 0 no-repeat; width: 200px; height: 85px");
  });
  
  $("dl.slidedeck").slidedeck({
    speed: 500,
    hideSpines: true,
    autoPlay: true,
    cycle: true
  });
  
}); 
