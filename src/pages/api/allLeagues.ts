import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    return res.status(200).json({
        "popular": [
            {
                "id": 47,
                "name": "Premier League",
                "localizedName": "Premier League",
                "pageUrl": "/leagues/47/overview/premier-league"
            },
            {
                "id": 42,
                "name": "Champions League",
                "localizedName": "Champions League",
                "pageUrl": "/leagues/42/overview/champions-league"
            },
            {
                "id": 131,
                "name": "Liga 1",
                "localizedName": "Liga 1",
                "pageUrl": "/leagues/131/overview/liga-1"
            },
            {
                "id": 87,
                "name": "LaLiga",
                "localizedName": "LaLiga",
                "pageUrl": "/leagues/87/overview/laliga"
            },
            {
                "id": 77,
                "name": "World Cup",
                "localizedName": "Copa del Mundo",
                "pageUrl": "/leagues/77/overview/world-cup"
            },
            {
                "id": 54,
                "name": "Bundesliga",
                "localizedName": "Bundesliga",
                "pageUrl": "/leagues/54/overview/bundesliga"
            },
            {
                "id": 55,
                "name": "Serie A",
                "localizedName": "Serie A",
                "pageUrl": "/leagues/55/overview/serie"
            },
            {
                "id": 73,
                "name": "Europa League",
                "localizedName": "Europa League",
                "pageUrl": "/leagues/73/overview/europa-league"
            },
            {
                "id": 53,
                "name": "Ligue 1",
                "localizedName": "Ligue 1",
                "pageUrl": "/leagues/53/overview/ligue-1"
            },
            {
                "id": 45,
                "name": "Copa Libertadores",
                "localizedName": "Copa Libertadores",
                "pageUrl": "/leagues/45/overview/copa-libertadores"
            }
        ],
        "international": [
            {
                "ccode": "INT",
                "name": "International",
                "leagues": [
                    {
                        "id": 42,
                        "name": "Champions League",
                        "localizedName": "Champions League",
                        "pageUrl": "/leagues/42/overview/champions-league"
                    },
                    {
                        "id": 73,
                        "name": "Europa League",
                        "localizedName": "Europa League",
                        "pageUrl": "/leagues/73/overview/europa-league"
                    },
                    {
                        "id": 9470,
                        "name": "AFC Challenge League",
                        "localizedName": "AFC Challenge League",
                        "pageUrl": "/leagues/9470/overview/afc-challenge-league"
                    },
                    {
                        "id": 525,
                        "name": "AFC Champions League Elite",
                        "localizedName": "AFC Champions League Elite",
                        "pageUrl": "/leagues/525/overview/afc-champions-league-elite"
                    },
                    {
                        "id": 10622,
                        "name": "AFC Champions League Elite Qualification",
                        "localizedName": "AFC Champions League Elite Clasificación",
                        "pageUrl": "/leagues/10622/overview/afc-champions-league-elite-qualification"
                    },
                    {
                        "id": 9469,
                        "name": "AFC Champions League Two",
                        "localizedName": "AFC Champions League Two",
                        "pageUrl": "/leagues/9469/overview/afc-champions-league-two"
                    },
                    {
                        "id": 10511,
                        "name": "AFC Summer Olympics Qualification (Women)",
                        "localizedName": "AFC Summer Olympics Qualification (Women)",
                        "pageUrl": "/leagues/10511/overview/afc-summer-olympics-qualification-women"
                    },
                    {
                        "id": 9841,
                        "name": "AFC U20 Asian Cup",
                        "localizedName": "AFC U20 Asian Cup",
                        "pageUrl": "/leagues/9841/overview/afc-u20-asian-cup"
                    },
                    {
                        "id": 289,
                        "name": "Africa Cup of Nations",
                        "localizedName": "Copa Africana de Naciones",
                        "pageUrl": "/leagues/289/overview/africa-cup-nations"
                    },
                    {
                        "id": 10608,
                        "name": "Africa Cup of Nations Qualification",
                        "localizedName": "Copa Africana de Naciones Clasificación",
                        "pageUrl": "/leagues/10608/overview/africa-cup-nations-qualification"
                    },
                    {
                        "id": 10508,
                        "name": "African Football League",
                        "localizedName": "African Football League",
                        "pageUrl": "/leagues/10508/overview/african-football-league"
                    },
                    {
                        "id": 9428,
                        "name": "African Nations Championship",
                        "localizedName": "African Nations Championship",
                        "pageUrl": "/leagues/9428/overview/african-nations-championship"
                    },
                    {
                        "id": 10474,
                        "name": "Arab Club Champions Cup",
                        "localizedName": "Arab Club Champions Cup",
                        "pageUrl": "/leagues/10474/overview/arab-club-champions-cup"
                    },
                    {
                        "id": 9265,
                        "name": "ASEAN Championship",
                        "localizedName": "ASEAN Championship",
                        "pageUrl": "/leagues/9265/overview/asean-championship"
                    },
                    {
                        "id": 290,
                        "name": "Asian Cup",
                        "localizedName": "Asian Cup",
                        "pageUrl": "/leagues/290/overview/asian-cup"
                    },
                    {
                        "id": 10609,
                        "name": "Asian Cup  Qualification Playoff",
                        "localizedName": "Asian Cup  Qualification Playoff",
                        "pageUrl": "/leagues/10609/overview/asian-cup-qualification-playoff"
                    },
                    {
                        "id": 9833,
                        "name": "Asian Games",
                        "localizedName": "Asian Games",
                        "pageUrl": "/leagues/9833/overview/asian-games"
                    },
                    {
                        "id": 10656,
                        "name": "Beta Squad vs Amp Charity",
                        "localizedName": "Beta Squad vs Amp Charity",
                        "pageUrl": "/leagues/10656/overview/beta-squad-vs-amp-charity"
                    },
                    {
                        "id": 526,
                        "name": "CAF Champions League",
                        "localizedName": "CAF Champions League",
                        "pageUrl": "/leagues/526/overview/caf-champions-league"
                    },
                    {
                        "id": 10619,
                        "name": "CAF Champions League Qualification",
                        "localizedName": "CAF Champions League Clasificación",
                        "pageUrl": "/leagues/10619/overview/caf-champions-league-qualification"
                    },
                    {
                        "id": 9468,
                        "name": "CAF Confed Cup",
                        "localizedName": "CAF Confed Cup",
                        "pageUrl": "/leagues/9468/overview/caf-confed-cup"
                    },
                    {
                        "id": 9467,
                        "name": "CAF Super Cup",
                        "localizedName": "CAF Super Cup",
                        "pageUrl": "/leagues/9467/overview/caf-super-cup"
                    },
                    {
                        "id": 9875,
                        "name": "Campeones Cup",
                        "localizedName": "Campeones Cup",
                        "pageUrl": "/leagues/9875/overview/campeones-cup"
                    },
                    {
                        "id": 10611,
                        "name": "Champions League Qualification",
                        "localizedName": "Champions League Clasificación",
                        "pageUrl": "/leagues/10611/overview/champions-league-qualification"
                    },
                    {
                        "id": 489,
                        "name": "Club Friendlies",
                        "localizedName": "Amistoso entre clubes",
                        "pageUrl": "/leagues/489/overview/club-friendlies"
                    },
                    {
                        "id": 9682,
                        "name": "CONCACAF Central American Cup",
                        "localizedName": "CONCACAF Central American Cup",
                        "pageUrl": "/leagues/9682/overview/concacaf-central-american-cup"
                    },
                    {
                        "id": 297,
                        "name": "CONCACAF Champions Cup",
                        "localizedName": "CONCACAF Champions Cup",
                        "pageUrl": "/leagues/297/overview/concacaf-champions-cup"
                    },
                    {
                        "id": 9656,
                        "name": "CONCACAF Championship U20",
                        "localizedName": "CONCACAF Championship U20",
                        "pageUrl": "/leagues/9656/overview/concacaf-championship-u20"
                    },
                    {
                        "id": 10621,
                        "name": "CONCACAF Championship U20 Qualification",
                        "localizedName": "CONCACAF Championship U20 Clasificación",
                        "pageUrl": "/leagues/10621/overview/concacaf-championship-u20-qualification"
                    },
                    {
                        "id": 298,
                        "name": "CONCACAF Gold Cup",
                        "localizedName": "CONCACAF Gold Cup",
                        "pageUrl": "/leagues/298/overview/concacaf-gold-cup"
                    },
                    {
                        "id": 10603,
                        "name": "CONCACAF Gold Cup Women",
                        "localizedName": "CONCACAF Gold Cup Women",
                        "pageUrl": "/leagues/10603/overview/concacaf-gold-cup-women"
                    },
                    {
                        "id": 9821,
                        "name": "CONCACAF Nations League",
                        "localizedName": "CONCACAF Nations League",
                        "pageUrl": "/leagues/9821/overview/concacaf-nations-league"
                    },
                    {
                        "id": 10216,
                        "name": "Conference League",
                        "localizedName": "Conference League",
                        "pageUrl": "/leagues/10216/overview/conference-league"
                    },
                    {
                        "id": 10615,
                        "name": "Conference League Qualification",
                        "localizedName": "Conference League Clasificación",
                        "pageUrl": "/leagues/10615/overview/conference-league-qualification"
                    },
                    {
                        "id": 44,
                        "name": "Copa America",
                        "localizedName": "Copa America",
                        "pageUrl": "/leagues/44/overview/copa-america"
                    },
                    {
                        "id": 45,
                        "name": "Copa Libertadores",
                        "localizedName": "Copa Libertadores",
                        "pageUrl": "/leagues/45/overview/copa-libertadores"
                    },
                    {
                        "id": 10618,
                        "name": "Copa Libertadores Qualification",
                        "localizedName": "Copa Libertadores Clasificación",
                        "pageUrl": "/leagues/10618/overview/copa-libertadores-qualification"
                    },
                    {
                        "id": 299,
                        "name": "Copa Sudamericana",
                        "localizedName": "Copa Sudamericana",
                        "pageUrl": "/leagues/299/overview/copa-sudamericana"
                    },
                    {
                        "id": 10623,
                        "name": "Copa Sudamericana Qualification",
                        "localizedName": "Copa Sudamericana Clasificación",
                        "pageUrl": "/leagues/10623/overview/copa-sudamericana-qualification"
                    },
                    {
                        "id": 9849,
                        "name": "COSAFA Cup",
                        "localizedName": "COSAFA Cup",
                        "pageUrl": "/leagues/9849/overview/cosafa-cup"
                    },
                    {
                        "id": 50,
                        "name": "EURO",
                        "localizedName": "Eurocopa",
                        "pageUrl": "/leagues/50/overview/euro"
                    },
                    {
                        "id": 10607,
                        "name": "EURO Qualification",
                        "localizedName": "EURO Clasificación",
                        "pageUrl": "/leagues/10607/overview/euro-qualification"
                    },
                    {
                        "id": 301,
                        "name": "EURO U17",
                        "localizedName": "EURO U17",
                        "pageUrl": "/leagues/301/overview/euro-u17"
                    },
                    {
                        "id": 287,
                        "name": "EURO U19",
                        "localizedName": "EURO U19",
                        "pageUrl": "/leagues/287/overview/euro-u19"
                    },
                    {
                        "id": 288,
                        "name": "EURO U21",
                        "localizedName": "EURO U21",
                        "pageUrl": "/leagues/288/overview/euro-u21"
                    },
                    {
                        "id": 10437,
                        "name": "EURO U-21 Qualification",
                        "localizedName": "EURO U-21 Clasificación",
                        "pageUrl": "/leagues/10437/overview/euro-u-21-qualification"
                    },
                    {
                        "id": 10613,
                        "name": "Europa League Qualification",
                        "localizedName": "Europa League Clasificación",
                        "pageUrl": "/leagues/10613/overview/europa-league-qualification"
                    },
                    {
                        "id": 10242,
                        "name": "FIFA Arab Cup",
                        "localizedName": "FIFA Arab Cup",
                        "pageUrl": "/leagues/10242/overview/fifa-arab-cup"
                    },
                    {
                        "id": 78,
                        "name": "FIFA Club World Cup",
                        "localizedName": "Copa Mundial de Clubes de la FIFA",
                        "pageUrl": "/leagues/78/overview/fifa-club-world-cup"
                    },
                    {
                        "id": 10913,
                        "name": "FIFA Club World Cup Qualification",
                        "localizedName": "FIFA Club World Cup Clasificación",
                        "pageUrl": "/leagues/10913/overview/fifa-club-world-cup-qualification"
                    },
                    {
                        "id": 10703,
                        "name": "FIFA Intercontinental Cup",
                        "localizedName": "FIFA Intercontinental Cup",
                        "pageUrl": "/leagues/10703/overview/fifa-intercontinental-cup"
                    },
                    {
                        "id": 114,
                        "name": "Friendlies",
                        "localizedName": "Amistoso",
                        "pageUrl": "/leagues/114/overview/friendlies"
                    },
                    {
                        "id": 344,
                        "name": "Friendlies U-21",
                        "localizedName": "Amistoso sub-21",
                        "pageUrl": "/leagues/344/overview/friendlies-u-21"
                    },
                    {
                        "id": 329,
                        "name": "Gulf Cup",
                        "localizedName": "Gulf Cup",
                        "pageUrl": "/leagues/329/overview/gulf-cup"
                    },
                    {
                        "id": 10043,
                        "name": "Leagues Cup",
                        "localizedName": "Leagues Cup",
                        "pageUrl": "/leagues/10043/overview/leagues-cup"
                    },
                    {
                        "id": 305,
                        "name": "Maurice Revello Tournament ",
                        "localizedName": "Maurice Revello Tournament ",
                        "pageUrl": "/leagues/305/overview/maurice-revello-tournament"
                    },
                    {
                        "id": 10649,
                        "name": "NWSL x Liga MX",
                        "localizedName": "NWSL x Liga MX",
                        "pageUrl": "/leagues/10649/overview/nwsl-x-liga-mx"
                    },
                    {
                        "id": 491,
                        "name": "Recopa Sudamericana",
                        "localizedName": "Recopa Sudamericana",
                        "pageUrl": "/leagues/491/overview/recopa-sudamericana"
                    },
                    {
                        "id": 9876,
                        "name": "SAFF Championship",
                        "localizedName": "SAFF Championship",
                        "pageUrl": "/leagues/9876/overview/saff-championship"
                    },
                    {
                        "id": 9921,
                        "name": "SheBelieves Cup (W)",
                        "localizedName": "SheBelieves Cup (W)",
                        "pageUrl": "/leagues/9921/overview/shebelieves-cup"
                    },
                    {
                        "id": 10312,
                        "name": "Sidemen Charity Match",
                        "localizedName": "Sidemen Charity Match",
                        "pageUrl": "/leagues/10312/overview/sidemen-charity-match"
                    },
                    {
                        "id": 9690,
                        "name": "Southeast Asian Games",
                        "localizedName": "Southeast Asian Games",
                        "pageUrl": "/leagues/9690/overview/southeast-asian-games"
                    },
                    {
                        "id": 66,
                        "name": "Summer Olympics",
                        "localizedName": "Juegos Olímpicos",
                        "pageUrl": "/leagues/66/overview/summer-olympics"
                    },
                    {
                        "id": 65,
                        "name": "Summer Olympics (Women)",
                        "localizedName": "Juegos Olímpicos – Femenil",
                        "pageUrl": "/leagues/65/overview/summer-olympics-women"
                    },
                    {
                        "id": 10498,
                        "name": "Summer Olympics Qualification CONCACAF (W)",
                        "localizedName": "Summer Olympics Qualification CONCACAF (W)",
                        "pageUrl": "/leagues/10498/overview/summer-olympics-qualification-concacaf"
                    },
                    {
                        "id": 9514,
                        "name": "The Atlantic Cup",
                        "localizedName": "The Atlantic Cup",
                        "pageUrl": "/leagues/9514/overview/atlantic-cup"
                    },
                    {
                        "id": 9806,
                        "name": "UEFA Nations League A",
                        "localizedName": "UEFA Nations League A",
                        "pageUrl": "/leagues/9806/overview/uefa-nations-league"
                    },
                    {
                        "id": 10557,
                        "name": "UEFA Nations League A Qualification",
                        "localizedName": "UEFA Nations League A Qualification",
                        "pageUrl": "/leagues/10557/overview/uefa-nations-league-qualification"
                    },
                    {
                        "id": 10717,
                        "name": "UEFA Nations League A Qualification",
                        "localizedName": "UEFA Nations League A Clasificación",
                        "pageUrl": "/leagues/10717/overview/uefa-nations-league-qualification"
                    },
                    {
                        "id": 9807,
                        "name": "UEFA Nations League B",
                        "localizedName": "UEFA Nations League B",
                        "pageUrl": "/leagues/9807/overview/uefa-nations-league-b"
                    },
                    {
                        "id": 10558,
                        "name": "UEFA Nations League B Qualification",
                        "localizedName": "UEFA Nations League B Qualification",
                        "pageUrl": "/leagues/10558/overview/uefa-nations-league-b-qualification"
                    },
                    {
                        "id": 10718,
                        "name": "UEFA Nations League B Qualification",
                        "localizedName": "UEFA Nations League B Clasificación",
                        "pageUrl": "/leagues/10718/overview/uefa-nations-league-b-qualification"
                    },
                    {
                        "id": 10458,
                        "name": "UEFA Nations League B Women",
                        "localizedName": "UEFA Nations League B Women",
                        "pageUrl": "/leagues/10458/overview/uefa-nations-league-b-women"
                    },
                    {
                        "id": 9808,
                        "name": "UEFA Nations League C",
                        "localizedName": "UEFA Nations League C",
                        "pageUrl": "/leagues/9808/overview/uefa-nations-league-c"
                    },
                    {
                        "id": 10719,
                        "name": "UEFA Nations League C Qualification",
                        "localizedName": "UEFA Nations League C Clasificación",
                        "pageUrl": "/leagues/10719/overview/uefa-nations-league-c-qualification"
                    },
                    {
                        "id": 10459,
                        "name": "UEFA Nations League C Women",
                        "localizedName": "UEFA Nations League C Women",
                        "pageUrl": "/leagues/10459/overview/uefa-nations-league-c-women"
                    },
                    {
                        "id": 9809,
                        "name": "UEFA Nations League D",
                        "localizedName": "UEFA Nations League D",
                        "pageUrl": "/leagues/9809/overview/uefa-nations-league-d"
                    },
                    {
                        "id": 74,
                        "name": "UEFA Super Cup",
                        "localizedName": "UEFA Super Cup",
                        "pageUrl": "/leagues/74/overview/uefa-super-cup"
                    },
                    {
                        "id": 10457,
                        "name": "UEFA Women's Nations League A",
                        "localizedName": "UEFA Women's Nations League A",
                        "pageUrl": "/leagues/10457/overview/uefa-womens-nations-league"
                    },
                    {
                        "id": 9741,
                        "name": "UEFA Youth League",
                        "localizedName": "Liga Juvenil de la UEFA",
                        "pageUrl": "/leagues/9741/overview/uefa-youth-league"
                    },
                    {
                        "id": 9375,
                        "name": "Women's Champions League",
                        "localizedName": "Liga de Campeones Femenina",
                        "pageUrl": "/leagues/9375/overview/womens-champions-league"
                    },
                    {
                        "id": 10612,
                        "name": "Women's Champions League Qualification",
                        "localizedName": "Women's Champions League Clasificación",
                        "pageUrl": "/leagues/10612/overview/womens-champions-league-qualification"
                    },
                    {
                        "id": 292,
                        "name": "Women's EURO",
                        "localizedName": "EURO Femenil de la UEFA",
                        "pageUrl": "/leagues/292/overview/womens-euro"
                    },
                    {
                        "id": 10640,
                        "name": "Women's EURO Qualification League A",
                        "localizedName": "Women's EURO Qualification League A",
                        "pageUrl": "/leagues/10640/overview/womens-euro-qualification-league"
                    },
                    {
                        "id": 10641,
                        "name": "Women's EURO Qualification League B",
                        "localizedName": "Women's EURO Qualification League B",
                        "pageUrl": "/leagues/10641/overview/womens-euro-qualification-league-b"
                    },
                    {
                        "id": 10642,
                        "name": "Women's EURO Qualification League C",
                        "localizedName": "Women's EURO Qualification League C",
                        "pageUrl": "/leagues/10642/overview/womens-euro-qualification-league-c"
                    },
                    {
                        "id": 293,
                        "name": "Women's Friendlies",
                        "localizedName": "Amistoso Femenil",
                        "pageUrl": "/leagues/293/overview/womens-friendlies"
                    },
                    {
                        "id": 76,
                        "name": "Women's World Cup",
                        "localizedName": "Mundial Femenil",
                        "pageUrl": "/leagues/76/overview/womens-world-cup"
                    },
                    {
                        "id": 77,
                        "name": "World Cup",
                        "localizedName": "Copa del Mundo",
                        "pageUrl": "/leagues/77/overview/world-cup"
                    },
                    {
                        "id": 10359,
                        "name": "World Cup Qualification (W) Inter-Confederation",
                        "localizedName": "World Cup Clasificación (W) Inter-Confederation",
                        "pageUrl": "/leagues/10359/overview/world-cup-qualification-inter-confederation"
                    },
                    {
                        "id": 10197,
                        "name": "World Cup Qualification AFC",
                        "localizedName": "World Cup Clasificación AFC",
                        "pageUrl": "/leagues/10197/overview/world-cup-qualification-afc"
                    },
                    {
                        "id": 10196,
                        "name": "World Cup Qualification CAF",
                        "localizedName": "World Cup Clasificación CAF",
                        "pageUrl": "/leagues/10196/overview/world-cup-qualification-caf"
                    },
                    {
                        "id": 10198,
                        "name": "World Cup Qualification CONCACAF",
                        "localizedName": "World Cup Clasificación CONCACAF",
                        "pageUrl": "/leagues/10198/overview/world-cup-qualification-concacaf"
                    },
                    {
                        "id": 10199,
                        "name": "World Cup Qualification CONMEBOL",
                        "localizedName": "World Cup Clasificación CONMEBOL",
                        "pageUrl": "/leagues/10199/overview/world-cup-qualification-conmebol"
                    },
                    {
                        "id": 10201,
                        "name": "World Cup Qualification Inter-confederation",
                        "localizedName": "World Cup Clasificación Inter-confederation",
                        "pageUrl": "/leagues/10201/overview/world-cup-qualification-inter-confederation"
                    },
                    {
                        "id": 10200,
                        "name": "World Cup Qualification OFC",
                        "localizedName": "World Cup Clasificación OFC",
                        "pageUrl": "/leagues/10200/overview/world-cup-qualification-ofc"
                    },
                    {
                        "id": 10195,
                        "name": "World Cup Qualification UEFA",
                        "localizedName": "World Cup Clasificación UEFA",
                        "pageUrl": "/leagues/10195/overview/world-cup-qualification-uefa"
                    },
                    {
                        "id": 306,
                        "name": "World Cup U17",
                        "localizedName": "World Cup U17",
                        "pageUrl": "/leagues/306/overview/world-cup-u17"
                    },
                    {
                        "id": 296,
                        "name": "World Cup U20",
                        "localizedName": "World Cup U20",
                        "pageUrl": "/leagues/296/overview/world-cup-u20"
                    }
                ],
                "localizedName": "Internacional"
            }
        ],
        "countries": [
            {
                "ccode": "ALB",
                "name": "Albania",
                "leagues": [
                    {
                        "id": 260,
                        "name": "Kategoria Superiore",
                        "localizedName": "Kategoria Superiore",
                        "pageUrl": "/leagues/260/overview/kategoria-superiore"
                    },
                    {
                        "id": 9173,
                        "name": "Superiore Qualification",
                        "localizedName": "Superiore Clasificación",
                        "pageUrl": "/leagues/9173/overview/superiore-qualification"
                    },
                    {
                        "id": 10175,
                        "name": "Superkupa e Shqipërisë",
                        "localizedName": "Superkupa e Shqipërisë",
                        "pageUrl": "/leagues/10175/overview/superkupa-e-shqiperise"
                    }
                ],
                "localizedName": "Albania"
            },
            {
                "ccode": "GER",
                "name": "Germany",
                "leagues": [
                    {
                        "id": 54,
                        "name": "Bundesliga",
                        "localizedName": "Bundesliga",
                        "pageUrl": "/leagues/54/overview/bundesliga"
                    },
                    {
                        "id": 146,
                        "name": "2. Bundesliga",
                        "localizedName": "2. Bundesliga",
                        "pageUrl": "/leagues/146/overview/2-bundesliga"
                    },
                    {
                        "id": 208,
                        "name": "3. Liga",
                        "localizedName": "3. Liga",
                        "pageUrl": "/leagues/208/overview/3-liga"
                    },
                    {
                        "id": 209,
                        "name": "DFB Pokal",
                        "localizedName": "DFB Pokal",
                        "pageUrl": "/leagues/209/overview/dfb-pokal"
                    },
                    {
                        "id": 512,
                        "name": "Regionalliga",
                        "localizedName": "Regionalliga",
                        "pageUrl": "/leagues/512/overview/regionalliga"
                    },
                    {
                        "id": 9081,
                        "name": "Bundesliga Qualification",
                        "localizedName": "Bundesliga Clasificación",
                        "pageUrl": "/leagues/9081/overview/bundesliga-qualification"
                    },
                    {
                        "id": 9734,
                        "name": "2. Bundesliga Qualification",
                        "localizedName": "2. Bundesliga Clasificación",
                        "pageUrl": "/leagues/9734/overview/2-bundesliga-qualification"
                    },
                    {
                        "id": 10022,
                        "name": "Regionalliga Qualification",
                        "localizedName": "Regionalliga Clasificación",
                        "pageUrl": "/leagues/10022/overview/regionalliga-qualification"
                    },
                    {
                        "id": 8924,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/8924/overview/super-cup"
                    },
                    {
                        "id": 9676,
                        "name": "Frauen Bundesliga",
                        "localizedName": "Frauen Bundesliga",
                        "pageUrl": "/leagues/9676/overview/frauen-bundesliga"
                    },
                    {
                        "id": 10840,
                        "name": "Baller League",
                        "localizedName": "Baller League",
                        "pageUrl": "/leagues/10840/overview/baller-league"
                    },
                    {
                        "id": 10650,
                        "name": "DFB Pokal Frauen",
                        "localizedName": "DFB Pokal Frauen",
                        "pageUrl": "/leagues/10650/overview/dfb-pokal-frauen"
                    }
                ],
                "localizedName": "Alemania"
            },
            {
                "ccode": "KSA",
                "name": "Saudi Arabia",
                "leagues": [
                    {
                        "id": 536,
                        "name": "Saudi Pro League",
                        "localizedName": "Saudi Pro League",
                        "pageUrl": "/leagues/536/overview/saudi-pro-league"
                    },
                    {
                        "id": 9942,
                        "name": "King's Cup",
                        "localizedName": "King's Cup",
                        "pageUrl": "/leagues/9942/overview/kings-cup"
                    },
                    {
                        "id": 10074,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/10074/overview/super-cup"
                    },
                    {
                        "id": 10783,
                        "name": "Women's Premier League",
                        "localizedName": "Women's Premier League",
                        "pageUrl": "/leagues/10783/overview/womens-premier-league"
                    }
                ],
                "localizedName": "Arabia Saudí"
            },
            {
                "ccode": "ALG",
                "name": "Algeria",
                "leagues": [
                    {
                        "id": 516,
                        "name": "Ligue 1",
                        "localizedName": "Ligue 1",
                        "pageUrl": "/leagues/516/overview/ligue-1"
                    }
                ],
                "localizedName": "Argelia"
            },
            {
                "ccode": "ARG",
                "name": "Argentina",
                "leagues": [
                    {
                        "id": 112,
                        "name": "Liga Profesional",
                        "localizedName": "Liga Profesional",
                        "pageUrl": "/leagues/112/overview/liga-profesional"
                    },
                    {
                        "id": 8965,
                        "name": "Primera B Nacional",
                        "localizedName": "Primera B Nacional",
                        "pageUrl": "/leagues/8965/overview/primera-b-nacional"
                    },
                    {
                        "id": 9213,
                        "name": "Primera B Metropolitana & Torneo Federal A",
                        "localizedName": "Primera B Metropolitana & Torneo Federal A",
                        "pageUrl": "/leagues/9213/overview/primera-b-metropolitana-torneo-federal"
                    },
                    {
                        "id": 9305,
                        "name": "Copa Argentina",
                        "localizedName": "Copa Argentina",
                        "pageUrl": "/leagues/9305/overview/copa-argentina"
                    },
                    {
                        "id": 9381,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/9381/overview/super-cup"
                    },
                    {
                        "id": 9170,
                        "name": "Argentina Promotion/Relegation",
                        "localizedName": "Argentina Promotion/Relegation",
                        "pageUrl": "/leagues/9170/overview/argentina-promotionrelegation"
                    },
                    {
                        "id": 10007,
                        "name": "Copa de la Liga Profesional",
                        "localizedName": "Copa de la Liga Profesional",
                        "pageUrl": "/leagues/10007/overview/copa-de-la-liga-profesional"
                    },
                    {
                        "id": 10832,
                        "name": "Supercopa",
                        "localizedName": "Supercopa",
                        "pageUrl": "/leagues/10832/overview/supercopa"
                    },
                    {
                        "id": 10075,
                        "name": "Torneo de Verano",
                        "localizedName": "Torneo de Verano",
                        "pageUrl": "/leagues/10075/overview/torneo-de-verano"
                    },
                    {
                        "id": 10053,
                        "name": "Trofeo de Campeones",
                        "localizedName": "Trofeo de Campeones",
                        "pageUrl": "/leagues/10053/overview/trofeo-de-campeones"
                    }
                ],
                "localizedName": "Argentina"
            },
            {
                "ccode": "ARM",
                "name": "Armenia",
                "leagues": [
                    {
                        "id": 118,
                        "name": "Premier League",
                        "localizedName": "Premier League",
                        "pageUrl": "/leagues/118/overview/premier-league"
                    }
                ],
                "localizedName": "Armenia"
            },
            {
                "ccode": "AUS",
                "name": "Australia",
                "leagues": [
                    {
                        "id": 113,
                        "name": "A-League",
                        "localizedName": "A-League",
                        "pageUrl": "/leagues/113/overview/league"
                    },
                    {
                        "id": 9495,
                        "name": "A-League Women",
                        "localizedName": "A-League Women",
                        "pageUrl": "/leagues/9495/overview/league-women"
                    },
                    {
                        "id": 9471,
                        "name": "Australia Cup",
                        "localizedName": "Australia Cup",
                        "pageUrl": "/leagues/9471/overview/australia-cup"
                    }
                ],
                "localizedName": "Australia"
            },
            {
                "ccode": "AUT",
                "name": "Austria",
                "leagues": [
                    {
                        "id": 38,
                        "name": "Bundesliga",
                        "localizedName": "Bundesliga",
                        "pageUrl": "/leagues/38/overview/bundesliga"
                    },
                    {
                        "id": 119,
                        "name": "2. Liga",
                        "localizedName": "2. Liga",
                        "pageUrl": "/leagues/119/overview/2-liga"
                    },
                    {
                        "id": 278,
                        "name": "Austrian Cup",
                        "localizedName": "Austrian Cup",
                        "pageUrl": "/leagues/278/overview/austrian-cup"
                    }
                ],
                "localizedName": "Austria"
            },
            {
                "ccode": "AZE",
                "name": "Azerbaijan",
                "leagues": [
                    {
                        "id": 262,
                        "name": "Premier League",
                        "localizedName": "Premier League",
                        "pageUrl": "/leagues/262/overview/premier-league"
                    }
                ],
                "localizedName": "Azerbaiyán"
            },
            {
                "ccode": "BAN",
                "name": "Bangladesh",
                "leagues": [
                    {
                        "id": 10443,
                        "name": "Premier League",
                        "localizedName": "Premier League",
                        "pageUrl": "/leagues/10443/overview/premier-league"
                    }
                ],
                "localizedName": "Bangladés"
            },
            {
                "ccode": "BLR",
                "name": "Belarus",
                "leagues": [
                    {
                        "id": 263,
                        "name": "Premier League",
                        "localizedName": "Premier League",
                        "pageUrl": "/leagues/263/overview/premier-league"
                    },
                    {
                        "id": 9255,
                        "name": "Premier League qualification",
                        "localizedName": "Premier League qualification",
                        "pageUrl": "/leagues/9255/overview/premier-league-qualification"
                    },
                    {
                        "id": 9521,
                        "name": "Belarusian Cup",
                        "localizedName": "Belarusian Cup",
                        "pageUrl": "/leagues/9521/overview/belarusian-cup"
                    },
                    {
                        "id": 9658,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/9658/overview/super-cup"
                    }
                ],
                "localizedName": "Bielorrusia"
            },
            {
                "ccode": "BOL",
                "name": "Bolivia",
                "leagues": [
                    {
                        "id": 144,
                        "name": "Primera Division",
                        "localizedName": "Primera Division",
                        "pageUrl": "/leagues/144/overview/primera-division"
                    },
                    {
                        "id": 9334,
                        "name": "Primera Division Qualification",
                        "localizedName": "Primera Division Clasificación",
                        "pageUrl": "/leagues/9334/overview/primera-division-qualification"
                    }
                ],
                "localizedName": "Bolivia"
            },
            {
                "ccode": "BIH",
                "name": "Bosnia-Herzegovina",
                "leagues": [
                    {
                        "id": 267,
                        "name": "Premier League",
                        "localizedName": "Premier League",
                        "pageUrl": "/leagues/267/overview/premier-league"
                    }
                ],
                "localizedName": "Bosnia-Herzegovina"
            },
            {
                "ccode": "BRA",
                "name": "Brazil",
                "leagues": [
                    {
                        "id": 268,
                        "name": "Serie A",
                        "localizedName": "Serie A",
                        "pageUrl": "/leagues/268/overview/serie"
                    },
                    {
                        "id": 8814,
                        "name": "Serie B",
                        "localizedName": "Serie B",
                        "pageUrl": "/leagues/8814/overview/serie-b"
                    },
                    {
                        "id": 8971,
                        "name": "Serie C",
                        "localizedName": "Serie C",
                        "pageUrl": "/leagues/8971/overview/serie-c"
                    },
                    {
                        "id": 9067,
                        "name": "Copa do Brasil",
                        "localizedName": "Copa do Brasil",
                        "pageUrl": "/leagues/9067/overview/copa-do-brasil"
                    },
                    {
                        "id": 9429,
                        "name": "Copa do Nordeste",
                        "localizedName": "Copa do Nordeste",
                        "pageUrl": "/leagues/9429/overview/copa-do-nordeste"
                    },
                    {
                        "id": 10077,
                        "name": "Supercopa do Brasil",
                        "localizedName": "Supercopa do Brasil",
                        "pageUrl": "/leagues/10077/overview/supercopa-do-brasil"
                    },
                    {
                        "id": 10290,
                        "name": "Baiano",
                        "localizedName": "Baiano",
                        "pageUrl": "/leagues/10290/overview/baiano"
                    },
                    {
                        "id": 10272,
                        "name": "Carioca",
                        "localizedName": "Carioca",
                        "pageUrl": "/leagues/10272/overview/carioca"
                    },
                    {
                        "id": 10274,
                        "name": "Gaúcho",
                        "localizedName": "Gaúcho",
                        "pageUrl": "/leagues/10274/overview/gaucho"
                    },
                    {
                        "id": 10291,
                        "name": "Goiano",
                        "localizedName": "Goiano",
                        "pageUrl": "/leagues/10291/overview/goiano"
                    },
                    {
                        "id": 10273,
                        "name": "Mineiro",
                        "localizedName": "Mineiro",
                        "pageUrl": "/leagues/10273/overview/mineiro"
                    },
                    {
                        "id": 10244,
                        "name": "Paulista A1",
                        "localizedName": "Paulista A1",
                        "pageUrl": "/leagues/10244/overview/paulista-a1"
                    },
                    {
                        "id": 10078,
                        "name": "Recopa Gaúcha",
                        "localizedName": "Recopa Gaúcha",
                        "pageUrl": "/leagues/10078/overview/recopa-gaucha"
                    }
                ],
                "localizedName": "Brasil"
            },
            {
                "ccode": "BUL",
                "name": "Bulgaria",
                "leagues": [
                    {
                        "id": 270,
                        "name": "First Professional League",
                        "localizedName": "First Professional League",
                        "pageUrl": "/leagues/270/overview/first-professional-league"
                    },
                    {
                        "id": 271,
                        "name": "Bulgarian Cup",
                        "localizedName": "Bulgarian Cup",
                        "pageUrl": "/leagues/271/overview/bulgarian-cup"
                    },
                    {
                        "id": 9584,
                        "name": "First professional league Qualification",
                        "localizedName": "First professional league Qualification",
                        "pageUrl": "/leagues/9584/overview/first-professional-league-qualification"
                    },
                    {
                        "id": 9096,
                        "name": "Second Professional League",
                        "localizedName": "Second Professional League",
                        "pageUrl": "/leagues/9096/overview/second-professional-league"
                    },
                    {
                        "id": 272,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/272/overview/super-cup"
                    }
                ],
                "localizedName": "Bulgaria"
            },
            {
                "ccode": "BEL",
                "name": "Belgium",
                "leagues": [
                    {
                        "id": 40,
                        "name": "First Division A",
                        "localizedName": "First Division A",
                        "pageUrl": "/leagues/40/overview/first-division"
                    },
                    {
                        "id": 149,
                        "name": "Belgian Cup",
                        "localizedName": "Belgian Cup",
                        "pageUrl": "/leagues/149/overview/belgian-cup"
                    },
                    {
                        "id": 41,
                        "name": "First Division A Qualification",
                        "localizedName": "First Division A Clasificación",
                        "pageUrl": "/leagues/41/overview/first-division-qualification"
                    },
                    {
                        "id": 264,
                        "name": "First Division B",
                        "localizedName": "First Division B",
                        "pageUrl": "/leagues/264/overview/first-division-b"
                    },
                    {
                        "id": 266,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/266/overview/super-cup"
                    }
                ],
                "localizedName": "Bélgica"
            },
            {
                "ccode": "CAN",
                "name": "Canada",
                "leagues": [
                    {
                        "id": 9986,
                        "name": "Premier League",
                        "localizedName": "Premier League",
                        "pageUrl": "/leagues/9986/overview/premier-league"
                    },
                    {
                        "id": 9837,
                        "name": "Canadian Championship",
                        "localizedName": "Canadian Championship",
                        "pageUrl": "/leagues/9837/overview/canadian-championship"
                    },
                    {
                        "id": 10872,
                        "name": "Northern Super League",
                        "localizedName": "Northern Super League",
                        "pageUrl": "/leagues/10872/overview/northern-super-league"
                    }
                ],
                "localizedName": "Canadá"
            },
            {
                "ccode": "QAT",
                "name": "Qatar",
                "leagues": [
                    {
                        "id": 535,
                        "name": "Qatar Stars League",
                        "localizedName": "Qatar Stars League",
                        "pageUrl": "/leagues/535/overview/qatar-stars-league"
                    },
                    {
                        "id": 9661,
                        "name": "Qualification",
                        "localizedName": "Clasificación",
                        "pageUrl": "/leagues/9661/overview/qualification"
                    }
                ],
                "localizedName": "Catar"
            },
            {
                "ccode": "CZE",
                "name": "Czechia",
                "leagues": [
                    {
                        "id": 122,
                        "name": "1. Liga",
                        "localizedName": "1. Liga",
                        "pageUrl": "/leagues/122/overview/1-liga"
                    },
                    {
                        "id": 10025,
                        "name": "1. Liga qualification",
                        "localizedName": "1. Liga qualification",
                        "pageUrl": "/leagues/10025/overview/1-liga-qualification"
                    },
                    {
                        "id": 254,
                        "name": "Czech Cup",
                        "localizedName": "Czech Cup",
                        "pageUrl": "/leagues/254/overview/czech-cup"
                    },
                    {
                        "id": 253,
                        "name": "Czech Republic 2",
                        "localizedName": "Czech Republic 2",
                        "pageUrl": "/leagues/253/overview/czech-republic-2"
                    }
                ],
                "localizedName": "Chequia"
            },
            {
                "ccode": "CHI",
                "name": "Chile",
                "leagues": [
                    {
                        "id": 273,
                        "name": "Primera Division",
                        "localizedName": "Primera Division",
                        "pageUrl": "/leagues/273/overview/primera-division"
                    },
                    {
                        "id": 9091,
                        "name": "Copa Chile",
                        "localizedName": "Copa Chile",
                        "pageUrl": "/leagues/9091/overview/copa-chile"
                    },
                    {
                        "id": 9126,
                        "name": "Primera B",
                        "localizedName": "Primera B",
                        "pageUrl": "/leagues/9126/overview/primera-b"
                    },
                    {
                        "id": 9407,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/9407/overview/super-cup"
                    }
                ],
                "localizedName": "Chile"
            },
            {
                "ccode": "CHN",
                "name": "China",
                "leagues": [
                    {
                        "id": 120,
                        "name": "Super League",
                        "localizedName": "Super League",
                        "pageUrl": "/leagues/120/overview/super-league"
                    },
                    {
                        "id": 9137,
                        "name": "China League One",
                        "localizedName": "China League One",
                        "pageUrl": "/leagues/9137/overview/china-league-one"
                    },
                    {
                        "id": 9550,
                        "name": "Chinese FA Cup",
                        "localizedName": "Chinese FA Cup",
                        "pageUrl": "/leagues/9550/overview/chinese-fa-cup"
                    },
                    {
                        "id": 9491,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/9491/overview/super-cup"
                    }
                ],
                "localizedName": "China"
            },
            {
                "ccode": "CYP",
                "name": "Cyprus",
                "leagues": [
                    {
                        "id": 136,
                        "name": "1. Division",
                        "localizedName": "1. Division",
                        "pageUrl": "/leagues/136/overview/1-division"
                    },
                    {
                        "id": 9100,
                        "name": "2. Division",
                        "localizedName": "2. Division",
                        "pageUrl": "/leagues/9100/overview/2-division"
                    },
                    {
                        "id": 330,
                        "name": "Cyprus Cup ",
                        "localizedName": "Cyprus Cup ",
                        "pageUrl": "/leagues/330/overview/cyprus-cup"
                    },
                    {
                        "id": 521,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/521/overview/super-cup"
                    }
                ],
                "localizedName": "Chipre"
            },
            {
                "ccode": "COL",
                "name": "Colombia",
                "leagues": [
                    {
                        "id": 9490,
                        "name": "Copa Colombia",
                        "localizedName": "Copa Colombia",
                        "pageUrl": "/leagues/9490/overview/copa-colombia"
                    },
                    {
                        "id": 274,
                        "name": "Primera A",
                        "localizedName": "Primera A",
                        "pageUrl": "/leagues/274/overview/primera"
                    },
                    {
                        "id": 9125,
                        "name": "Primera B",
                        "localizedName": "Primera B",
                        "pageUrl": "/leagues/9125/overview/primera-b"
                    }
                ],
                "localizedName": "Colombia"
            },
            {
                "ccode": "KOR",
                "name": "South Korea",
                "leagues": [
                    {
                        "id": 9080,
                        "name": "K League 1",
                        "localizedName": "K League 1",
                        "pageUrl": "/leagues/9080/overview/k-league-1"
                    },
                    {
                        "id": 9422,
                        "name": "K League Qualification",
                        "localizedName": "K League Qualification",
                        "pageUrl": "/leagues/9422/overview/k-league-qualification"
                    },
                    {
                        "id": 9551,
                        "name": "Cup",
                        "localizedName": "Cup",
                        "pageUrl": "/leagues/9551/overview/cup"
                    },
                    {
                        "id": 9116,
                        "name": "K League 2",
                        "localizedName": "K League 2",
                        "pageUrl": "/leagues/9116/overview/k-league-2"
                    },
                    {
                        "id": 9537,
                        "name": "K League 3",
                        "localizedName": "K League 3",
                        "pageUrl": "/leagues/9537/overview/k-league-3"
                    },
                    {
                        "id": 10188,
                        "name": "K League 3 Qualification",
                        "localizedName": "K League 3 Clasificación",
                        "pageUrl": "/leagues/10188/overview/k-league-3-qualification"
                    }
                ],
                "localizedName": "Corea del Sur"
            },
            {
                "ccode": "CRC",
                "name": "Costa Rica",
                "leagues": [
                    {
                        "id": 121,
                        "name": "Primera Division",
                        "localizedName": "Primera Division",
                        "pageUrl": "/leagues/121/overview/primera-division"
                    },
                    {
                        "id": 10223,
                        "name": "Super cup",
                        "localizedName": "Super cup",
                        "pageUrl": "/leagues/10223/overview/super-cup"
                    }
                ],
                "localizedName": "Costa Rica"
            },
            {
                "ccode": "CRO",
                "name": "Croatia",
                "leagues": [
                    {
                        "id": 252,
                        "name": "HNL",
                        "localizedName": "HNL",
                        "pageUrl": "/leagues/252/overview/hnl"
                    },
                    {
                        "id": 275,
                        "name": "Croatian Cup",
                        "localizedName": "Croatian Cup",
                        "pageUrl": "/leagues/275/overview/croatian-cup"
                    },
                    {
                        "id": 276,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/276/overview/super-cup"
                    }
                ],
                "localizedName": "Croacia"
            },
            {
                "ccode": "DEN",
                "name": "Denmark",
                "leagues": [
                    {
                        "id": 46,
                        "name": "Superligaen",
                        "localizedName": "Superligaen",
                        "pageUrl": "/leagues/46/overview/superligaen"
                    },
                    {
                        "id": 85,
                        "name": "1. Division",
                        "localizedName": "1. Division",
                        "pageUrl": "/leagues/85/overview/1-division"
                    },
                    {
                        "id": 239,
                        "name": "2. Division",
                        "localizedName": "2. Division",
                        "pageUrl": "/leagues/239/overview/2-division"
                    },
                    {
                        "id": 240,
                        "name": "3. Division",
                        "localizedName": "3. Division",
                        "pageUrl": "/leagues/240/overview/3-division"
                    },
                    {
                        "id": 241,
                        "name": "Danmarksserien",
                        "localizedName": "Danmarksserien",
                        "pageUrl": "/leagues/241/overview/danmarksserien"
                    },
                    {
                        "id": 242,
                        "name": "DBU Pokalen",
                        "localizedName": "DBU Pokalen",
                        "pageUrl": "/leagues/242/overview/dbu-pokalen"
                    },
                    {
                        "id": 256,
                        "name": "Kvindeligaen",
                        "localizedName": "Kvindeligaen",
                        "pageUrl": "/leagues/256/overview/kvindeligaen"
                    }
                ],
                "localizedName": "Dinamarca"
            },
            {
                "ccode": "ECU",
                "name": "Ecuador",
                "leagues": [
                    {
                        "id": 10046,
                        "name": "Copa Ecuador",
                        "localizedName": "Copa Ecuador",
                        "pageUrl": "/leagues/10046/overview/copa-ecuador"
                    },
                    {
                        "id": 246,
                        "name": "Serie A",
                        "localizedName": "Serie A",
                        "pageUrl": "/leagues/246/overview/serie"
                    }
                ],
                "localizedName": "Ecuador"
            },
            {
                "ccode": "EGY",
                "name": "Egypt",
                "leagues": [
                    {
                        "id": 519,
                        "name": "Premier League",
                        "localizedName": "Premier League",
                        "pageUrl": "/leagues/519/overview/premier-league"
                    },
                    {
                        "id": 9941,
                        "name": "Egypt Cup",
                        "localizedName": "Egypt Cup",
                        "pageUrl": "/leagues/9941/overview/egypt-cup"
                    },
                    {
                        "id": 10270,
                        "name": "League Cup",
                        "localizedName": "League Cup",
                        "pageUrl": "/leagues/10270/overview/league-cup"
                    },
                    {
                        "id": 10314,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/10314/overview/super-cup"
                    }
                ],
                "localizedName": "Egipto"
            },
            {
                "ccode": "SLV",
                "name": "El Salvador",
                "leagues": [
                    {
                        "id": 335,
                        "name": "Primera Division",
                        "localizedName": "Primera Division",
                        "pageUrl": "/leagues/335/overview/primera-division"
                    }
                ],
                "localizedName": "El Salvador"
            },
            {
                "ccode": "UAE",
                "name": "United Arab Emirates",
                "leagues": [
                    {
                        "id": 538,
                        "name": "Arabian Gulf League",
                        "localizedName": "Arabian Gulf League",
                        "pageUrl": "/leagues/538/overview/arabian-gulf-league"
                    },
                    {
                        "id": 9943,
                        "name": "Cup",
                        "localizedName": "Cup",
                        "pageUrl": "/leagues/9943/overview/cup"
                    }
                ],
                "localizedName": "Emiratos Árabes Unidos"
            },
            {
                "ccode": "SCO",
                "name": "Scotland",
                "leagues": [
                    {
                        "id": 64,
                        "name": "Premiership",
                        "localizedName": "Premiership",
                        "pageUrl": "/leagues/64/overview/premiership"
                    },
                    {
                        "id": 123,
                        "name": "Championship",
                        "localizedName": "Championship",
                        "pageUrl": "/leagues/123/overview/championship"
                    },
                    {
                        "id": 124,
                        "name": "League One",
                        "localizedName": "League One",
                        "pageUrl": "/leagues/124/overview/league-one"
                    },
                    {
                        "id": 125,
                        "name": "League Two",
                        "localizedName": "League Two",
                        "pageUrl": "/leagues/125/overview/league-two"
                    },
                    {
                        "id": 181,
                        "name": "Premiership playoff",
                        "localizedName": "Premiership playoff",
                        "pageUrl": "/leagues/181/overview/premiership-playoff"
                    },
                    {
                        "id": 179,
                        "name": "Challenge Cup",
                        "localizedName": "Challenge Cup",
                        "pageUrl": "/leagues/179/overview/challenge-cup"
                    },
                    {
                        "id": 9737,
                        "name": "Championship playoff",
                        "localizedName": "Championship playoff",
                        "pageUrl": "/leagues/9737/overview/championship-playoff"
                    },
                    {
                        "id": 180,
                        "name": "League Cup",
                        "localizedName": "League Cup",
                        "pageUrl": "/leagues/180/overview/league-cup"
                    },
                    {
                        "id": 9738,
                        "name": "League One Playoff",
                        "localizedName": "League One Playoff",
                        "pageUrl": "/leagues/9738/overview/league-one-playoff"
                    },
                    {
                        "id": 9739,
                        "name": "League Two Playoff",
                        "localizedName": "League Two Playoff",
                        "pageUrl": "/leagues/9739/overview/league-two-playoff"
                    },
                    {
                        "id": 137,
                        "name": "Scottish Cup",
                        "localizedName": "Scottish Cup",
                        "pageUrl": "/leagues/137/overview/scottish-cup"
                    },
                    {
                        "id": 10791,
                        "name": "SWPL 1",
                        "localizedName": "SWPL 1",
                        "pageUrl": "/leagues/10791/overview/swpl-1"
                    }
                ],
                "localizedName": "Escocia"
            },
            {
                "ccode": "SVK",
                "name": "Slovakia",
                "leagues": [
                    {
                        "id": 176,
                        "name": "1. liga",
                        "localizedName": "1. liga",
                        "pageUrl": "/leagues/176/overview/1-liga"
                    },
                    {
                        "id": 8973,
                        "name": "2. Liga",
                        "localizedName": "2. Liga",
                        "pageUrl": "/leagues/8973/overview/2-liga"
                    },
                    {
                        "id": 177,
                        "name": "FA Cup",
                        "localizedName": "FA Cup",
                        "pageUrl": "/leagues/177/overview/fa-cup"
                    },
                    {
                        "id": 9845,
                        "name": "Super Liga Qualification",
                        "localizedName": "Super Liga Qualification",
                        "pageUrl": "/leagues/9845/overview/super-liga-qualification"
                    }
                ],
                "localizedName": "Eslovaquia"
            },
            {
                "ccode": "SVN",
                "name": "Slovenia",
                "leagues": [
                    {
                        "id": 173,
                        "name": "Prva Liga",
                        "localizedName": "Prva Liga",
                        "pageUrl": "/leagues/173/overview/prva-liga"
                    },
                    {
                        "id": 492,
                        "name": "Prva Liga Qualification",
                        "localizedName": "Prva Liga Clasificación",
                        "pageUrl": "/leagues/492/overview/prva-liga-qualification"
                    },
                    {
                        "id": 174,
                        "name": "Slovenia Cup",
                        "localizedName": "Slovenia Cup",
                        "pageUrl": "/leagues/174/overview/slovenia-cup"
                    }
                ],
                "localizedName": "Eslovenia"
            },
            {
                "ccode": "ESP",
                "name": "Spain",
                "leagues": [
                    {
                        "id": 87,
                        "name": "LaLiga",
                        "localizedName": "LaLiga",
                        "pageUrl": "/leagues/87/overview/laliga"
                    },
                    {
                        "id": 140,
                        "name": "LaLiga2",
                        "localizedName": "LaLiga2",
                        "pageUrl": "/leagues/140/overview/laliga2"
                    },
                    {
                        "id": 8968,
                        "name": "Primera Federación",
                        "localizedName": "Primera Federación",
                        "pageUrl": "/leagues/8968/overview/primera-federacion"
                    },
                    {
                        "id": 9138,
                        "name": "Segunda Federación",
                        "localizedName": "Segunda Federación",
                        "pageUrl": "/leagues/9138/overview/segunda-federacion"
                    },
                    {
                        "id": 9907,
                        "name": "Liga F",
                        "localizedName": "Liga F",
                        "pageUrl": "/leagues/9907/overview/liga-f"
                    },
                    {
                        "id": 138,
                        "name": "Copa del Rey",
                        "localizedName": "Copa del Rey",
                        "pageUrl": "/leagues/138/overview/copa-del-rey"
                    },
                    {
                        "id": 139,
                        "name": "Supercopa de España",
                        "localizedName": "Supercopa de España",
                        "pageUrl": "/leagues/139/overview/supercopa-de-espana"
                    },
                    {
                        "id": 10651,
                        "name": "Copa de la Reina",
                        "localizedName": "Copa de la Reina",
                        "pageUrl": "/leagues/10651/overview/copa-de-la-reina"
                    },
                    {
                        "id": 10776,
                        "name": "Super Cup (W)",
                        "localizedName": "Super Cup (W)",
                        "pageUrl": "/leagues/10776/overview/super-cup"
                    }
                ],
                "localizedName": "España"
            },
            {
                "ccode": "USA",
                "name": "United States",
                "leagues": [
                    {
                        "id": 130,
                        "name": "MLS",
                        "localizedName": "MLS",
                        "pageUrl": "/leagues/130/overview/mls"
                    },
                    {
                        "id": 8972,
                        "name": "USL Championship",
                        "localizedName": "USL Championship",
                        "pageUrl": "/leagues/8972/overview/usl-championship"
                    },
                    {
                        "id": 9296,
                        "name": "USL League One",
                        "localizedName": "USL League One",
                        "pageUrl": "/leagues/9296/overview/usl-league-one"
                    },
                    {
                        "id": 9441,
                        "name": "Open Cup",
                        "localizedName": "Open Cup",
                        "pageUrl": "/leagues/9441/overview/open-cup"
                    },
                    {
                        "id": 9134,
                        "name": "NWSL",
                        "localizedName": "NWSL",
                        "pageUrl": "/leagues/9134/overview/nwsl"
                    },
                    {
                        "id": 10282,
                        "name": "MLS Next Pro",
                        "localizedName": "MLS Next Pro",
                        "pageUrl": "/leagues/10282/overview/mls-next-pro"
                    },
                    {
                        "id": 10084,
                        "name": "NISA",
                        "localizedName": "NISA",
                        "pageUrl": "/leagues/10084/overview/nisa"
                    },
                    {
                        "id": 10167,
                        "name": "NWSL Challenge Cup",
                        "localizedName": "NWSL Challenge Cup",
                        "pageUrl": "/leagues/10167/overview/nwsl-challenge-cup"
                    },
                    {
                        "id": 10654,
                        "name": "USL Jägermeister Cup",
                        "localizedName": "USL Jägermeister Cup",
                        "pageUrl": "/leagues/10654/overview/usl-jagermeister-cup"
                    },
                    {
                        "id": 10699,
                        "name": "USL Super League Women",
                        "localizedName": "USL Super League Women",
                        "pageUrl": "/leagues/10699/overview/usl-super-league-women"
                    }
                ],
                "localizedName": "Estados Unidos"
            },
            {
                "ccode": "EST",
                "name": "Estonia",
                "leagues": [
                    {
                        "id": 248,
                        "name": "Meistriliiga",
                        "localizedName": "Meistriliiga",
                        "pageUrl": "/leagues/248/overview/meistriliiga"
                    },
                    {
                        "id": 10034,
                        "name": "Meistriliiga Qualification",
                        "localizedName": "Meistriliiga Clasificación",
                        "pageUrl": "/leagues/10034/overview/meistriliiga-qualification"
                    },
                    {
                        "id": 9069,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/9069/overview/super-cup"
                    }
                ],
                "localizedName": "Estonia"
            },
            {
                "ccode": "FIN",
                "name": "Finland",
                "leagues": [
                    {
                        "id": 51,
                        "name": "Veikkausliiga",
                        "localizedName": "Veikkausliiga",
                        "pageUrl": "/leagues/51/overview/veikkausliiga"
                    },
                    {
                        "id": 52,
                        "name": "Veikkausliiga Qualification",
                        "localizedName": "Veikkausliiga Clasificación",
                        "pageUrl": "/leagues/52/overview/veikkausliiga-qualification"
                    },
                    {
                        "id": 251,
                        "name": "Ykkosliiga",
                        "localizedName": "Ykkosliiga",
                        "pageUrl": "/leagues/251/overview/ykkosliiga"
                    },
                    {
                        "id": 143,
                        "name": "Suomen Cup",
                        "localizedName": "Suomen Cup",
                        "pageUrl": "/leagues/143/overview/suomen-cup"
                    },
                    {
                        "id": 8969,
                        "name": "Ykkonen",
                        "localizedName": "Ykkonen",
                        "pageUrl": "/leagues/8969/overview/ykkonen"
                    },
                    {
                        "id": 10174,
                        "name": "Kansallinen (Women)",
                        "localizedName": "Kansallinen (Femenil)",
                        "pageUrl": "/leagues/10174/overview/kansallinen-women"
                    },
                    {
                        "id": 10186,
                        "name": "Kansallinen Qualification (Women)",
                        "localizedName": "Kansallinen Clasificación (Femenil)",
                        "pageUrl": "/leagues/10186/overview/kansallinen-qualification-women"
                    },
                    {
                        "id": 342,
                        "name": "Finland Cup",
                        "localizedName": "Finland Cup",
                        "pageUrl": "/leagues/342/overview/finland-cup"
                    },
                    {
                        "id": 10713,
                        "name": "Ykkosliiga Qualification",
                        "localizedName": "Ykkosliiga Clasificación",
                        "pageUrl": "/leagues/10713/overview/ykkosliiga-qualification"
                    }
                ],
                "localizedName": "Finlandia"
            },
            {
                "ccode": "FRA",
                "name": "France",
                "leagues": [
                    {
                        "id": 53,
                        "name": "Ligue 1",
                        "localizedName": "Ligue 1",
                        "pageUrl": "/leagues/53/overview/ligue-1"
                    },
                    {
                        "id": 110,
                        "name": "Ligue 2",
                        "localizedName": "Ligue 2",
                        "pageUrl": "/leagues/110/overview/ligue-2"
                    },
                    {
                        "id": 8970,
                        "name": "National",
                        "localizedName": "National",
                        "pageUrl": "/leagues/8970/overview/national"
                    },
                    {
                        "id": 134,
                        "name": "Coupe de France",
                        "localizedName": "Coupe de France",
                        "pageUrl": "/leagues/134/overview/coupe-de-france"
                    },
                    {
                        "id": 9666,
                        "name": "Ligue 1 Qualification",
                        "localizedName": "Ligue 1 Clasificación",
                        "pageUrl": "/leagues/9666/overview/ligue-1-qualification"
                    },
                    {
                        "id": 9667,
                        "name": "Ligue 2 Qualification",
                        "localizedName": "Ligue 2 Clasificación",
                        "pageUrl": "/leagues/9667/overview/ligue-2-qualification"
                    },
                    {
                        "id": 9677,
                        "name": "Première Ligue Féminine",
                        "localizedName": "Première Ligue Féminine",
                        "pageUrl": "/leagues/9677/overview/premiere-ligue-feminine"
                    },
                    {
                        "id": 207,
                        "name": "Trophée des champions",
                        "localizedName": "Trophée des champions",
                        "pageUrl": "/leagues/207/overview/trophee-des-champions"
                    }
                ],
                "localizedName": "Francia"
            },
            {
                "ccode": "WAL",
                "name": "Wales",
                "leagues": [
                    {
                        "id": 116,
                        "name": "Cymru Premier",
                        "localizedName": "Cymru Premier",
                        "pageUrl": "/leagues/116/overview/cymru-premier"
                    },
                    {
                        "id": 9166,
                        "name": "Welsh Cup",
                        "localizedName": "Welsh Cup",
                        "pageUrl": "/leagues/9166/overview/welsh-cup"
                    }
                ],
                "localizedName": "Gales"
            },
            {
                "ccode": "GEO",
                "name": "Georgia",
                "leagues": [
                    {
                        "id": 439,
                        "name": "Erovnuli Liga",
                        "localizedName": "Erovnuli Liga",
                        "pageUrl": "/leagues/439/overview/erovnuli-liga"
                    },
                    {
                        "id": 9310,
                        "name": "Erovnuli Qualification",
                        "localizedName": "Erovnuli Clasificación",
                        "pageUrl": "/leagues/9310/overview/erovnuli-qualification"
                    }
                ],
                "localizedName": "Georgia"
            },
            {
                "ccode": "GHA",
                "name": "Ghana",
                "leagues": [
                    {
                        "id": 522,
                        "name": "Premier League",
                        "localizedName": "Premier League",
                        "pageUrl": "/leagues/522/overview/premier-league"
                    }
                ],
                "localizedName": "Ghana"
            },
            {
                "ccode": "GRE",
                "name": "Greece",
                "leagues": [
                    {
                        "id": 135,
                        "name": "Super League 1",
                        "localizedName": "Super League 1",
                        "pageUrl": "/leagues/135/overview/super-league-1"
                    },
                    {
                        "id": 145,
                        "name": "Greece Cup",
                        "localizedName": "Greece Cup",
                        "pageUrl": "/leagues/145/overview/greece-cup"
                    },
                    {
                        "id": 8815,
                        "name": "Super League 2",
                        "localizedName": "Super League 2",
                        "pageUrl": "/leagues/8815/overview/super-league-2"
                    }
                ],
                "localizedName": "Grecia"
            },
            {
                "ccode": "GUA",
                "name": "Guatemala",
                "leagues": [
                    {
                        "id": 336,
                        "name": "Liga Nacional",
                        "localizedName": "Liga Nacional",
                        "pageUrl": "/leagues/336/overview/liga-nacional"
                    }
                ],
                "localizedName": "Guatemala"
            },
            {
                "ccode": "HON",
                "name": "Honduras",
                "leagues": [
                    {
                        "id": 337,
                        "name": "Liga Nacional",
                        "localizedName": "Liga Nacional",
                        "pageUrl": "/leagues/337/overview/liga-nacional"
                    }
                ],
                "localizedName": "Honduras"
            },
            {
                "ccode": "HUN",
                "name": "Hungary",
                "leagues": [
                    {
                        "id": 212,
                        "name": "Nemzeti Bajnokság I",
                        "localizedName": "Nemzeti Bajnokság I",
                        "pageUrl": "/leagues/212/overview/nemzeti-bajnoksag-i"
                    },
                    {
                        "id": 213,
                        "name": "Magyar Kupa",
                        "localizedName": "Magyar Kupa",
                        "pageUrl": "/leagues/213/overview/magyar-kupa"
                    }
                ],
                "localizedName": "Hungría"
            },
            {
                "ccode": "IND",
                "name": "India",
                "leagues": [
                    {
                        "id": 9478,
                        "name": "Indian Super League",
                        "localizedName": "Indian Super League",
                        "pageUrl": "/leagues/9478/overview/indian-super-league"
                    },
                    {
                        "id": 10309,
                        "name": "Durand Cup",
                        "localizedName": "Durand Cup",
                        "pageUrl": "/leagues/10309/overview/durand-cup"
                    },
                    {
                        "id": 8982,
                        "name": "I League",
                        "localizedName": "I League",
                        "pageUrl": "/leagues/8982/overview/i-league"
                    },
                    {
                        "id": 10366,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/10366/overview/super-cup"
                    }
                ],
                "localizedName": "India"
            },
            {
                "ccode": "IDN",
                "name": "Indonesia",
                "leagues": [
                    {
                        "id": 8983,
                        "name": "Liga 1",
                        "localizedName": "Liga 1",
                        "pageUrl": "/leagues/8983/overview/liga-1"
                    },
                    {
                        "id": 10059,
                        "name": "President's Cup Grp. A",
                        "localizedName": "President's Cup Grp. A",
                        "pageUrl": "/leagues/10059/overview/presidents-cup-grp"
                    }
                ],
                "localizedName": "Indonesia"
            },
            {
                "ccode": "ENG",
                "name": "England",
                "leagues": [
                    {
                        "id": 47,
                        "name": "Premier League",
                        "localizedName": "Premier League",
                        "pageUrl": "/leagues/47/overview/premier-league"
                    },
                    {
                        "id": 48,
                        "name": "Championship",
                        "localizedName": "Championship",
                        "pageUrl": "/leagues/48/overview/championship"
                    },
                    {
                        "id": 108,
                        "name": "League One",
                        "localizedName": "League One",
                        "pageUrl": "/leagues/108/overview/league-one"
                    },
                    {
                        "id": 109,
                        "name": "League Two",
                        "localizedName": "League Two",
                        "pageUrl": "/leagues/109/overview/league-two"
                    },
                    {
                        "id": 117,
                        "name": "National League",
                        "localizedName": "National League",
                        "pageUrl": "/leagues/117/overview/national-league"
                    },
                    {
                        "id": 8944,
                        "name": "National North & South",
                        "localizedName": "National North & South",
                        "pageUrl": "/leagues/8944/overview/national-north-south"
                    },
                    {
                        "id": 8947,
                        "name": "Premier Division",
                        "localizedName": "Premier Division",
                        "pageUrl": "/leagues/8947/overview/premier-division"
                    },
                    {
                        "id": 9084,
                        "name": "Premier League 2 Div 1",
                        "localizedName": "Premier League 2 Div 1",
                        "pageUrl": "/leagues/9084/overview/premier-league-2-div-1"
                    },
                    {
                        "id": 10176,
                        "name": "Premier League 2 Div 2",
                        "localizedName": "Premier League 2 Div 2",
                        "pageUrl": "/leagues/10176/overview/premier-league-2-div-2"
                    },
                    {
                        "id": 247,
                        "name": "Community Shield",
                        "localizedName": "Community Shield",
                        "pageUrl": "/leagues/247/overview/community-shield"
                    },
                    {
                        "id": 132,
                        "name": "FA Cup",
                        "localizedName": "FA Cup",
                        "pageUrl": "/leagues/132/overview/fa-cup"
                    },
                    {
                        "id": 133,
                        "name": "EFL Cup",
                        "localizedName": "EFL Cup",
                        "pageUrl": "/leagues/133/overview/efl-cup"
                    },
                    {
                        "id": 10626,
                        "name": "FA Cup Qualification",
                        "localizedName": "FA Cup Clasificación",
                        "pageUrl": "/leagues/10626/overview/fa-cup-qualification"
                    },
                    {
                        "id": 142,
                        "name": "EFL Trophy",
                        "localizedName": "EFL Trophy",
                        "pageUrl": "/leagues/142/overview/efl-trophy"
                    },
                    {
                        "id": 9253,
                        "name": "FA Trophy",
                        "localizedName": "FA Trophy",
                        "pageUrl": "/leagues/9253/overview/fa-trophy"
                    },
                    {
                        "id": 10068,
                        "name": "Premier League U18",
                        "localizedName": "Premier League U18",
                        "pageUrl": "/leagues/10068/overview/premier-league-u18"
                    },
                    {
                        "id": 9227,
                        "name": "WSL",
                        "localizedName": "WSL",
                        "pageUrl": "/leagues/9227/overview/wsl"
                    },
                    {
                        "id": 10082,
                        "name": "FA Cup (Women)",
                        "localizedName": "FA Cup (Women)",
                        "pageUrl": "/leagues/10082/overview/fa-cup-women"
                    },
                    {
                        "id": 9717,
                        "name": "Women's League Cup",
                        "localizedName": "Women's League Cup",
                        "pageUrl": "/leagues/9717/overview/womens-league-cup"
                    },
                    {
                        "id": 9294,
                        "name": "Women's Championship",
                        "localizedName": "Women's Championship",
                        "pageUrl": "/leagues/9294/overview/womens-championship"
                    },
                    {
                        "id": 10844,
                        "name": "Baller League",
                        "localizedName": "Baller League",
                        "pageUrl": "/leagues/10844/overview/baller-league"
                    },
                    {
                        "id": 10705,
                        "name": "National League Cup",
                        "localizedName": "National League Cup",
                        "pageUrl": "/leagues/10705/overview/national-league-cup"
                    }
                ],
                "localizedName": "Inglaterra"
            },
            {
                "ccode": "IRQ",
                "name": "Iraq",
                "leagues": [
                    {
                        "id": 524,
                        "name": "Stars League",
                        "localizedName": "Stars League",
                        "pageUrl": "/leagues/524/overview/stars-league"
                    },
                    {
                        "id": 10310,
                        "name": "Stars League Relegation Playoff",
                        "localizedName": "Stars League Descenso Playoff",
                        "pageUrl": "/leagues/10310/overview/stars-league-relegation-playoff"
                    }
                ],
                "localizedName": "Irak"
            },
            {
                "ccode": "IRL",
                "name": "Ireland",
                "leagues": [
                    {
                        "id": 126,
                        "name": "Premier Division",
                        "localizedName": "Premier División",
                        "pageUrl": "/leagues/126/overview/premier-division"
                    },
                    {
                        "id": 221,
                        "name": "Premier Division Qualification",
                        "localizedName": "Premier División Clasificación",
                        "pageUrl": "/leagues/221/overview/premier-division-qualification"
                    },
                    {
                        "id": 218,
                        "name": "First Division",
                        "localizedName": "First Division",
                        "pageUrl": "/leagues/218/overview/first-division"
                    },
                    {
                        "id": 219,
                        "name": "FAI Cup",
                        "localizedName": "FAI Cup",
                        "pageUrl": "/leagues/219/overview/fai-cup"
                    },
                    {
                        "id": 10307,
                        "name": "FAI Women's Cup (W)",
                        "localizedName": "FAI Women's Cup (W)",
                        "pageUrl": "/leagues/10307/overview/fai-womens-cup"
                    },
                    {
                        "id": 9431,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/9431/overview/super-cup"
                    },
                    {
                        "id": 10210,
                        "name": "Women's Premier Division",
                        "localizedName": "Women's Premier División",
                        "pageUrl": "/leagues/10210/overview/womens-premier-division"
                    }
                ],
                "localizedName": "Irlanda"
            },
            {
                "ccode": "NIR",
                "name": "Northern Ireland",
                "leagues": [
                    {
                        "id": 129,
                        "name": "Premiership",
                        "localizedName": "Premiership",
                        "pageUrl": "/leagues/129/overview/premiership"
                    },
                    {
                        "id": 9389,
                        "name": "Irish Cup",
                        "localizedName": "Irish Cup",
                        "pageUrl": "/leagues/9389/overview/irish-cup"
                    },
                    {
                        "id": 8978,
                        "name": "League Cup",
                        "localizedName": "League Cup",
                        "pageUrl": "/leagues/8978/overview/league-cup"
                    },
                    {
                        "id": 8979,
                        "name": "Premiership Qualification",
                        "localizedName": "Premiership Clasificación",
                        "pageUrl": "/leagues/8979/overview/premiership-qualification"
                    }
                ],
                "localizedName": "Irlanda del Norte"
            },
            {
                "ccode": "IRN",
                "name": "Iran",
                "leagues": [
                    {
                        "id": 523,
                        "name": "Persian Gulf",
                        "localizedName": "Persian Gulf",
                        "pageUrl": "/leagues/523/overview/persian-gulf"
                    },
                    {
                        "id": 9372,
                        "name": "Azadegan League",
                        "localizedName": "Azadegan League",
                        "pageUrl": "/leagues/9372/overview/azadegan-league"
                    },
                    {
                        "id": 9487,
                        "name": "Hazfi cup",
                        "localizedName": "Hazfi cup",
                        "pageUrl": "/leagues/9487/overview/hazfi-cup"
                    },
                    {
                        "id": 10288,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/10288/overview/super-cup"
                    }
                ],
                "localizedName": "Irán"
            },
            {
                "ccode": "ISL",
                "name": "Iceland",
                "leagues": [
                    {
                        "id": 215,
                        "name": "Besta deildin",
                        "localizedName": "Besta deildin",
                        "pageUrl": "/leagues/215/overview/besta-deildin"
                    },
                    {
                        "id": 216,
                        "name": "1. Deild",
                        "localizedName": "1. Deild",
                        "pageUrl": "/leagues/216/overview/1-deild"
                    },
                    {
                        "id": 217,
                        "name": "Icelandic Cup",
                        "localizedName": "Icelandic Cup",
                        "pageUrl": "/leagues/217/overview/icelandic-cup"
                    },
                    {
                        "id": 10009,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/10009/overview/super-cup"
                    },
                    {
                        "id": 10226,
                        "name": "2. Deild",
                        "localizedName": "2. Deild",
                        "pageUrl": "/leagues/10226/overview/2-deild"
                    },
                    {
                        "id": 10076,
                        "name": "League Cup",
                        "localizedName": "League Cup",
                        "pageUrl": "/leagues/10076/overview/league-cup"
                    }
                ],
                "localizedName": "Islandia"
            },
            {
                "ccode": "FRO",
                "name": "Faroe Islands",
                "leagues": [
                    {
                        "id": 9523,
                        "name": "Løgmanssteypið",
                        "localizedName": "Løgmanssteypið",
                        "pageUrl": "/leagues/9523/overview/logmanssteypi"
                    },
                    {
                        "id": 250,
                        "name": "Premier League",
                        "localizedName": "Premier League",
                        "pageUrl": "/leagues/250/overview/premier-league"
                    }
                ],
                "localizedName": "Islas Feroe"
            },
            {
                "ccode": "ISR",
                "name": "Israel",
                "leagues": [
                    {
                        "id": 127,
                        "name": "Ligat HaAl",
                        "localizedName": "Ligat HaAl",
                        "pageUrl": "/leagues/127/overview/ligat-haal"
                    },
                    {
                        "id": 128,
                        "name": "Leumit League",
                        "localizedName": "Leumit League",
                        "pageUrl": "/leagues/128/overview/leumit-league"
                    },
                    {
                        "id": 9735,
                        "name": "Leumit League Qualification",
                        "localizedName": "Leumit League Clasificación",
                        "pageUrl": "/leagues/9735/overview/leumit-league-qualification"
                    },
                    {
                        "id": 9097,
                        "name": "State Cup",
                        "localizedName": "State Cup",
                        "pageUrl": "/leagues/9097/overview/state-cup"
                    },
                    {
                        "id": 9862,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/9862/overview/super-cup"
                    },
                    {
                        "id": 9098,
                        "name": "Toto cup",
                        "localizedName": "Toto cup",
                        "pageUrl": "/leagues/9098/overview/toto-cup"
                    }
                ],
                "localizedName": "Israel"
            },
            {
                "ccode": "ITA",
                "name": "Italy",
                "leagues": [
                    {
                        "id": 55,
                        "name": "Serie A",
                        "localizedName": "Serie A",
                        "pageUrl": "/leagues/55/overview/serie"
                    },
                    {
                        "id": 86,
                        "name": "Serie B",
                        "localizedName": "Serie B",
                        "pageUrl": "/leagues/86/overview/serie-b"
                    },
                    {
                        "id": 141,
                        "name": "Coppa Italia",
                        "localizedName": "Coppa Italia",
                        "pageUrl": "/leagues/141/overview/coppa-italia"
                    },
                    {
                        "id": 147,
                        "name": "Serie C",
                        "localizedName": "Serie C",
                        "pageUrl": "/leagues/147/overview/serie-c"
                    },
                    {
                        "id": 222,
                        "name": "Supercoppa",
                        "localizedName": "Supercoppa",
                        "pageUrl": "/leagues/222/overview/supercoppa"
                    },
                    {
                        "id": 10178,
                        "name": "Serie A Femminile",
                        "localizedName": "Serie A Femminile",
                        "pageUrl": "/leagues/10178/overview/serie-femminile"
                    },
                    {
                        "id": 10434,
                        "name": "Serie A Femminile Qualification",
                        "localizedName": "Serie A Femminile Clasificación",
                        "pageUrl": "/leagues/10434/overview/serie-femminile-qualification"
                    }
                ],
                "localizedName": "Italia"
            },
            {
                "ccode": "JPN",
                "name": "Japan",
                "leagues": [
                    {
                        "id": 223,
                        "name": "J. League",
                        "localizedName": "J. League",
                        "pageUrl": "/leagues/223/overview/j-league"
                    },
                    {
                        "id": 8974,
                        "name": "J. League 2",
                        "localizedName": "J. League 2",
                        "pageUrl": "/leagues/8974/overview/j-league-2"
                    },
                    {
                        "id": 9136,
                        "name": "J. League 3",
                        "localizedName": "J. League 3",
                        "pageUrl": "/leagues/9136/overview/j-league-3"
                    },
                    {
                        "id": 9011,
                        "name": "Emperor Cup",
                        "localizedName": "Emperor Cup",
                        "pageUrl": "/leagues/9011/overview/emperor-cup"
                    },
                    {
                        "id": 10716,
                        "name": "J. League 3 Promotion Playoff",
                        "localizedName": "J. League 3 Promotion Playoff",
                        "pageUrl": "/leagues/10716/overview/j-league-3-promotion-playoff"
                    },
                    {
                        "id": 224,
                        "name": "J. League Cup",
                        "localizedName": "J. League Cup",
                        "pageUrl": "/leagues/224/overview/j-league-cup"
                    },
                    {
                        "id": 440,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/440/overview/super-cup"
                    }
                ],
                "localizedName": "Japón"
            },
            {
                "ccode": "KAZ",
                "name": "Kazakhstan",
                "leagues": [
                    {
                        "id": 225,
                        "name": "Premier League",
                        "localizedName": "Premier League",
                        "pageUrl": "/leagues/225/overview/premier-league"
                    },
                    {
                        "id": 9504,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/9504/overview/super-cup"
                    }
                ],
                "localizedName": "Kazajistán"
            },
            {
                "ccode": "KUW",
                "name": "Kuwait",
                "leagues": [
                    {
                        "id": 529,
                        "name": "Premier League",
                        "localizedName": "Premier League",
                        "pageUrl": "/leagues/529/overview/premier-league"
                    }
                ],
                "localizedName": "Kuwait"
            },
            {
                "ccode": "LVA",
                "name": "Latvia",
                "leagues": [
                    {
                        "id": 226,
                        "name": "Virsliga",
                        "localizedName": "Virsliga",
                        "pageUrl": "/leagues/226/overview/virsliga"
                    },
                    {
                        "id": 9486,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/9486/overview/super-cup"
                    }
                ],
                "localizedName": "Letonia"
            },
            {
                "ccode": "LTU",
                "name": "Lithuania",
                "leagues": [
                    {
                        "id": 228,
                        "name": "A Lyga",
                        "localizedName": "A Lyga",
                        "pageUrl": "/leagues/228/overview/lyga"
                    },
                    {
                        "id": 9632,
                        "name": "A Lyga Qualification",
                        "localizedName": "A Lyga Clasificación",
                        "pageUrl": "/leagues/9632/overview/lyga-qualification"
                    },
                    {
                        "id": 9493,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/9493/overview/super-cup"
                    }
                ],
                "localizedName": "Lituania"
            },
            {
                "ccode": "LUX",
                "name": "Luxembourg",
                "leagues": [
                    {
                        "id": 229,
                        "name": "National Division",
                        "localizedName": "National División",
                        "pageUrl": "/leagues/229/overview/national-division"
                    },
                    {
                        "id": 9527,
                        "name": "Coupe de Luxembourg",
                        "localizedName": "Coupe de Luxembourg",
                        "pageUrl": "/leagues/9527/overview/coupe-de-luxembourg"
                    },
                    {
                        "id": 9174,
                        "name": "National Division Qualification",
                        "localizedName": "National División Clasificación",
                        "pageUrl": "/leagues/9174/overview/national-division-qualification"
                    }
                ],
                "localizedName": "Luxemburgo"
            },
            {
                "ccode": "MKD",
                "name": "North Macedonia",
                "leagues": [
                    {
                        "id": 249,
                        "name": "Prva Liga",
                        "localizedName": "Prva Liga",
                        "pageUrl": "/leagues/249/overview/prva-liga"
                    },
                    {
                        "id": 9528,
                        "name": "Macedonian Cup",
                        "localizedName": "Macedonian Cup",
                        "pageUrl": "/leagues/9528/overview/macedonian-cup"
                    }
                ],
                "localizedName": "Macedonia del Norte"
            },
            {
                "ccode": "MAS",
                "name": "Malaysia",
                "leagues": [
                    {
                        "id": 8985,
                        "name": "Liga Super",
                        "localizedName": "Liga Super",
                        "pageUrl": "/leagues/8985/overview/liga-super"
                    }
                ],
                "localizedName": "Malasia"
            },
            {
                "ccode": "MAR",
                "name": "Morocco",
                "leagues": [
                    {
                        "id": 530,
                        "name": "Botola Pro",
                        "localizedName": "Botola Pro",
                        "pageUrl": "/leagues/530/overview/botola-pro"
                    },
                    {
                        "id": 10917,
                        "name": "Botola Pro Qualification",
                        "localizedName": "Botola Pro Clasificación",
                        "pageUrl": "/leagues/10917/overview/botola-pro-qualification"
                    }
                ],
                "localizedName": "Marruecos"
            },
            {
                "ccode": "MDA",
                "name": "Moldova",
                "leagues": [
                    {
                        "id": 231,
                        "name": "National Division",
                        "localizedName": "National Division",
                        "pageUrl": "/leagues/231/overview/national-division"
                    },
                    {
                        "id": 9530,
                        "name": "Cupa Moldova",
                        "localizedName": "Cupa Moldova",
                        "pageUrl": "/leagues/9530/overview/cupa-moldova"
                    },
                    {
                        "id": 10065,
                        "name": "National Division Qualification",
                        "localizedName": "National Division Clasificación",
                        "pageUrl": "/leagues/10065/overview/national-division-qualification"
                    }
                ],
                "localizedName": "Moldavia"
            },
            {
                "ccode": "MNE",
                "name": "Montenegro",
                "leagues": [
                    {
                        "id": 232,
                        "name": "1. CFL",
                        "localizedName": "1. CFL",
                        "pageUrl": "/leagues/232/overview/1-cfl"
                    },
                    {
                        "id": 9178,
                        "name": "1. CFL Qualification",
                        "localizedName": "1. CFL Clasificación",
                        "pageUrl": "/leagues/9178/overview/1-cfl-qualification"
                    }
                ],
                "localizedName": "Montenegro"
            },
            {
                "ccode": "MEX",
                "name": "Mexico",
                "leagues": [
                    {
                        "id": 230,
                        "name": "Liga MX",
                        "localizedName": "Liga MX",
                        "pageUrl": "/leagues/230/overview/liga-mx"
                    },
                    {
                        "id": 8976,
                        "name": "Liga de Expansión MX",
                        "localizedName": "Liga de Expansión MX",
                        "pageUrl": "/leagues/8976/overview/liga-de-expansion-mx"
                    },
                    {
                        "id": 9906,
                        "name": "Liga MX Femenil",
                        "localizedName": "Liga MX Femenil",
                        "pageUrl": "/leagues/9906/overview/liga-mx-femenil"
                    }
                ],
                "localizedName": "México"
            },
            {
                "ccode": "NGA",
                "name": "Nigeria",
                "leagues": [
                    {
                        "id": 533,
                        "name": "Professional Football League",
                        "localizedName": "Professional Football League",
                        "pageUrl": "/leagues/533/overview/professional-football-league"
                    }
                ],
                "localizedName": "Nigeria"
            },
            {
                "ccode": "NOR",
                "name": "Norway",
                "leagues": [
                    {
                        "id": 59,
                        "name": "Eliteserien",
                        "localizedName": "Eliteserien",
                        "pageUrl": "/leagues/59/overview/eliteserien"
                    },
                    {
                        "id": 203,
                        "name": "OBOS-ligaen",
                        "localizedName": "OBOS-ligaen",
                        "pageUrl": "/leagues/203/overview/obos-ligaen"
                    },
                    {
                        "id": 204,
                        "name": "PostNord-ligaen",
                        "localizedName": "PostNord-ligaen",
                        "pageUrl": "/leagues/204/overview/postnord-ligaen"
                    },
                    {
                        "id": 331,
                        "name": "Toppserien",
                        "localizedName": "Toppserien",
                        "pageUrl": "/leagues/331/overview/toppserien"
                    },
                    {
                        "id": 332,
                        "name": "1. Division Kvinner",
                        "localizedName": "1. Division Kvinner",
                        "pageUrl": "/leagues/332/overview/1-division-kvinner"
                    },
                    {
                        "id": 10714,
                        "name": "1. divisjon kvinner kvalifisering",
                        "localizedName": "1. divisjon kvinner kvalifisering",
                        "pageUrl": "/leagues/10714/overview/1-divisjon-kvinner-kvalifisering"
                    },
                    {
                        "id": 333,
                        "name": "Cup (Women)",
                        "localizedName": "Cup (Femenil)",
                        "pageUrl": "/leagues/333/overview/cup-women"
                    },
                    {
                        "id": 10628,
                        "name": "Cup Qualification",
                        "localizedName": "Cup Clasificación",
                        "pageUrl": "/leagues/10628/overview/cup-qualification"
                    },
                    {
                        "id": 60,
                        "name": "Eliteserien Qualification",
                        "localizedName": "Eliteserien Clasificación",
                        "pageUrl": "/leagues/60/overview/eliteserien-qualification"
                    },
                    {
                        "id": 206,
                        "name": "Norgesmesterskapet",
                        "localizedName": "Norgesmesterskapet",
                        "pageUrl": "/leagues/206/overview/norgesmesterskapet"
                    },
                    {
                        "id": 205,
                        "name": "Norsk Tipping-ligaen",
                        "localizedName": "Norsk Tipping-ligaen",
                        "pageUrl": "/leagues/205/overview/norsk-tipping-ligaen"
                    },
                    {
                        "id": 9754,
                        "name": "OBOS-ligaen Qualification",
                        "localizedName": "OBOS-ligaen Clasificación",
                        "pageUrl": "/leagues/9754/overview/obos-ligaen-qualification"
                    },
                    {
                        "id": 9382,
                        "name": "Toppserien Qualification (W)",
                        "localizedName": "Toppserien Clasificación (W)",
                        "pageUrl": "/leagues/9382/overview/toppserien-qualification"
                    }
                ],
                "localizedName": "Noruega"
            },
            {
                "ccode": "NZL",
                "name": "New Zealand",
                "leagues": [
                    {
                        "id": 8870,
                        "name": "Championship",
                        "localizedName": "Championship",
                        "pageUrl": "/leagues/8870/overview/championship"
                    }
                ],
                "localizedName": "Nueva Zelanda"
            },
            {
                "ccode": "PAN",
                "name": "Panama",
                "leagues": [
                    {
                        "id": 9039,
                        "name": "LPF",
                        "localizedName": "LPF",
                        "pageUrl": "/leagues/9039/overview/lpf"
                    }
                ],
                "localizedName": "Panamá"
            },
            {
                "ccode": "PAR",
                "name": "Paraguay",
                "leagues": [
                    {
                        "id": 10230,
                        "name": "Copa Paraguay",
                        "localizedName": "Copa Paraguay",
                        "pageUrl": "/leagues/10230/overview/copa-paraguay"
                    },
                    {
                        "id": 199,
                        "name": "Division Profesional",
                        "localizedName": "Division Profesional",
                        "pageUrl": "/leagues/199/overview/division-profesional"
                    },
                    {
                        "id": 10259,
                        "name": "Supercopa",
                        "localizedName": "Supercopa",
                        "pageUrl": "/leagues/10259/overview/supercopa"
                    }
                ],
                "localizedName": "Paraguay"
            },
            {
                "ccode": "NED",
                "name": "Netherlands",
                "leagues": [
                    {
                        "id": 57,
                        "name": "Eredivisie",
                        "localizedName": "Eredivisie",
                        "pageUrl": "/leagues/57/overview/eredivisie"
                    },
                    {
                        "id": 111,
                        "name": "Eerste Divisie",
                        "localizedName": "Eerste Divisie",
                        "pageUrl": "/leagues/111/overview/eerste-divisie"
                    },
                    {
                        "id": 9195,
                        "name": "Tweede Divisie",
                        "localizedName": "Tweede Divisie",
                        "pageUrl": "/leagues/9195/overview/tweede-divisie"
                    },
                    {
                        "id": 58,
                        "name": "Eredivisie Qualification",
                        "localizedName": "Eredivisie Clasificación",
                        "pageUrl": "/leagues/58/overview/eredivisie-qualification"
                    },
                    {
                        "id": 10289,
                        "name": "Eredivisie Vrouwen",
                        "localizedName": "Eredivisie Vrouwen",
                        "pageUrl": "/leagues/10289/overview/eredivisie-vrouwen"
                    },
                    {
                        "id": 235,
                        "name": "KNVB Cup",
                        "localizedName": "KNVB Cup",
                        "pageUrl": "/leagues/235/overview/knvb-cup"
                    },
                    {
                        "id": 237,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/237/overview/super-cup"
                    },
                    {
                        "id": 9851,
                        "name": "Tweede Divisie Qualification",
                        "localizedName": "Tweede Divisie Clasificación",
                        "pageUrl": "/leagues/9851/overview/tweede-divisie-qualification"
                    }
                ],
                "localizedName": "Países Bajos"
            },
            {
                "ccode": "PER",
                "name": "Peru",
                "leagues": [
                    {
                        "id": 131,
                        "name": "Liga 1",
                        "localizedName": "Liga 1",
                        "pageUrl": "/leagues/131/overview/liga-1"
                    }
                ],
                "localizedName": "Perú"
            },
            {
                "ccode": "POL",
                "name": "Poland",
                "leagues": [
                    {
                        "id": 196,
                        "name": "Ekstraklasa",
                        "localizedName": "Ekstraklasa",
                        "pageUrl": "/leagues/196/overview/ekstraklasa"
                    },
                    {
                        "id": 197,
                        "name": "1 Liga",
                        "localizedName": "1 Liga",
                        "pageUrl": "/leagues/197/overview/1-liga"
                    },
                    {
                        "id": 198,
                        "name": "Puchar Polski",
                        "localizedName": "Puchar Polski",
                        "pageUrl": "/leagues/198/overview/puchar-polski"
                    },
                    {
                        "id": 200,
                        "name": "Superpuchar Polski",
                        "localizedName": "Superpuchar Polski",
                        "pageUrl": "/leagues/200/overview/superpuchar-polski"
                    },
                    {
                        "id": 8935,
                        "name": "2. Division",
                        "localizedName": "2. División",
                        "pageUrl": "/leagues/8935/overview/2-division"
                    },
                    {
                        "id": 10967,
                        "name": "II Liga Qualification",
                        "localizedName": "II Liga Clasificación",
                        "pageUrl": "/leagues/10967/overview/ii-liga-qualification"
                    }
                ],
                "localizedName": "Polonia"
            },
            {
                "ccode": "POR",
                "name": "Portugal",
                "leagues": [
                    {
                        "id": 61,
                        "name": "Liga Portugal",
                        "localizedName": "Liga Portugal",
                        "pageUrl": "/leagues/61/overview/liga-portugal"
                    },
                    {
                        "id": 185,
                        "name": "Liga Portugal 2",
                        "localizedName": "Liga Portugal 2",
                        "pageUrl": "/leagues/185/overview/liga-portugal-2"
                    },
                    {
                        "id": 187,
                        "name": "League Cup",
                        "localizedName": "League Cup",
                        "pageUrl": "/leagues/187/overview/league-cup"
                    },
                    {
                        "id": 9112,
                        "name": "Liga 3",
                        "localizedName": "Liga 3",
                        "pageUrl": "/leagues/9112/overview/liga-3"
                    },
                    {
                        "id": 9668,
                        "name": "Liga Portugal 2 Qualification",
                        "localizedName": "Liga Portugal 2 Clasificación",
                        "pageUrl": "/leagues/9668/overview/liga-portugal-2-qualification"
                    },
                    {
                        "id": 10215,
                        "name": "Liga Portugal Qualification",
                        "localizedName": "Liga Portugal Clasificación",
                        "pageUrl": "/leagues/10215/overview/liga-portugal-qualification"
                    },
                    {
                        "id": 10449,
                        "name": "Nacional Feminino",
                        "localizedName": "Nacional Feminino",
                        "pageUrl": "/leagues/10449/overview/nacional-feminino"
                    },
                    {
                        "id": 10657,
                        "name": "Nacional Feminino Qualification",
                        "localizedName": "Nacional Feminino Clasificación",
                        "pageUrl": "/leagues/10657/overview/nacional-feminino-qualification"
                    },
                    {
                        "id": 188,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/188/overview/super-cup"
                    },
                    {
                        "id": 186,
                        "name": "Taça de Portugal",
                        "localizedName": "Taça de Portugal",
                        "pageUrl": "/leagues/186/overview/taca-de-portugal"
                    }
                ],
                "localizedName": "Portugal"
            },
            {
                "ccode": "ROU",
                "name": "Romania",
                "leagues": [
                    {
                        "id": 189,
                        "name": "Liga I",
                        "localizedName": "Liga I",
                        "pageUrl": "/leagues/189/overview/liga-i"
                    },
                    {
                        "id": 9113,
                        "name": "Liga II",
                        "localizedName": "Liga II",
                        "pageUrl": "/leagues/9113/overview/liga-ii"
                    },
                    {
                        "id": 190,
                        "name": "Cupa României",
                        "localizedName": "Cupa României",
                        "pageUrl": "/leagues/190/overview/cupa-romaniei"
                    },
                    {
                        "id": 192,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/192/overview/super-cup"
                    },
                    {
                        "id": 9587,
                        "name": "Liga I Qualification",
                        "localizedName": "Liga I Clasificación",
                        "pageUrl": "/leagues/9587/overview/liga-i-qualification"
                    }
                ],
                "localizedName": "Rumanía"
            },
            {
                "ccode": "RUS",
                "name": "Russia",
                "leagues": [
                    {
                        "id": 63,
                        "name": "Premier League",
                        "localizedName": "Premier League",
                        "pageUrl": "/leagues/63/overview/premier-league"
                    },
                    {
                        "id": 193,
                        "name": "Russian Cup",
                        "localizedName": "Russian Cup",
                        "pageUrl": "/leagues/193/overview/russian-cup"
                    },
                    {
                        "id": 9333,
                        "name": "Premier League Qualification",
                        "localizedName": "Premier League Clasificación",
                        "pageUrl": "/leagues/9333/overview/premier-league-qualification"
                    },
                    {
                        "id": 195,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/195/overview/super-cup"
                    },
                    {
                        "id": 338,
                        "name": "1. Division",
                        "localizedName": "1. Division",
                        "pageUrl": "/leagues/338/overview/1-division"
                    },
                    {
                        "id": 9123,
                        "name": "Second League",
                        "localizedName": "Second League",
                        "pageUrl": "/leagues/9123/overview/second-league"
                    }
                ],
                "localizedName": "Rusia"
            },
            {
                "ccode": "SRB",
                "name": "Serbia",
                "leagues": [
                    {
                        "id": 182,
                        "name": "Super Liga",
                        "localizedName": "Super Liga",
                        "pageUrl": "/leagues/182/overview/super-liga"
                    },
                    {
                        "id": 183,
                        "name": "Kup Srbije",
                        "localizedName": "Kup Srbije",
                        "pageUrl": "/leagues/183/overview/kup-srbije"
                    },
                    {
                        "id": 10583,
                        "name": "Super Liga Qualification",
                        "localizedName": "Super Liga Clasificación",
                        "pageUrl": "/leagues/10583/overview/super-liga-qualification"
                    }
                ],
                "localizedName": "Serbia"
            },
            {
                "ccode": "SIN",
                "name": "Singapore",
                "leagues": [
                    {
                        "id": 461,
                        "name": "Singapore Premier League",
                        "localizedName": "Singapore Premier League",
                        "pageUrl": "/leagues/461/overview/singapore-premier-league"
                    },
                    {
                        "id": 9143,
                        "name": "Singapore Cup",
                        "localizedName": "Singapore Cup",
                        "pageUrl": "/leagues/9143/overview/singapore-cup"
                    }
                ],
                "localizedName": "Singapur"
            },
            {
                "ccode": "RSA",
                "name": "South Africa",
                "leagues": [
                    {
                        "id": 9474,
                        "name": "MTN8",
                        "localizedName": "MTN8",
                        "pageUrl": "/leagues/9474/overview/mtn8"
                    },
                    {
                        "id": 9473,
                        "name": "Nedbank Cup",
                        "localizedName": "Nedbank Cup",
                        "pageUrl": "/leagues/9473/overview/nedbank-cup"
                    },
                    {
                        "id": 537,
                        "name": "Premier Soccer League",
                        "localizedName": "Premier Soccer League",
                        "pageUrl": "/leagues/537/overview/premier-soccer-league"
                    },
                    {
                        "id": 10584,
                        "name": "South Africa League Qualification",
                        "localizedName": "South Africa League Qualification",
                        "pageUrl": "/leagues/10584/overview/south-africa-league-qualification"
                    }
                ],
                "localizedName": "Sudáfrica"
            },
            {
                "ccode": "SWE",
                "name": "Sweden",
                "leagues": [
                    {
                        "id": 67,
                        "name": "Allsvenskan",
                        "localizedName": "Allsvenskan",
                        "pageUrl": "/leagues/67/overview/allsvenskan"
                    },
                    {
                        "id": 68,
                        "name": "Allsvenskan Qualification",
                        "localizedName": "Allsvenskan Clasificación",
                        "pageUrl": "/leagues/68/overview/allsvenskan-qualification"
                    },
                    {
                        "id": 168,
                        "name": "Superettan",
                        "localizedName": "Superettan",
                        "pageUrl": "/leagues/168/overview/superettan"
                    },
                    {
                        "id": 172,
                        "name": "Superettan Qualification",
                        "localizedName": "Superettan Clasificación",
                        "pageUrl": "/leagues/172/overview/superettan-qualification"
                    },
                    {
                        "id": 9089,
                        "name": "Damallsvenskan (W)",
                        "localizedName": "Damallsvenskan (W)",
                        "pageUrl": "/leagues/9089/overview/damallsvenskan"
                    },
                    {
                        "id": 171,
                        "name": "Svenska Cupen",
                        "localizedName": "Svenska Cupen",
                        "pageUrl": "/leagues/171/overview/svenska-cupen"
                    },
                    {
                        "id": 9634,
                        "name": "1. Division Qualification",
                        "localizedName": "1. Division Qualification",
                        "pageUrl": "/leagues/9634/overview/1-division-qualification"
                    },
                    {
                        "id": 10316,
                        "name": "Damallsvenskan Qualification (W)",
                        "localizedName": "Damallsvenskan Clasificación (W)",
                        "pageUrl": "/leagues/10316/overview/damallsvenskan-qualification"
                    },
                    {
                        "id": 10308,
                        "name": "Eliteettan (W)",
                        "localizedName": "Eliteettan (W)",
                        "pageUrl": "/leagues/10308/overview/eliteettan"
                    },
                    {
                        "id": 169,
                        "name": "Ettan",
                        "localizedName": "Ettan",
                        "pageUrl": "/leagues/169/overview/ettan"
                    }
                ],
                "localizedName": "Suecia"
            },
            {
                "ccode": "SUI",
                "name": "Switzerland",
                "leagues": [
                    {
                        "id": 69,
                        "name": "Super League",
                        "localizedName": "Super League",
                        "pageUrl": "/leagues/69/overview/super-league"
                    },
                    {
                        "id": 163,
                        "name": "Challenge League",
                        "localizedName": "Challenge League",
                        "pageUrl": "/leagues/163/overview/challenge-league"
                    },
                    {
                        "id": 10433,
                        "name": "Challenge League Qualification",
                        "localizedName": "Challenge League Clasificación",
                        "pageUrl": "/leagues/10433/overview/challenge-league-qualification"
                    },
                    {
                        "id": 70,
                        "name": "Super League Qualification",
                        "localizedName": "Super League Clasificación",
                        "pageUrl": "/leagues/70/overview/super-league-qualification"
                    },
                    {
                        "id": 164,
                        "name": "Swiss Cup",
                        "localizedName": "Swiss Cup",
                        "pageUrl": "/leagues/164/overview/swiss-cup"
                    }
                ],
                "localizedName": "Suiza"
            },
            {
                "ccode": "THA",
                "name": "Thailand",
                "leagues": [
                    {
                        "id": 8984,
                        "name": "Premier League",
                        "localizedName": "Premier League",
                        "pageUrl": "/leagues/8984/overview/premier-league"
                    }
                ],
                "localizedName": "Tailandia"
            },
            {
                "ccode": "TAN",
                "name": "Tanzania",
                "leagues": [
                    {
                        "id": 9066,
                        "name": "Premier League",
                        "localizedName": "Premier League",
                        "pageUrl": "/leagues/9066/overview/premier-league"
                    },
                    {
                        "id": 10028,
                        "name": "Premier League Qualification",
                        "localizedName": "Premier League Clasificación",
                        "pageUrl": "/leagues/10028/overview/premier-league-qualification"
                    }
                ],
                "localizedName": "Tanzania"
            },
            {
                "ccode": "TUR",
                "name": "Turkiye",
                "leagues": [
                    {
                        "id": 71,
                        "name": "Süper Lig",
                        "localizedName": "Süper Lig",
                        "pageUrl": "/leagues/71/overview/super-lig"
                    },
                    {
                        "id": 165,
                        "name": "1. Lig",
                        "localizedName": "1. Lig",
                        "pageUrl": "/leagues/165/overview/1-lig"
                    },
                    {
                        "id": 166,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/166/overview/super-cup"
                    },
                    {
                        "id": 151,
                        "name": "Turkish Cup",
                        "localizedName": "Turkish Cup",
                        "pageUrl": "/leagues/151/overview/turkish-cup"
                    }
                ],
                "localizedName": "Turquía"
            },
            {
                "ccode": "TUN",
                "name": "Tunisia",
                "leagues": [
                    {
                        "id": 544,
                        "name": "Ligue I",
                        "localizedName": "Ligue I",
                        "pageUrl": "/leagues/544/overview/ligue-i"
                    },
                    {
                        "id": 9669,
                        "name": "Ligue I Qualification",
                        "localizedName": "Ligue I Clasificación",
                        "pageUrl": "/leagues/9669/overview/ligue-i-qualification"
                    }
                ],
                "localizedName": "Túnez"
            },
            {
                "ccode": "UKR",
                "name": "Ukraine",
                "leagues": [
                    {
                        "id": 441,
                        "name": "Premier League",
                        "localizedName": "Premier League",
                        "pageUrl": "/leagues/441/overview/premier-league"
                    },
                    {
                        "id": 9829,
                        "name": "Premier League Qualification",
                        "localizedName": "Premier League Clasificación",
                        "pageUrl": "/leagues/9829/overview/premier-league-qualification"
                    },
                    {
                        "id": 10023,
                        "name": "1. Division Qualification",
                        "localizedName": "1. División Clasificación",
                        "pageUrl": "/leagues/10023/overview/1-division-qualification"
                    },
                    {
                        "id": 442,
                        "name": "Ukraine Cup",
                        "localizedName": "Ukraine Cup",
                        "pageUrl": "/leagues/442/overview/ukraine-cup"
                    }
                ],
                "localizedName": "Ucrania"
            },
            {
                "ccode": "URU",
                "name": "Uruguay",
                "leagues": [
                    {
                        "id": 10342,
                        "name": "Copa Uruguay",
                        "localizedName": "Copa Uruguay",
                        "pageUrl": "/leagues/10342/overview/copa-uruguay"
                    },
                    {
                        "id": 161,
                        "name": "Primera Division",
                        "localizedName": "Primera Division",
                        "pageUrl": "/leagues/161/overview/primera-division"
                    },
                    {
                        "id": 9122,
                        "name": "Segunda Division",
                        "localizedName": "Segunda Division",
                        "pageUrl": "/leagues/9122/overview/segunda-division"
                    },
                    {
                        "id": 10343,
                        "name": "Supercopa",
                        "localizedName": "Supercopa",
                        "pageUrl": "/leagues/10343/overview/supercopa"
                    }
                ],
                "localizedName": "Uruguay"
            },
            {
                "ccode": "VEN",
                "name": "Venezuela",
                "leagues": [
                    {
                        "id": 339,
                        "name": "Primera Division",
                        "localizedName": "Primera Division",
                        "pageUrl": "/leagues/339/overview/primera-division"
                    }
                ],
                "localizedName": "Venezuela"
            },
            {
                "ccode": "VIE",
                "name": "Vietnam",
                "leagues": [
                    {
                        "id": 10737,
                        "name": "Super Cup",
                        "localizedName": "Super Cup",
                        "pageUrl": "/leagues/10737/overview/super-cup"
                    },
                    {
                        "id": 9088,
                        "name": "V-League",
                        "localizedName": "V-League",
                        "pageUrl": "/leagues/9088/overview/v-league"
                    },
                    {
                        "id": 9628,
                        "name": "V-League Qualification",
                        "localizedName": "V-League Clasificación",
                        "pageUrl": "/leagues/9628/overview/v-league-qualification"
                    }
                ],
                "localizedName": "Vietnam"
            }
        ]
    });
}