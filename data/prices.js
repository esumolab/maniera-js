const PRICES = [
  {
    title: {
      pl: "Pielęgnacja rąk i stóp",
      en: "Manicure / Pedicure Care",
    },
    subCategories: [
      {
        title: {
          pl: "Manicure",
          en: "Manicure",
        },
        prices: [
          {
            name: {
              pl: "Manicure HYBRYDOWY",
              en: "Manicure HYBRID",
            },
            price: "150 zł",
          },
          {
            name: {
              pl: "Manicure HYBRYDOWY - z nadbudową płytki bazą",
              en: "Manicure HYBRID - with stronger layer",
            },
            price: "170 zł",
          },
          {
            name: {
              pl: "Manicure Hybrydowy - Styled by Manièra",
              en: "Manicure Hybrid - Styled by Manièra",
            },
            price: "160-180 zł",
          },
          {
            name: {
              pl: "Manicure hybrydowy 2w1",
              en: "Manicure hybrid 2in1 ",
            },
            price: "160 zł",
          },
          {
            name: {
              pl: "Manicure Japoński",
              en: "Manicure Japanese ",
            },
            price: "110 zł",
          },
          {
            name: {
              pl: "Manicure Klasyczny",
              en: "Manicure Classic",
            },
            price: "100 zł",
          },
          {
            name: {
              pl: "Manicure klasyczny 2w1",
              en: "Manicure Classic 2in1 ",
            },
            price: "110 zł",
          },
          {
            name: {
              pl: "Manicure Men",
              en: "Manicure Men ",
            },
            price: "90 zł",
          },
          {
            name: {
              pl: "Manicure men 2w1",
              en: "Manicure men 2in1 ",
            },
            price: "100 zł",
          },
          {
            name: {
              pl: "Manicure odżywczy 2w1",
              en: "Nourishing Manicure 2 in1",
            },
            price: "100 zł",
          },
          {
            name: {
              pl: "Manicure odżywczy ",
              en: "Nourishing Manicure",
            },
            price: "90 zł",
          },
          {
            name: {
              pl: "Spa dla twoich dłoni",
              en: "Spa for your hands",
            },
            price: "50 zł",
          },
          {
            name: {
              pl: "Manicure VINYLUX",
              en: "Manicure VINYLUX",
            },
            price: "110 zł",
          },
          {
            name: {
              pl: "Manicure VINYLUX 2w1",
              en: "Manicure VINYLUX 2in1 ",
            },
            price: "120 zł",
          },
          {
            name: {
              pl: "Zdjęcie hybrydy",
              en: "Remove hybrid",
            },
            price: "30 zł",
          },
        ],
      },

      {
        title: {
          pl: "Przedłużanie paznokci",
          en: "Gel nail extensions",
        },
        prices: [
          {
            name: {
              pl: "Uzupełnienie Żelu (Malowanie Hybrydowe w Cenie)",
              en: "Gel infil",
            },
            price: "220 zł",
          },
          {
            name: {
              pl: "Założenie Żelu (Malowanie Hybrydowe w Cenie",
              en: "Gel nail extensions",
            },
            price: "240 zł",
          },
          {
            name: {
              pl: "Zdjęcie Żelu/Akrylu",
              en: "Remove Gel",
            },
            price: "60 zł",
          },
        ],
      },

      {
        title: {
          pl: "Pedicure",
          en: "Pedicure",
        },
        prices: [
          {
            name: {
              pl: "Kwas na stopy",
              en: "Foot acid",
            },
            price: "100 zł",
          },
          {
            name: {
              pl: "Kwas na stopy - dodatek do pedicure",
              en: "Feet acid - addition to pedicure",
            },
            price: "60 zł",
          },
          {
            name: {
              pl: "Pedicure HYBRYDA",
              en: "Pedicure HYBRID",
            },
            price: "200 zł",
          },
          {
            name: {
              pl: "Pedicure Hybrydowy 2w1",
              en: "Pedicure HYBRID 2in1 ",
            },
            price: "200 zł",
          },
          {
            name: {
              pl: "Pedicure Japoński",
              en: "Pedicure Japanese",
            },
            price: "170 zł",
          },
          {
            name: {
              pl: "Pedicure Klasyczny",
              en: "Pedicure Classic",
            },
            price: "160 zł",
          },
          {
            name: {
              pl: "Pedicure klasyczny 2w1",
              en: "Pedicure Classic 2in1 ",
            },
            price: "160 zł",
          },
          {
            name: {
              pl: "Pedicure Men",
              en: "Pedicure Men ",
            },
            price: "150 zł",
          },
          {
            name: {
              pl: "Pedicure men 2w1",
              en: "Pedicure men 2in1 ",
            },
            price: "150	  zł",
          },
          {
            name: {
              pl: "Pedicure odzywczy/bez koloru",
              en: "Nourishing Pedicure",
            },
            price: "150 zł",
          },
          {
            name: {
              pl: "Pedicure Odżywczy 2w1",
              en: "Nourishing Pedicure 2in1",
            },
            price: "150 zł",
          },
          {
            name: {
              pl: " SPA dla twoich dłoni",
              en: "A spa for your feet",
            },
            price: "50 zł",
          },
          {
            name: {
              pl: "Pedicure VINYLUX",
              en: "Pedicure VINYLUX ",
            },
            price: "170 zł",
          },
          {
            name: {
              pl: "Pedicure VINYLUX 2w1",
              en: "Pedicure VINYLUX 2in1",
            },
            price: "170 zł",
          },
        ],
      },

      {
        title: {
          pl: "Dodatki",
          en: "EXTRAS",
        },
        prices: [
          {
            name: {
              pl: "DODATEK SPA Dłonie",
              en: "SPA Hends",
            },
            price: "50 zł",
          },
          {
            name: {
              pl: "Dodatek SPA Stopy",
              en: "SPA Foot",
            },
            price: "50 zł",
          },
          {
            name: {
              pl: "FRENCH",
              en: "FRENCH",
            },
            price: "30 zł",
          },
          {
            name: {
              pl: "IBX - odbudowa płytki paznokcia",
              en: "IBX - nail repair",
            },
            price: "50 zł",
          },
          {
            name: {
              pl: "Łatka",
              en: "Patch",
            },
            price: "10 zł",
          },
          {
            name: {
              pl: "Nail Art",
              en: "Nail Art",
            },
            price: "30-60 zł",
          },
          {
            name: {
              pl: "Naprawa Paznokcia (Hybryda)",
              en: "Nail repair (Hybryda)",
            },
            price: "30 zł",
          },
          {
            name: {
              pl: "Naprawa Paznokcia (Żel)",
              en: "Nail repair (Gel)",
            },
            price: "40 zł",
          },
          {
            name: {
              pl: "Parafina na dłonie",
              en: "Paraffin for hands",
            },
            price: "50 zł",
          },
        ],
      },
    ],
  },

  {
    title: {
      pl: "Stylizacja Rzęs",
      en: "Eyelash extensions/ eyelash supplement",
    },
    prices: [
      {
        name: {
          pl: "Uzupełnienie Rzęsy 1:1",
          en: "Eyelash fill in 1:1",
        },
        price: "180 zł",
      },
      {
        name: {
          pl: "Uzupełnienie Rzęsy 2:1",
          en: "Eyelash fill in 2:1",
        },
        price: "250 zł",
      },
      {
        name: {
          pl: "Założenie Rzęsy 1:1",
          en: "Eyelash extensions 1:1",
        },
        price: "250 zł",
      },
      {
        name: {
          pl: "Zdjęcie rzęs",
          en: "Remove  eyelash",
        },
        price: "60 zł",
      },
    ],
  },

  {
    title: {
      pl: "Stylizacja Oka",
      en: "Eyebrow and eyelash styling",
    },
    prices: [
      {
        name: {
          pl: "Botoks brwi",
          en: "Eyebrow Botox",
        },
        price: "50 zł",
      },
      {
        name: {
          pl: "Botoks rzęs",
          en: "Eyelash botox",
        },
        price: "50 zł",
      },
      {
        name: {
          pl: "Depilacja brwi woskiem LYCON",
          en: "Eyebrow depilation with LYCON wax",
        },
        price: "50 zł",
      },
      {
        name: {
          pl: "Koloryzacja rzęs",
          en: "Eyelash coloring",
        },
        price: "40 zł",
      },
      {
        name: {
          pl: "Komplet laminacja rzęs + laminacja brwi z koloryzacją 100 min",
          en: "Set of eyelash lamination + eyebrow lamination with coloring",
        },
        price: "380 zł",
      },
      {
        name: {
          pl: "Laminacja brwi bez koloryzacji z regulacją",
          en: "Brow lamination without coloring with regulation",
        },
        price: "170 zł",
      },
      {
        name: {
          pl: "Laminacja brwi z koloryzacją i regulacja",
          en: "Brow lamination with coloring and adjustment",
        },
        price: "210 zł",
      },
      {
        name: {
          pl: "Laminacja rzęs z koloryzacją",
          en: "Eyelash lamination with coloring",
        },
        price: "200 zł",
      },
      {
        name: {
          pl: "Laminacja rzęs z botoksem i koloryzacją",
          en: "Lash lamination with botox and coloring ",
        },
        price: "230 zł",
      },
      {
        name: {
          pl: "Molekularna odnowa brwi bez koloryzacji",
          en: "Molecular eyebrow renewal without coloring",
        },
        price: "190 zł",
      },
      {
        name: {
          pl: "Molekularna odnowa brwi z koloryzacją",
          en: "Molecular renewal of eyebrows with coloring",
        },
        price: "230 zł",
      },
      {
        name: {
          pl: "Molekularna odnowa rzęs z koloryzacją",
          en: "Molecular eyelash renewal with coloring",
        },
        price: "220 zł",
      },
      {
        name: {
          pl: "Nitkowanie brwi",
          en: "Eyebrow threading",
        },
        price: "50 zł",
      },
      {
        name: {
          pl: "Pełna stylizacja brwi - podczas pedicure (pęseta)",
          en: "Full styling of eyebrows - during pedicure (tweezers)",
        },
        price: "100 zł",
      },
      {
        name: {
          pl: "Pełna stylizacja brwi henną / farbką (LYCON, pęseta)",
          en: "Full styling of eyebrows with henna / dye (LYCON, tweezers)",
        },
        price: "90 zł",
      },
      {
        name: {
          pl: "Pełna stylizacja brwi henną / farbką (Nitkowanie)",
          en: "Full styling of eyebrows with henna / dye (Threading)",
        },
        price: "90 zł",
      },
      {
        name: {
          pl: "Regulacja brwi - podczas pedicure (pęseta)",
          en: "Eyebrow regulation - during pedicure (tweezers)",
        },
        price: "60 zł",
      },
      {
        name: {
          pl: "Regulacja brwi dla mężczyzn",
          en: "Eyebrow regulation for men",
        },
        price: "70 zł",
      },
      {
        name: {
          pl: "Regulacja brwi pęsetą",
          en: "Eyebrow regulation (tweezers)",
        },
        price: "50 zł",
      },
    ],
  },
  {
    title: {
      pl: "Pielęgnacja twarzy",
      en: "Facials",
    },
    subCategories: [
      {
        title: {
          pl: "Kosmetologia - terapie indywidualne",
          en: "Cosmetology - individual therapy",
        },
        prices: [
          {
            name: {
              pl: "Konsultacja przed zabiegiem",
              en: "Consultation before the treatment",
            },
            price: "0 zł",
          },
          {
            name: {
              pl: "Terapia antytrądzikowa",
              en: "Anti-acne therapy",
            },
            price: "300-400 zł",
          },
          {
            name: {
              pl: "Terapia nawilżająca/ odświeżająca",
              en: "Moisturizing/refreshing therapy",
            },
            price: "300-600 zł",
          },
          {
            name: {
              pl: "Terapia przeciwstarzeniowa",
              en: "Anti-aging therapy",
            },
            price: "300-600 zł",
          },
          {
            name: {
              pl: "Terapia zmniejszająca blizny i przebarwienia",
              en: "Therapy reducing scars and discoloration",
            },
            price: "300-600 zł",
          },
        ],
      },
      {
        title: {
          pl: "Kosmetologia - Oczyszczanie twarzy",
          en: "Cosmetology - Facial cleansing",
        },
        prices: [
          {
            name: {
              pl: "Oczyszczanie manualne + peeling kwasowy od Holy Land 120 min",
              en: "Manual cleansing + acid peeling from Holy Land",
            },
            price: "350 zł",
          },
        ],
      },
      {
        title: {
          pl: "Kosmetologia - IMAGE",
          en: "Cosmetology - IMAGE",
        },
        prices: [
          {
            name: {
              pl: "Zabieg rozświetlający z 30% witaminą C od IMAGE  60 min",
              en: "Illuminating treatment with 30% vitamin C from IMAGE",
            },
            price: "360 zł",
          },
        ],
      },

      {
        title: {
          pl: "Kosmetologia - SOTHYS",
          en: "Cosmetology - SOTHYS",
        },
        prices: [
          {
            name: {
              pl: "Intensywnie nawilżajacy zabieg - SOTHYS",
              en: "Intensively moisturizing treatment - SOTHYS",
            },
            price: "300 zł",
          },
          {
            name: {
              pl: "Intensywny zabieg odmladzajacy z masażem twarzy od SOTHYS 75 min",
              en: " Intensive rejuvenating treatment with face massage from SOTHYS",
            },
            price: "360 zł",
          },
        ],
      },
      {
        title: {
          pl: "Kosmetologia - Geneo",
          en: "Cosmetology - Geneo",
        },
        prices: [
          {
            name: {
              pl: "Zabieg GENEO+",
              en: "Treatment GENEO+",
            },
            price: "400 zł",
          },
          {
            name: {
              pl: "Zabieg GENEO+ Premium (twarz+szyja+dekolt)",
              en: "Treatment GENEO+ Premium (face+neck+cleavage)",
            },
            price: "450 zł",
          },
        ],
      },

      {
        title: {
          pl: "Kosmetologia - DermaPen",
          en: "Cosmetology - DermaPen",
        },
        prices: [
          {
            name: {
              pl: "DermaPen - twarz",
              en: "DermaPen - face",
            },
            price: "600 zł",
          },
          {
            name: {
              pl: "DermaPen - twarz, szyja, dekolt",
              en: "DermaPen - face+neck+cleavage",
            },
            price: "700 zł",
          },
          {
            name: {
              pl: "DermaPen - plecy",
              en: "DermaPen - back",
            },
            price: "800 zł",
          },
          {
            name: {
              pl: "DermaPen - blizna pojedyncza",
              en: "DermaPen - single scar",
            },
            price: "500 zł",
          },
          {
            name: {
              pl: "DermaPen - ampułka do zabiegu",
              en: "DermaPen - treatment ampoule",
            },
            price: "300 zł",
          },
        ],
      },

      {
        title: {
          pl: "Kosmetologia - Mezoterapia igłowa",
          en: "Cosmetology - Needle Mesotherapy",
        },
        prices: [
          {
            name: {
              pl: "Mezoterapia okolicy oczu",
              en: "Mesotherapy - Eye area",
            },
            price: "300 zł",
          },
          {
            name: {
              pl: "Mezoterapia owłosionej skóry głowy Doctor Cyj",
              en: "Mesotherapy - skin of head Doctor Cyj",
            },
            price: "500 zł",
          },
          {
            name: {
              pl: "Mezoterapia twarz, szyja, dekolt",
              en: "Mesotherapy -  face+neck+cleavage",
            },
            price: "700 zł",
          },
          {
            name: {
              pl: "Mezoterapia twarzy",
              en: "Mesotherapy - face",
            },
            price: "500 zł",
          },
        ],
      },
      {
        title: {
          pl: "Kosmetologia - Stymulatory tkankowe",
          en: "Cosmetology - Tissue stimulators",
        },
        prices: [
          {
            name: {
              pl: "Biostymulator pod oczy",
              en: "Under eye biostimulator",
            },
            price: "400 zł",
          },
          {
            name: {
              pl: "Stymulator tkankowy Ejal - twarz",
              en: "Stymulator  Ejal - face",
            },
            price: "600 zł",
          },
          {
            name: {
              pl: "Stymulator tkankowy Nucleofil strong - twarz",
              en: "Stymulator Nucleofil strong - face",
            },
            price: "800 zł",
          },
          {
            name: {
              pl: "Stymulator tkankowy Profhilo - twarz",
              en: "Stymulator Profhilo - face",
            },
            price: "1500 zł",
          },
        ],
      },

      {
        title: {
          pl: "Kosmetologia- Peelingi chemiczne",
          en: "Cosmetology - Chemical peels",
        },
        prices: [
          {
            name: {
              pl: "PRX-T33 twarz",
              en: "PRX-T33 face ",
            },
            price: "350 zł",
          },
          {
            name: {
              pl: "PRX-T33 twarz, szyja",
              en: "PRX-T33 face, neck",
            },
            price: "400 zł",
          },
          {
            name: {
              pl: "PRX-T33 twarz, szyja, dekolt",
              en: "PRX-T33 face+neck+cleavage",
            },
            price: "450 zł",
          },
          {
            name: {
              pl: "Retix C - zabieg z 4 % retinolem",
              en: "Retix C - treatment with 4 % retinol",
            },
            price: "300 zł",
          },
        ],
      },

      {
        title: {
          pl: "Kosmetologia- Kosmeceutyki DMK",
          en: "Kosmetologia- Kosmeceutyki DMK",
        },
        prices: [
          {
            name: {
              pl: "DMK - kuracja nawilżająco- dotleniająca",
              en: "DMK - moisturizing and oxygenating treatment",
            },
            price: "350 zł",
          },
          {
            name: {
              pl: "DMK - kuracja odmładzająca",
              en: "DMK - Anti-aging therapy",
            },
            price: "500 zł",
          },
          {
            name: {
              pl: "DMK - peelingi chemiczne",
              en: "DMK - chemical peels",
            },
            price: "400 zł",
          },
          {
            name: {
              pl: "DMK- kuracja antytrądzikowa",
              en: "DMK- Anti-acne therapy",
            },
            price: "370 zł",
          },
          {
            name: {
              pl: "DMK- terapia enzymatyczna (przebarwienia)",
              en: "DMK-enzyme therapy (hyperpigmentation)",
            },
            price: "400 zł",
          },
        ],
      },
    ],
  },

  {
    title: {
      pl: "Masaże",
      en: "Massages",
    },
    prices: [
      {
        name: {
          pl: "Masaż Kobido twarzy",
          en: "Kobido face massages",
        },
        price: "350 zł",
      },
      {
        name: {
          pl: "Masaż twarzy Kobido + taping",
          en: "Kobido face massages + taping",
        },
        price: "400 zł",
      },
      {
        name: {
          pl: "Zoga Face Integration - masaż powięziowy twarzy",
          en: "Zoga Face Integration - face massage",
        },
        price: "400 zł",
      },
      {
        name: {
          pl: "Masaż tajski stóp 75 min",
          en: "Thai foot massage",
        },
        price: "260 zł",
      },
      {
        name: {
          pl: "Masaż ciała PeLoHa Peace Love Harmony energetyczne uwolnienie 90 min",
          en: "PeLoHa body massage Peace Love Harmony",
        },
        price: "400 zł",
      },
    ],
  },

  {
    title: {
      pl: "Makijaż Permanentny",
      en: "Permanent Makeup (Prices include correction after 1 month)",
    },
    prices: [
      {
        name: {
          pl: "Konsultacja do Makijażu Permanentnego",
          en: "Permanent makeup consultation",
        },
        price: "0 zł",
      },
      {
        name: {
          pl: "Brwi Metoda pudrowa - Makijaż Permanentny",
          en: "Eyebrows Powder method - Permanent makeup",
        },
        price: "900 zł",
      },
      {
        name: {
          pl: "Korekta Makijażu Permanentnego",
          en: "Permanent makeup correction",
        },
        price: "200 zł",
      },
      {
        name: {
          pl: "Oczy/zagęszczenie lini rzęs - Makijaż Permanentny",
          en: "Eyes / eyelash line  - Permanent makeup",
        },
        price: "700 zł",
      },
      {
        name: {
          pl: "Usta - Makijaz Permanentny",
          en: "Lips - Permanent Makeup",
        },
        price: "900 zł",
      },
    ],
  },
  {
    title: {
      pl: "Depilacja",
      en: "Waxing",
    },
    prices: [
      {
        name: {
          pl: "Bikini Brazilian (Wosk LYCON/ Pasta cukrowa)",
          en: "Brazilian Bikini (LYCON Wax/ Sugar Paste)",
        },
        price: "140 zł",
      },
      {
        name: {
          pl: "Bikini klasyczne (Wosk LYCON/ Pasta cukrowa)",
          en: "Classic bikini (LYCON wax/ sugar paste)",
        },
        price: "90 zł",
      },
      {
        name: {
          pl: "Całe nogi",
          en: "All legs",
        },
        price: "160 zł",
      },
      {
        name: {
          pl: "Całe ręce",
          en: "All arms",
        },
        price: "110 zł",
      },
      {
        name: {
          pl: "Pachy",
          en: "Armpits",
        },
        price: "70 zł",
      },
      {
        name: {
          pl: "Łydki i kolana",
          en: "Calves and knees",
        },
        price: "80 zł",
      },
      {
        name: {
          pl: "Uda",
          en: "Thighs",
        },
        price: "90 zł",
      },
      {
        name: {
          pl: "Cała twarz",
          en: "All face",
        },
        price: "150 zł",
      },
      {
        name: {
          pl: "Wąsik",
          en: "Mustache",
        },
        price: "50 zł",
      },
      {
        name: {
          pl: "Uszy",
          en: "Ears",
        },
        price: "40 zł",
      },
      {
        name: {
          pl: "Baczki",
          en: "Sideburns",
        },
        price: "40 zł",
      },
      {
        name: {
          pl: "Broda",
          en: "Chin",
        },
        price: "40 zł",
      },
      {
        name: {
          pl: "Policzki",
          en: "Cheeks",
        },
        price: "50 zł",
      },
      {
        name: {
          pl: "Nos",
          en: "Nose",
        },
        price: "40 zł",
      },
    ],
  },
  {
    title: {
      pl: "Nitkowanie",
      en: "Threading",
    },
    prices: [
      {
        name: {
          pl: "Nitkowanie brody",
          en: "Beard threading",
        },
        price: "30 zł",
      },
      {
        name: {
          pl: "Nitkowanie policzki",
          en: "Cheek threading",
        },
        price: "50 zł",
      },
      {
        name: {
          pl: "Nitkowanie twarzy",
          en: "Facial threading",
        },
        price: "140 zł",
      },
      {
        name: {
          pl: "Nitkowanie uszy",
          en: "Threading ears",
        },
        price: "30 zł",
      },
      {
        name: {
          pl: "Nitkowanie wąsik",
          en: "Mustache threading",
        },
        price: "30 zł",
      },
    ],
  },
];

export default PRICES;
