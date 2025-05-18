const globalLevels = {
    "0": "Mage",
    "1": "Warrior",
    "2": "Paladin",
    "Mage": {
        "1": {
            "exp": 0,
            "hp": 15,
            "mp": 0,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "2": {
            "exp": 15,
            "hp": 2,
            "mp": 5,
            "tp": 1,
            "strength": 1,
            "dexterity": 1,
            "spells": 1
        },
        "3": {
            "exp": 45,
            "hp": 3,
            "mp": 4,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "4": {
            "exp": 105,
            "hp": 3,
            "mp": 3,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "5": {
            "exp": 195,
            "hp": 2,
            "mp": 5,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "6": {
            "exp": 330,
            "hp": 4,
            "mp": 5,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "7": {
            "exp": 532,
            "hp": 3,
            "mp": 4,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "8": {
            "exp": 835,
            "hp": 2,
            "mp": 4,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "9": {
            "exp": 1290,
            "hp": 5,
            "mp": 3,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "10": {
            "exp": 1973,
            "hp": 10,
            "mp": 3,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "11": {
            "exp": 2997,
            "hp": 5,
            "mp": 2,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "12": {
            "exp": 4533,
            "hp": 4,
            "mp": 2,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "13": {
            "exp": 6453,
            "hp": 4,
            "mp": 3,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "14": {
            "exp": 8853,
            "hp": 5,
            "mp": 4,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "15": {
            "exp": 11853,
            "hp": 5,
            "mp": 5,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "16": {
            "exp": 15603,
            "hp": 5,
            "mp": 3,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "17": {
            "exp": 20290,
            "hp": 4,
            "mp": 2,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "18": {
            "exp": 25563,
            "hp": 4,
            "mp": 2,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "19": {
            "exp": 31495,
            "hp": 4,
            "mp": 5,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "20": {
            "exp": 38169,
            "hp": 10,
            "mp": 6,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "21": {
            "exp": 45676,
            "hp": 4,
            "mp": 4,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "22": {
            "exp": 54121,
            "hp": 5,
            "mp": 5,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "23": {
            "exp": 63622,
            "hp": 5,
            "mp": 3,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "24": {
            "exp": 74310,
            "hp": 5,
            "mp": 5,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "25": {
            "exp": 86334,
            "hp": 4,
            "mp": 4,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "26": {
            "exp": 99861,
            "hp": 6,
            "mp": 3,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "27": {
            "exp": 115078,
            "hp": 6,
            "mp": 2,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "28": {
            "exp": 132197,
            "hp": 4,
            "mp": 2,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "29": {
            "exp": 151456,
            "hp": 6,
            "mp": 3,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "30": {
            "exp": 173121,
            "hp": 10,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "31": {
            "exp": 197494,
            "hp": 5,
            "mp": 5,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "32": {
            "exp": 224913,
            "hp": 6,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "33": {
            "exp": 255758,
            "hp": 5,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "34": {
            "exp": 290458,
            "hp": 6,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "35": {
            "exp": 329495,
            "hp": 5,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "36": {
            "exp": 373412,
            "hp": 4,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "37": {
            "exp": 422818,
            "hp": 5,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "38": {
            "exp": 478399,
            "hp": 6,
            "mp": 5,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "39": {
            "exp": 540927,
            "hp": 6,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "40": {
            "exp": 611271,
            "hp": 15,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "41": {
            "exp": 690408,
            "hp": 7,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "42": {
            "exp": 779437,
            "hp": 7,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "43": {
            "exp": 879592,
            "hp": 8,
            "mp": 5,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "44": {
            "exp": 992268,
            "hp": 6,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "45": {
            "exp": 1119028,
            "hp": 5,
            "mp": 8,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "46": {
            "exp": 1245788,
            "hp": 6,
            "mp": 5,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "47": {
            "exp": 1372548,
            "hp": 7,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "48": {
            "exp": 1499308,
            "hp": 6,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "49": {
            "exp": 1626068,
            "hp": 5,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "50": {
            "exp": 1752828,
            "hp": 15,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "51": {
            "exp": 1879588,
            "hp": 6,
            "mp": 2,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "52": {
            "exp": 2006348,
            "hp": 7,
            "mp": 2,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "53": {
            "exp": 2133108,
            "hp": 8,
            "mp": 2,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "54": {
            "exp": 2259868,
            "hp": 8,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "55": {
            "exp": 2386628,
            "hp": 7,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "56": {
            "exp": 2513388,
            "hp": 7,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "57": {
            "exp": 2640148,
            "hp": 6,
            "mp": 5,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "58": {
            "exp": 2766908,
            "hp": 5,
            "mp": 5,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "59": {
            "exp": 2893668,
            "hp": 8,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "60": {
            "exp": 3020428,
            "hp": 15,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "61": {
            "exp": 3147188,
            "hp": 8,
            "mp": 5,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "62": {
            "exp": 3273948,
            "hp": 8,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "63": {
            "exp": 3400708,
            "hp": 9,
            "mp": 5,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "64": {
            "exp": 3527468,
            "hp": 5,
            "mp": 5,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "65": {
            "exp": 3654228,
            "hp": 6,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "66": {
            "exp": 3780988,
            "hp": 8,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "67": {
            "exp": 3907748,
            "hp": 7,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "68": {
            "exp": 4034508,
            "hp": 9,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "69": {
            "exp": 4161268,
            "hp": 5,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "70": {
            "exp": 4288028,
            "hp": 20,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "71": {
            "exp": 4414788,
            "hp": 5,
            "mp": 5,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "72": {
            "exp": 4541548,
            "hp": 6,
            "mp": 2,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "73": {
            "exp": 4668308,
            "hp": 8,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "74": {
            "exp": 4795068,
            "hp": 7,
            "mp": 5,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "75": {
            "exp": 4921828,
            "hp": 5,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "76": {
            "exp": 5048588,
            "hp": 6,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "77": {
            "exp": 5175348,
            "hp": 6,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "78": {
            "exp": 5302108,
            "hp": 7,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "79": {
            "exp": 5428868,
            "hp": 8,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "80": {
            "exp": 5555628,
            "hp": 20,
            "mp": 5,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "81": {
            "exp": 5682388,
            "hp": 7,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "82": {
            "exp": 5809148,
            "hp": 6,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "83": {
            "exp": 5935908,
            "hp": 6,
            "mp": 2,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "84": {
            "exp": 6062668,
            "hp": 5,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "85": {
            "exp": 6189428,
            "hp": 7,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "86": {
            "exp": 6316188,
            "hp": 8,
            "mp": 5,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "87": {
            "exp": 6442948,
            "hp": 8,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "88": {
            "exp": 6569708,
            "hp": 9,
            "mp": 5,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "89": {
            "exp": 6696468,
            "hp": 5,
            "mp": 2,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "90": {
            "exp": 6823228,
            "hp": 20,
            "mp": 2,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "91": {
            "exp": 6949988,
            "hp": 5,
            "mp": 3,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "92": {
            "exp": 7076748,
            "hp": 6,
            "mp": 3,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "93": {
            "exp": 7203508,
            "hp": 8,
            "mp": 4,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "94": {
            "exp": 7330268,
            "hp": 4,
            "mp": 4,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "95": {
            "exp": 7457028,
            "hp": 3,
            "mp": 3,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "96": {
            "exp": 7583788,
            "hp": 5,
            "mp": 3,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "97": {
            "exp": 7710548,
            "hp": 5,
            "mp": 4,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "98": {
            "exp": 7837308,
            "hp": 4,
            "mp": 5,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "99": {
            "exp": 7964068,
            "hp": 50,
            "mp": 5,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "100": {
            "exp": 16777215,
            "hp": 0,
            "mp": 0,
            "tp": 0,
            "strength": 0,
            "dexterity": 0,
            "spells": 0
        }
    },
    "Warrior": {
        "1": {
            "exp": 0,
            "hp": 15,
            "mp": 0,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "2": {
            "exp": 18,
            "hp": 2,
            "mp": 4,
            "tp": 1,
            "strength": 1,
            "dexterity": 1,
            "spells": 1
        },
        "3": {
            "exp": 54,
            "hp": 2,
            "mp": 3,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "4": {
            "exp": 126,
            "hp": 2,
            "mp": 3,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "5": {
            "exp": 234,
            "hp": 2,
            "mp": 4,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "6": {
            "exp": 396,
            "hp": 3,
            "mp": 4,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "7": {
            "exp": 639,
            "hp": 2,
            "mp": 3,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "8": {
            "exp": 1003,
            "hp": 2,
            "mp": 3,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "9": {
            "exp": 1549,
            "hp": 4,
            "mp": 2,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "10": {
            "exp": 2369,
            "hp": 10,
            "mp": 2,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "11": {
            "exp": 3598,
            "hp": 4,
            "mp": 1,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "12": {
            "exp": 5441,
            "hp": 4,
            "mp": 1,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "13": {
            "exp": 7745,
            "hp": 4,
            "mp": 2,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "14": {
            "exp": 10625,
            "hp": 4,
            "mp": 3,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "15": {
            "exp": 14225,
            "hp": 4,
            "mp": 4,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "16": {
            "exp": 18725,
            "hp": 5,
            "mp": 2,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "17": {
            "exp": 24350,
            "hp": 4,
            "mp": 1,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "18": {
            "exp": 30678,
            "hp": 3,
            "mp": 1,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "19": {
            "exp": 37797,
            "hp": 3,
            "mp": 4,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "20": {
            "exp": 45805,
            "hp": 10,
            "mp": 5,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "21": {
            "exp": 54814,
            "hp": 4,
            "mp": 3,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "22": {
            "exp": 64949,
            "hp": 4,
            "mp": 4,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "23": {
            "exp": 76350,
            "hp": 4,
            "mp": 2,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "24": {
            "exp": 89176,
            "hp": 4,
            "mp": 4,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "25": {
            "exp": 103605,
            "hp": 3,
            "mp": 3,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "26": {
            "exp": 119837,
            "hp": 5,
            "mp": 2,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "27": {
            "exp": 138098,
            "hp": 5,
            "mp": 1,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "28": {
            "exp": 158641,
            "hp": 4,
            "mp": 1,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "29": {
            "exp": 181751,
            "hp": 5,
            "mp": 2,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "30": {
            "exp": 207749,
            "hp": 10,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "31": {
            "exp": 236996,
            "hp": 4,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "32": {
            "exp": 269898,
            "hp": 5,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "33": {
            "exp": 306912,
            "hp": 5,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "34": {
            "exp": 348552,
            "hp": 5,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "35": {
            "exp": 395397,
            "hp": 4,
            "mp": 2,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "36": {
            "exp": 448097,
            "hp": 5,
            "mp": 2,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "37": {
            "exp": 507384,
            "hp": 5,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "38": {
            "exp": 574081,
            "hp": 5,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "39": {
            "exp": 649115,
            "hp": 5,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "40": {
            "exp": 733528,
            "hp": 15,
            "mp": 2,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "41": {
            "exp": 828492,
            "hp": 6,
            "mp": 2,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "42": {
            "exp": 935326,
            "hp": 6,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "43": {
            "exp": 1055514,
            "hp": 7,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "44": {
            "exp": 1190725,
            "hp": 5,
            "mp": 2,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "45": {
            "exp": 1325936,
            "hp": 5,
            "mp": 8,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "46": {
            "exp": 1461147,
            "hp": 5,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "47": {
            "exp": 1596358,
            "hp": 6,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "48": {
            "exp": 1731569,
            "hp": 5,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "49": {
            "exp": 1866780,
            "hp": 4,
            "mp": 2,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "50": {
            "exp": 2001991,
            "hp": 15,
            "mp": 2,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "51": {
            "exp": 2137202,
            "hp": 5,
            "mp": 1,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "52": {
            "exp": 2272413,
            "hp": 6,
            "mp": 1,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "53": {
            "exp": 2407624,
            "hp": 7,
            "mp": 1,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "54": {
            "exp": 2542835,
            "hp": 7,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "55": {
            "exp": 2678046,
            "hp": 6,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "56": {
            "exp": 2813257,
            "hp": 6,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "57": {
            "exp": 2948468,
            "hp": 6,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "58": {
            "exp": 3083679,
            "hp": 5,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "59": {
            "exp": 3218890,
            "hp": 7,
            "mp": 2,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "60": {
            "exp": 3354101,
            "hp": 15,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "61": {
            "exp": 3489312,
            "hp": 7,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "62": {
            "exp": 3624523,
            "hp": 7,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "63": {
            "exp": 3759734,
            "hp": 8,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "64": {
            "exp": 3894945,
            "hp": 5,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "65": {
            "exp": 4030156,
            "hp": 6,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "66": {
            "exp": 4165367,
            "hp": 8,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "67": {
            "exp": 4300578,
            "hp": 7,
            "mp": 2,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "68": {
            "exp": 4435789,
            "hp": 8,
            "mp": 2,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "69": {
            "exp": 4571000,
            "hp": 5,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "70": {
            "exp": 4706211,
            "hp": 20,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "71": {
            "exp": 4841422,
            "hp": 5,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "72": {
            "exp": 4976633,
            "hp": 5,
            "mp": 1,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "73": {
            "exp": 5111844,
            "hp": 8,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "74": {
            "exp": 5247055,
            "hp": 6,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "75": {
            "exp": 5382266,
            "hp": 5,
            "mp": 2,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "76": {
            "exp": 5517477,
            "hp": 6,
            "mp": 2,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "77": {
            "exp": 5652688,
            "hp": 7,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "78": {
            "exp": 5787899,
            "hp": 7,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "79": {
            "exp": 5923110,
            "hp": 7,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "80": {
            "exp": 6058321,
            "hp": 20,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "81": {
            "exp": 6193532,
            "hp": 7,
            "mp": 2,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "82": {
            "exp": 6328743,
            "hp": 5,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "83": {
            "exp": 6463954,
            "hp": 6,
            "mp": 1,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "84": {
            "exp": 6599165,
            "hp": 5,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "85": {
            "exp": 6734376,
            "hp": 6,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "86": {
            "exp": 6869587,
            "hp": 8,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "87": {
            "exp": 7004798,
            "hp": 7,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "88": {
            "exp": 7140009,
            "hp": 8,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "89": {
            "exp": 7275220,
            "hp": 5,
            "mp": 1,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "90": {
            "exp": 7410431,
            "hp": 20,
            "mp": 1,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "91": {
            "exp": 7545642,
            "hp": 5,
            "mp": 2,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "92": {
            "exp": 7680853,
            "hp": 4,
            "mp": 2,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "93": {
            "exp": 7816064,
            "hp": 6,
            "mp": 2,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "94": {
            "exp": 7951275,
            "hp": 4,
            "mp": 3,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "95": {
            "exp": 8086486,
            "hp": 4,
            "mp": 2,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "96": {
            "exp": 8221697,
            "hp": 5,
            "mp": 2,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "97": {
            "exp": 8356908,
            "hp": 5,
            "mp": 3,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "98": {
            "exp": 8492119,
            "hp": 4,
            "mp": 3,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "99": {
            "exp": 8627330,
            "hp": 50,
            "mp": 3,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "100": {
            "exp": 16777215,
            "hp": 0,
            "mp": 0,
            "tp": 0,
            "strength": 0,
            "dexterity": 0,
            "spells": 0
        }
    },
    "Paladin": {
        "1": {
            "exp": 0,
            "hp": 15,
            "mp": 0,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "2": {
            "exp": 20,
            "hp": 2,
            "mp": 5,
            "tp": 1,
            "strength": 1,
            "dexterity": 1,
            "spells": 1
        },
        "3": {
            "exp": 60,
            "hp": 2,
            "mp": 3,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "4": {
            "exp": 140,
            "hp": 2,
            "mp": 4,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "5": {
            "exp": 260,
            "hp": 2,
            "mp": 4,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "6": {
            "exp": 440,
            "hp": 3,
            "mp": 5,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "7": {
            "exp": 710,
            "hp": 2,
            "mp": 3,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "8": {
            "exp": 1115,
            "hp": 2,
            "mp": 4,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "9": {
            "exp": 1722,
            "hp": 4,
            "mp": 2,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "10": {
            "exp": 2633,
            "hp": 10,
            "mp": 3,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "11": {
            "exp": 3999,
            "hp": 4,
            "mp": 1,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "12": {
            "exp": 6047,
            "hp": 4,
            "mp": 2,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "13": {
            "exp": 8607,
            "hp": 4,
            "mp": 2,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "14": {
            "exp": 11807,
            "hp": 4,
            "mp": 4,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "15": {
            "exp": 15808,
            "hp": 4,
            "mp": 4,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "16": {
            "exp": 20807,
            "hp": 5,
            "mp": 3,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "17": {
            "exp": 27057,
            "hp": 4,
            "mp": 1,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "18": {
            "exp": 34869,
            "hp": 3,
            "mp": 2,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "19": {
            "exp": 43657,
            "hp": 3,
            "mp": 4,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "20": {
            "exp": 53543,
            "hp": 10,
            "mp": 6,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "21": {
            "exp": 64664,
            "hp": 4,
            "mp": 3,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "22": {
            "exp": 77175,
            "hp": 4,
            "mp": 5,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "23": {
            "exp": 91250,
            "hp": 4,
            "mp": 2,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "24": {
            "exp": 107083,
            "hp": 4,
            "mp": 5,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "25": {
            "exp": 124895,
            "hp": 3,
            "mp": 3,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "26": {
            "exp": 144933,
            "hp": 5,
            "mp": 3,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "27": {
            "exp": 167475,
            "hp": 5,
            "mp": 1,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "28": {
            "exp": 192835,
            "hp": 4,
            "mp": 2,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "29": {
            "exp": 221365,
            "hp": 5,
            "mp": 2,
            "tp": 2,
            "strength": 2,
            "dexterity": 2,
            "spells": 2
        },
        "30": {
            "exp": 253461,
            "hp": 10,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "31": {
            "exp": 289568,
            "hp": 4,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "32": {
            "exp": 330188,
            "hp": 5,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "33": {
            "exp": 375885,
            "hp": 5,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "34": {
            "exp": 427294,
            "hp": 5,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "35": {
            "exp": 485126,
            "hp": 4,
            "mp": 2,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "36": {
            "exp": 550188,
            "hp": 5,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "37": {
            "exp": 623383,
            "hp": 5,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "38": {
            "exp": 705726,
            "hp": 5,
            "mp": 5,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "39": {
            "exp": 798362,
            "hp": 5,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "40": {
            "exp": 902577,
            "hp": 15,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "41": {
            "exp": 1019818,
            "hp": 6,
            "mp": 2,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "42": {
            "exp": 1151714,
            "hp": 6,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "43": {
            "exp": 1300096,
            "hp": 7,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "44": {
            "exp": 1448478,
            "hp": 5,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "45": {
            "exp": 1596860,
            "hp": 5,
            "mp": 8,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "46": {
            "exp": 1745242,
            "hp": 5,
            "mp": 5,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "47": {
            "exp": 1893624,
            "hp": 6,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "48": {
            "exp": 2042006,
            "hp": 5,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "49": {
            "exp": 2190388,
            "hp": 4,
            "mp": 2,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "50": {
            "exp": 2338770,
            "hp": 15,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "51": {
            "exp": 2487152,
            "hp": 5,
            "mp": 1,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "52": {
            "exp": 2635534,
            "hp": 6,
            "mp": 2,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "53": {
            "exp": 2783916,
            "hp": 7,
            "mp": 1,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "54": {
            "exp": 2932298,
            "hp": 7,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "55": {
            "exp": 3080680,
            "hp": 6,
            "mp": 3,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "56": {
            "exp": 3229062,
            "hp": 6,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "57": {
            "exp": 3377444,
            "hp": 6,
            "mp": 4,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "58": {
            "exp": 3525826,
            "hp": 5,
            "mp": 5,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "59": {
            "exp": 3674208,
            "hp": 7,
            "mp": 2,
            "tp": 3,
            "strength": 3,
            "dexterity": 3,
            "spells": 3
        },
        "60": {
            "exp": 3822590,
            "hp": 15,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "61": {
            "exp": 3970972,
            "hp": 7,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "62": {
            "exp": 4119354,
            "hp": 7,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "63": {
            "exp": 4267736,
            "hp": 8,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "64": {
            "exp": 4416118,
            "hp": 5,
            "mp": 5,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "65": {
            "exp": 4564500,
            "hp": 6,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "66": {
            "exp": 4712882,
            "hp": 8,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "67": {
            "exp": 4861264,
            "hp": 7,
            "mp": 2,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "68": {
            "exp": 5009646,
            "hp": 8,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "69": {
            "exp": 5158028,
            "hp": 5,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "70": {
            "exp": 5306410,
            "hp": 20,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "71": {
            "exp": 5454792,
            "hp": 5,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "72": {
            "exp": 5603174,
            "hp": 5,
            "mp": 2,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "73": {
            "exp": 5751556,
            "hp": 8,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "74": {
            "exp": 5899938,
            "hp": 6,
            "mp": 5,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "75": {
            "exp": 6048320,
            "hp": 5,
            "mp": 2,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "76": {
            "exp": 6196702,
            "hp": 6,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "77": {
            "exp": 6345084,
            "hp": 7,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "78": {
            "exp": 6493466,
            "hp": 7,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "79": {
            "exp": 6641848,
            "hp": 7,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "80": {
            "exp": 6790230,
            "hp": 20,
            "mp": 5,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "81": {
            "exp": 6938612,
            "hp": 7,
            "mp": 2,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "82": {
            "exp": 7086994,
            "hp": 5,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "83": {
            "exp": 7235376,
            "hp": 6,
            "mp": 1,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "84": {
            "exp": 7383758,
            "hp": 5,
            "mp": 4,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "85": {
            "exp": 7532140,
            "hp": 6,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "86": {
            "exp": 7680522,
            "hp": 8,
            "mp": 5,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "87": {
            "exp": 7828904,
            "hp": 7,
            "mp": 3,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "88": {
            "exp": 7977286,
            "hp": 8,
            "mp": 5,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "89": {
            "exp": 8125668,
            "hp": 5,
            "mp": 1,
            "tp": 4,
            "strength": 4,
            "dexterity": 4,
            "spells": 4
        },
        "90": {
            "exp": 8274050,
            "hp": 20,
            "mp": 2,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "91": {
            "exp": 8422432,
            "hp": 5,
            "mp": 2,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "92": {
            "exp": 8570814,
            "hp": 4,
            "mp": 3,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "93": {
            "exp": 8719196,
            "hp": 6,
            "mp": 2,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "94": {
            "exp": 8867578,
            "hp": 4,
            "mp": 4,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "95": {
            "exp": 9015960,
            "hp": 4,
            "mp": 2,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "96": {
            "exp": 9164342,
            "hp": 5,
            "mp": 3,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "97": {
            "exp": 9312724,
            "hp": 5,
            "mp": 3,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "98": {
            "exp": 9461106,
            "hp": 4,
            "mp": 4,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "99": {
            "exp": 9609488,
            "hp": 50,
            "mp": 4,
            "tp": 5,
            "strength": 5,
            "dexterity": 5,
            "spells": 5
        },
        "100": {
            "exp": 16777215,
            "hp": 0,
            "mp": 0,
            "tp": 0,
            "strength": 0,
            "dexterity": 0,
            "spells": 0
        }
    }
}