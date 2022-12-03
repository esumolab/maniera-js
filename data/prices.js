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
              en: "Manicure HYBRYDOWY",
            },
            price: "150 zł",
          },
          {
            name: {
              pl: "Manicure HYBRYDOWY - z nadbudową płytki bazą",
              en: "Manicure HYBRYDOWY - z nadbudową płytki bazą",
            },
            price: "170 zł",
          },
          {
            name: {
              pl: "Manicure Hybrydowy - Styled by Manièra",
              en: "Manicure Hybrydowy - Styled by Manièra",
            },
            price: "160-180 zł",
          },
          {
            name: {
              pl: "Manicure hybrydowy 2w1",
              en: "Manicure hybrydowy 2w1",
            },
            price: "160 zł",
          },
          {
            name: {
              pl: "Manicure Japoński",
              en: "Manicure Japoński",
            },
            price: "110 zł",
          },
          {
            name: {
              pl: "Manicure Klasyczny",
              en: "Manicure Klasyczny",
            },
            price: "100 zł",
          },
          {
            name: {
              pl: "Manicure klasyczny 2w1",
              en: "Manicure klasyczny 2w1",
            },
            price: "110 zł",
          },
          {
            name: {
              pl: "Manicure Men",
              en: "Manicure Men",
            },
            price: "90 zł",
          },
          {
            name: {
              pl: "Manicure men 2w1",
              en: "Manicure men 2w1",
            },
            price: "100 zł",
          },
          {
            name: {
              pl: "Manicure odżywczy 2w1",
              en: "Manicure odżywczy 2w1",
            },
            price: "100 zł",
          },
          {
            name: {
              pl: "Manicure odżywczy ",
              en: "Manicure odżywczy ",
            },
            price: "90 zł",
          },
          {
            name: {
              pl: "Spa dla twoich dłoni",
              en: "Spa dla twoich dłoni",
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
              en: "Manicure VINYLUX 2w1",
            },
            price: "120 zł",
          },
          {
            name: {
              pl: "Zdjęcie hybrydy",
              en: "Zdjęcie hybrydy",
            },
            price: "30 zł",
          },
        ],
      },
      {
        title: {
          pl: "Przedłużanie paznokci",
          en: "Przedłużanie paznokci",
        },
        prices: [
          {
            name: {
              pl: "Uzupełnienie Żelu (Malowanie Hybrydowe w Cenie)",
              en: "Uzupełnienie Żelu (Malowanie Hybrydowe w Cenie)",
            },
            price: "220 zł",
          },
          {
            name: {
              pl: "Założenie Żelu (Malowanie Hybrydowe w Cenie",
              en: "Założenie Żelu (Malowanie Hybrydowe w Cenie",
            },
            price: "240 zł",
          },
          {
            name: {
              pl: "Zdjęcie Żelu/Akrylu",
              en: "Zdjęcie Żelu/Akrylu",
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
              en: "Kwas na stopy",
            },
            price: "100 zł",
          },
          {
            name: {
              pl: "Kwas na stopy - dodatek do pedicure",
              en: "Kwas na stopy - dodatek do pedicure",
            },
            price: "60 zł",
          },
          {
            name: {
              pl: "Pedicure HYBRYDA",
              en: "Pedicure HYBRYDA",
            },
            price: "200 zł",
          },
          {
            name: {
              pl: "Pedicure Hybrydowy 2w1",
              en: "Pedicure Hybrydowy 2w1",
            },
            price: "200 zł",
          },
          {
            name: {
              pl: "Pedicure Japoński",
              en: "Pedicure Japoński",
            },
            price: "170 zł",
          },
          {
            name: {
              pl: "Pedicure Klasyczny",
              en: "Pedicure Klasyczny",
            },
            price: "160 zł",
          },
          {
            name: {
              pl: "Pedicure klasyczny 2w1",
              en: "Pedicure klasyczny 2w1",
            },
            price: "160 zł",
          },
          {
            name: {
              pl: "Pedicure Men",
              en: "Pedicure Men",
            },
            price: "150 zł",
          },
          {
            name: {
              pl: "Pedicure men 2w1",
              en: "Pedicure men 2w1",
            },
            price: "150	  zł",
          },
          {
            name: {
              pl: "Pedicure odzywczy/bez koloru",
              en: "Pedicure odzywczy/bez koloru",
            },
            price: "150 zł",
          },
          {
            name: {
              pl: "Pedicure Odżywczy 2w1",
              en: "Pedicure Odżywczy 2w1",
            },
            price: "150 zł",
          },
          {
            name: {
              pl: " SPA dla twoich dłoni",
              en: " SPA dla twoich dłoni",
            },
            price: "50 zł",
          },
          {
            name: {
              pl: "Pedicure VINYLUX",
              en: "Pedicure VINYLUX",
            },
            price: "170 zł",
          },
          {
            name: {
              pl: "Pedicure VINYLUX 2w1",
              en: "Pedicure VINYLUX 2w1",
            },
            price: "170 zł",
          },
        ],
      },
      {
        title: {
          pl: "Dodatki",
          en: "Dodatki",
        },
        prices: [
          {
            name: {
              pl: "DODATEK SPA Dłonie",
              en: "DODATEK SPA Dłonie",
            },
            price: "50 zł",
          },
          {
            name: {
              pl: "Dodatek SPA Stopy",
              en: "Dodatek SPA Stopy",
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
              en: "IBX - odbudowa płytki paznokcia",
            },
            price: "50 zł",
          },
          {
            name: {
              pl: "Łatka",
              en: "Łatka",
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
              en: "Naprawa Paznokcia (Hybryda)",
            },
            price: "30 zł",
          },
          {
            name: {
              pl: "Naprawa Paznokcia (Żel)",
              en: "Naprawa Paznokcia (Żel)",
            },
            price: "40 zł",
          },
          {
            name: {
              pl: "Parafina na dłonie",
              en: "Parafina na dłonie",
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
      en: "Eyelash Extensions",
    },
    prices: [
      {
        name: {
          pl: "Uzupełnienie Rzęsy 1:1",
          en: "Uzupełnienie Rzęsy 1:1",
        },
        price: "180 zł",
      },
      {
        name: {
          pl: "Uzupełnienie Rzęsy 2:1",
          en: "Uzupełnienie Rzęsy 2:1",
        },
        price: "250 zł",
      },
      {
        name: {
          pl: "Założenie Rzęsy 1:1",
          en: "Założenie Rzęsy 1:1",
        },
        price: "250 zł",
      },
      {
        name: {
          pl: "Zdjęcie rzęs",
          en: "Zdjęcie rzęs",
        },
        price: "60 zł",
      },
    ],
  },
  {
    title: {
      pl: "Stylizacja Oka",
      en: "Eye Styling",
    },
    prices: [
      {
        name: {
          pl: "Botoks brwi",
          en: "Botoks brwi",
        },
        price: "50 zł",
      },
      {
        name: {
          pl: "Botoks rzęs",
          en: "Botoks rzęs",
        },
        price: "50 zł",
      },
      {
        name: {
          pl: "Depilacja brwi woskiem LYCON",
          en: "Depilacja brwi woskiem LYCON",
        },
        price: "50 zł",
      },
      {
        name: {
          pl: "Koloryzacja rzęs",
          en: "Koloryzacja rzęs",
        },
        price: "40 zł",
      },
      {
        name: {
          pl: "Komplet laminacja rzęs + laminacja brwi z koloryzacją 100 min",
          en: "Komplet laminacja rzęs + laminacja brwi z koloryzacją 100 min",
        },
        price: "380 zł",
      },
      {
        name: {
          pl: "Laminacja brwi bez koloryzacji z regulacją",
          en: "Laminacja brwi bez koloryzacji z regulacją",
        },
        price: "170 zł",
      },
      {
        name: {
          pl: "Laminacja brwi z koloryzacją i regulacja",
          en: "Laminacja brwi z koloryzacją i regulacja",
        },
        price: "210 zł",
      },
      {
        name: {
          pl: "Laminacja rzęs z koloryzacją",
          en: "Laminacja rzęs z koloryzacją",
        },
        price: "200 zł",
      },
      {
        name: {
          pl: "Laminacja rzęs z botoksem i koloryzacją",
          en: "Laminacja rzęs z botoksem i koloryzacją",
        },
        price: "230 zł",
      },
      {
        name: {
          pl: "Molekularna odnowa brwi bez koloryzacji",
          en: "Molekularna odnowa brwi bez koloryzacji",
        },
        price: "190 zł",
      },
      {
        name: {
          pl: "Molekularna odnowa brwi z koloryzacją",
          en: "Molekularna odnowa brwi z koloryzacją",
        },
        price: "230 zł",
      },
      {
        name: {
          pl: "Molekularna odnowa rzęs z koloryzacją",
          en: "Molekularna odnowa rzęs z koloryzacją",
        },
        price: "220 zł",
      },
      {
        name: {
          pl: "Nitkowanie brwi",
          en: "Nitkowanie brwi",
        },
        price: "50 zł",
      },
      {
        name: {
          pl: "Pełna stylizacja brwi - podczas pedicure (pęseta)",
          en: "Pełna stylizacja brwi - podczas pedicure (pęseta)",
        },
        price: "100 zł",
      },
      {
        name: {
          pl: "Pełna stylizacja brwi henną / farbką (LYCON, pęseta)",
          en: "Pełna stylizacja brwi henną / farbką (LYCON, pęseta)",
        },
        price: "90 zł",
      },
      {
        name: {
          pl: "Pełna stylizacja brwi henną / farbką (Nitkowanie)",
          en: "Pełna stylizacja brwi henną / farbką (Nitkowanie)",
        },
        price: "90 zł",
      },
      {
        name: {
          pl: "Regulacja brwi - podczas pedicure (pęseta)",
          en: "Regulacja brwi - podczas pedicure (pęseta)",
        },
        price: "60 zł",
      },
      {
        name: {
          pl: "Regulacja brwi dla mężczyzn",
          en: "Regulacja brwi dla mężczyzn",
        },
        price: "70 zł",
      },
      {
        name: {
          pl: "Regulacja brwi pęsetą",
          en: "Regulacja brwi pęsetą",
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
          en: "Kosmetologia - terapie indywidualne",
        },
        prices: [
          {
            name: {
              pl: "Konsultacja przed zabiegiem",
              pl: "Konsultacja przed zabiegiem",
            },
            price: "0 zł",
          },
          {
            name: {
              pl: "Terapia antytrądzikowa",
              pl: "Terapia antytrądzikowa",
            },
            price: "300-400 zł",
          },
          {
            name: {
              pl: "Terapia nawilżająca/ odświeżająca",
              pl: "Terapia nawilżająca/ odświeżająca",
            },
            price: "300-600 zł",
          },
          {
            name: {
              pl: "Terapia przeciwstarzeniowa",
              pl: "Terapia przeciwstarzeniowa",
            },
            price: "300-600 zł",
          },
          {
            name: {
              pl: "Terapia zmniejszająca blizny i przebarwienia",
              pl: "Terapia zmniejszająca blizny i przebarwienia",
            },
            price: "300-600 zł",
          },
        ],
      },
      {
        title: {
          pl: "Kosmetologia - Oczyszczanie twarzy",
          en: "Kosmetologia - Oczyszczanie twarzy",
        },
        prices: [
          {
            name: {
              pl: "Oczyszczanie manualne + peeling kwasowy od Holy Land 120 min",
              en: "Oczyszczanie manualne + peeling kwasowy od Holy Land 120 min",
            },
            price: "350 zł",
          },
        ],
      },
      {
        title: {
          pl: "Kosmetologia - IMAGE",
          en: "Kosmetologia - IMAGE",
        },
        prices: [
          {
            name: {
              pl: "Zabieg rozświetlający z 30% witaminą C od IMAGE  60 min",
              en: "Zabieg rozświetlający z 30% witaminą C od IMAGE  60 min",
            },
            price: "360 zł",
          },
        ],
      },
      {
        title: {
          pl: "Kosmetologia - SOTHYS",
          en: "Kosmetologia - SOTHYS",
        },
        prices: [
          {
            name: {
              pl: "Intensywnie nawilżajacy zabieg - SOTHYS",
              en: "Intensywnie nawilżajacy zabieg - SOTHYS",
            },
            price: "300 zł",
          },
          {
            name: {
              pl: "Intensywny zabieg odmladzajacy z masażem twarzy od SOTHYS 75 min",
              en: "Intensywny zabieg odmladzajacy z masażem twarzy od SOTHYS 75 min",
            },
            price: "360 zł",
          },
        ],
      },
      {
        title: {
          pl: "Kosmetologia - Geneo",
          en: "Kosmetologia - Geneo",
        },
        prices: [
          {
            name: {
              pl: "Zabieg GENEO+",
              en: "Zabieg GENEO+",
            },
            price: "400 zł",
          },
          {
            name: {
              pl: "Zabieg GENEO+ Premium (twarz+szyja+dekolt)",
              en: "Zabieg GENEO+ Premium (twarz+szyja+dekolt)",
            },
            price: "450 zł",
          },
        ],
      },
      {
        title: {
          pl: "Kosmetologia - DermaPen",
          en: "Kosmetologia - DermaPen",
        },
        prices: [
          {
            name: {
              pl: "DermaPen - twarz",
              en: "DermaPen - twarz",
            },
            price: "600 zł",
          },
          {
            name: {
              pl: "DermaPen - twarz, szyja, dekolt",
              en: "DermaPen - twarz, szyja, dekolt",
            },
            price: "700 zł",
          },
          {
            name: {
              pl: "DermaPen - plecy",
              en: "DermaPen - plecy",
            },
            price: "800 zł",
          },
          {
            name: {
              pl: "DermaPen - blizna pojedyncza",
              en: "DermaPen - blizna pojedyncza",
            },
            price: "500 zł",
          },
          {
            name: {
              pl: "DermaPen - ampułka do zabiegu",
              en: "DermaPen - ampułka do zabiegu",
            },
            price: "300 zł",
          },
        ],
      },
      {
        title: {
          pl: "kosmetologia - Mezoterapia igłowa",
          en: "kosmetologia - Mezoterapia igłowa",
        },
        prices: [
          {
            name: {
              pl: "Mezoterapia okolicy oczu",
              en: "Mezoterapia okolicy oczu",
            },
            price: "300 zł",
          },
          {
            name: {
              pl: "Mezoterapia owłosionej skóry głowy Doctor Cyj",
              en: "Mezoterapia owłosionej skóry głowy Doctor Cyj",
            },
            price: "500 zł",
          },
          {
            name: {
              pl: "Mezoterapia twarz, szyja, dekolt",
              en: "Mezoterapia twarz, szyja, dekolt",
            },
            price: "700 zł",
          },
          {
            name: {
              pl: "Mezoterapia twarzy",
              en: "Mezoterapia twarzy",
            },
            price: "500 zł",
          },
        ],
      },
      {
        title: {
          pl: "Kosmetologia - Stymulatory tkankowe",
          en: "Kosmetologia - Stymulatory tkankowe",
        },
        prices: [
          {
            name: {
              pl: "Biostymulator pod oczy",
              en: "Biostymulator pod oczy",
            },
            price: "400 zł",
          },
          {
            name: {
              pl: "Stymulator tkankowy Ejal - twarz",
              en: "Stymulator tkankowy Ejal - twarz",
            },
            price: "600 zł",
          },
          {
            name: {
              pl: "Stymulator tkankowy Nucleofil strong - twarz",
              en: "Stymulator tkankowy Nucleofil strong - twarz",
            },
            price: "800 zł",
          },
          {
            name: {
              pl: "Stymulator tkankowy Profhilo - twarz",
              en: "Stymulator tkankowy Profhilo - twarz",
            },
            price: "1500 zł",
          },
        ],
      },
      {
        title: {
          pl: "Kosmetologia- Peelingi chemiczne",
          en: "Kosmetologia- Peelingi chemiczne",
        },
        prices: [
          {
            name: {
              pl: "PRX-T33 twarz",
              en: "PRX-T33 twarz",
            },
            price: "350 zł",
          },
          {
            name: {
              pl: "PRX-T33 twarz, szyja",
              en: "PRX-T33 twarz, szyja",
            },
            price: "400 zł",
          },
          {
            name: {
              pl: "PRX-T33 twarz, szyja, dekolt",
              en: "PRX-T33 twarz, szyja, dekolt",
            },
            price: "450 zł",
          },
          {
            name: {
              pl: "Retix C - zabieg z 4 % retinolem",
              en: "Retix C - zabieg z 4 % retinolem",
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
              en: "DMK - kuracja nawilżająco- dotleniająca",
            },
            price: "350 zł",
          },
          {
            name: {
              pl: "DMK - kuracja odmładzająca",
              en: "DMK - kuracja odmładzająca",
            },
            price: "500 zł",
          },
          {
            name: {
              pl: "DMK - peelingi chemiczne",
              en: "DMK - peelingi chemiczne",
            },
            price: "400 zł",
          },
          {
            name: {
              pl: "DMK- kuracja antytrądzikowa",
              en: "DMK- kuracja antytrądzikowa",
            },
            price: "370 zł",
          },
          {
            name: {
              pl: "DMK- terapia enzymatyczna (przebarwienia)",
              en: "DMK- terapia enzymatyczna (przebarwienia)",
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
          en: "Masaż Kobido twarzy",
        },
        price: "350 zł",
      },
      {
        name: {
          pl: "Masaż twarzy Kobido + taping",
          en: "Masaż twarzy Kobido + taping",
        },
        price: "400 zł",
      },
      {
        name: {
          pl: "Zoga Face Integration - masaż powięziowy twarzy",
          en: "Zoga Face Integration - masaż powięziowy twarzy",
        },
        price: "400 zł",
      },
      {
        name: {
          pl: "Masaż tajski stóp 75 min",
          en: "Masaż tajski stóp 75 min",
        },
        price: "260 zł",
      },
      {
        name: {
          pl: "Masaż ciała PeLoHa Peace Love Harmony energetyczne uwolnienie 90 min",
          en: "Masaż ciała PeLoHa Peace Love Harmony energetyczne uwolnienie 90 min",
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
          en: "Konsultacja do Makijażu Permanentnego",
        },
        price: "0 zł",
      },
      {
        name: {
          pl: "Brwi Metoda pudrowa - Makijaż Permanentny",
          en: "Brwi Metoda pudrowa - Makijaż Permanentny",
        },
        price: "900 zł",
      },
      {
        name: {
          pl: "Korekta Makijażu Permanentnego",
          en: "Korekta Makijażu Permanentnego",
        },
        price: "200 zł",
      },
      {
        name: {
          pl: "Oczy/zagęszczenie lini rzęs - Makijaż Permanentny",
          en: "Oczy/zagęszczenie lini rzęs - Makijaż Permanentny",
        },
        price: "700 zł",
      },
      {
        name: {
          pl: "Usta - Makijaz Permanentny",
          en: "Usta - Makijaz Permanentny",
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
          en: "Bikini Brazilian (Wosk LYCON/ Pasta cukrowa)",
        },
        price: "140 zł",
      },
      {
        name: {
          pl: "Bikini klasyczne (Wosk LYCON/ Pasta cukrowa)",
          en: "Bikini klasyczne (Wosk LYCON/ Pasta cukrowa)",
        },
        price: "90 zł",
      },
      {
        name: {
          pl: "Całe nogi",
          en: "Całe nogi",
        },
        price: "160 zł",
      },
      {
        name: {
          pl: "Całe ręce",
          en: "Całe ręce",
        },
        price: "110 zł",
      },
      {
        name: {
          pl: "Pachy",
          en: "Pachy",
        },
        price: "70 zł",
      },
      {
        name: {
          pl: "Łydki i kolana",
          en: "Łydki i kolana",
        },
        price: "80 zł",
      },
      {
        name: {
          pl: "Uda",
          en: "Uda",
        },
        price: "90 zł",
      },
      {
        name: {
          pl: "Cała twarz",
          en: "Cała twarz",
        },
        price: "150 zł",
      },
      {
        name: {
          pl: "Wąsik",
          en: "Wąsik",
        },
        price: "50 zł",
      },
      {
        name: {
          pl: "Uszy",
          en: "Uszy",
        },
        price: "40 zł",
      },
      {
        name: {
          pl: "Baczki",
          en: "Baczki",
        },
        price: "40 zł",
      },
      {
        name: {
          pl: "Broda",
          en: "Broda",
        },
        price: "40 zł",
      },
      {
        name: {
          pl: "Policzki",
          en: "Policzki",
        },
        price: "50 zł",
      },
      {
        name: {
          pl: "Nos",
          en: "Nos",
        },
        price: "40 zł",
      },
    ],
  },
  {
    title: {
      pl: "Nitkowanie",
      en: "Nitkowanie",
    },
    prices: [
      {
        name: {
          pl: "Nitkowanie brody",
          en: "Nitkowanie brody",
        },
        price: "30 zł",
      },
      {
        name: {
          pl: "Nitkowanie policzki",
          en: "Nitkowanie policzki",
        },
        price: "50 zł",
      },
      {
        name: {
          pl: "Nitkowanie twarzy",
          en: "Nitkowanie twarzy",
        },
        price: "140 zł",
      },
      {
        name: {
          pl: "Nitkowanie uszy",
          en: "Nitkowanie uszy",
        },
        price: "30 zł",
      },
      {
        name: {
          pl: "Nitkowanie wąsik",
          en: "Nitkowanie wąsik",
        },
        price: "30 zł",
      },
    ],
  },
];

export default PRICES;
