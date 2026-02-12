const pays = {
  "Japan": {
    "Gold Medal": 20,
    "Silver Medal": 12,
    "Bronze Medal": 13
  },
  "Australia": {
    "Gold Medal": 18,
    "Silver Medal": 19,
    "Bronze Medal": 16
  },
  "Dominican Republic": {
    "Gold Medal": 1,
    "Silver Medal": 0,
    "Bronze Medal": 2
  },
  "United States": {
    "Gold Medal": 40,
    "Silver Medal": 44,
    "Bronze Medal": 42
  },
  "China": {
    "Gold Medal": 40,
    "Silver Medal": 27,
    "Bronze Medal": 24
  },
  "Ecuador": {
    "Gold Medal": 1,
    "Silver Medal": 2,
    "Bronze Medal": 2
  },
  "Greece": {
    "Gold Medal": 1,
    "Silver Medal": 1,
    "Bronze Medal": 6
  },
  "South Africa": {
    "Gold Medal": 1,
    "Silver Medal": 3,
    "Bronze Medal": 2
  },
  "Kenya": {
    "Gold Medal": 4,
    "Silver Medal": 2,
    "Bronze Medal": 5
  },
  "Canada": {
    "Gold Medal": 9,
    "Silver Medal": 7,
    "Bronze Medal": 11
  },
  "Netherlands": {
    "Gold Medal": 15,
    "Silver Medal": 7,
    "Bronze Medal": 12
  },
  "Great Britain": {
    "Gold Medal": 14,
    "Silver Medal": 22,
    "Bronze Medal": 29
  },
  "Uganda": {
    "Gold Medal": 1,
    "Silver Medal": 1,
    "Bronze Medal": 0
  },
  "Azerbaijan": {
    "Gold Medal": 2,
    "Silver Medal": 2,
    "Bronze Medal": 3
  },
  "Switzerland": {
    "Gold Medal": 1,
    "Silver Medal": 2,
    "Bronze Medal": 5
  },
  "DPR Korea": {
    "Gold Medal": 0,
    "Silver Medal": 2,
    "Bronze Medal": 4
  },
  "Slovenia": {
    "Gold Medal": 2,
    "Silver Medal": 1,
    "Bronze Medal": 0
  },
  "Bulgaria": {
    "Gold Medal": 3,
    "Silver Medal": 1,
    "Bronze Medal": 3
  },
  "France": {
    "Gold Medal": 16,
    "Silver Medal": 26,
    "Bronze Medal": 22
  },
  "Korea": {
    "Gold Medal": 13,
    "Silver Medal": 9,
    "Bronze Medal": 10
  },
  "Germany": {
    "Gold Medal": 12,
    "Silver Medal": 13,
    "Bronze Medal": 8
  },
  "Mexico": {
    "Gold Medal": 0,
    "Silver Medal": 3,
    "Bronze Medal": 2
  },
  "Morocco": {
    "Gold Medal": 1,
    "Silver Medal": 0,
    "Bronze Medal": 1
  },
  "Hungary": {
    "Gold Medal": 6,
    "Silver Medal": 7,
    "Bronze Medal": 6
  },
  "Italy": {
    "Gold Medal": 12,
    "Silver Medal": 13,
    "Bronze Medal": 15
  },
  "New Zealand": {
    "Gold Medal": 10,
    "Silver Medal": 7,
    "Bronze Medal": 3
  },
  "India": {
    "Gold Medal": 0,
    "Silver Medal": 1,
    "Bronze Medal": 5
  },
  "Poland": {
    "Gold Medal": 1,
    "Silver Medal": 4,
    "Bronze Medal": 5
  },
  "Brazil": {
    "Gold Medal": 3,
    "Silver Medal": 7,
    "Bronze Medal": 10
  },
  "Ethiopia": {
    "Gold Medal": 1,
    "Silver Medal": 3,
    "Bronze Medal": 0
  },
  "Colombia": {
    "Gold Medal": 0,
    "Silver Medal": 3,
    "Bronze Medal": 1
  },
  "Romania": {
    "Gold Medal": 3,
    "Silver Medal": 4,
    "Bronze Medal": 2
  },
  "IR Iran": {
    "Gold Medal": 3,
    "Silver Medal": 6,
    "Bronze Medal": 3
  },
  "Georgia": {
    "Gold Medal": 3,
    "Silver Medal": 3,
    "Bronze Medal": 1
  },
  "C\u00f4te d'Ivoire": {
    "Gold Medal": 0,
    "Silver Medal": 0,
    "Bronze Medal": 1
  },
  "Kosovo": {
    "Gold Medal": 0,
    "Silver Medal": 1,
    "Bronze Medal": 1
  },
  "Republic of Moldova": {
    "Gold Medal": 0,
    "Silver Medal": 1,
    "Bronze Medal": 3
  },
  "Croatia": {
    "Gold Medal": 2,
    "Silver Medal": 2,
    "Bronze Medal": 3
  },
  "Cuba": {
    "Gold Medal": 2,
    "Silver Medal": 1,
    "Bronze Medal": 6
  },
  "Ukraine": {
    "Gold Medal": 3,
    "Silver Medal": 5,
    "Bronze Medal": 4
  },
  "T\u00fcrkiye": {
    "Gold Medal": 0,
    "Silver Medal": 3,
    "Bronze Medal": 5
  },
  "Kyrgyzstan": {
    "Gold Medal": 0,
    "Silver Medal": 2,
    "Bronze Medal": 4
  },
  "Tajikistan": {
    "Gold Medal": 0,
    "Silver Medal": 0,
    "Bronze Medal": 3
  },
  "Denmark": {
    "Gold Medal": 2,
    "Silver Medal": 2,
    "Bronze Medal": 5
  },
  "Uzbekistan": {
    "Gold Medal": 8,
    "Silver Medal": 2,
    "Bronze Medal": 3
  },
  "Chinese Taipei": {
    "Gold Medal": 2,
    "Silver Medal": 0,
    "Bronze Medal": 5
  },
  "Czechia": {
    "Gold Medal": 3,
    "Silver Medal": 0,
    "Bronze Medal": 2
  },
  "Israel": {
    "Gold Medal": 1,
    "Silver Medal": 5,
    "Bronze Medal": 1
  },
  "Belgium": {
    "Gold Medal": 3,
    "Silver Medal": 1,
    "Bronze Medal": 6
  },
  "Hong Kong, China": {
    "Gold Medal": 2,
    "Silver Medal": 0,
    "Bronze Medal": 2
  },
  "Kazakhstan": {
    "Gold Medal": 1,
    "Silver Medal": 3,
    "Bronze Medal": 3
  },
  "Egypt": {
    "Gold Medal": 1,
    "Silver Medal": 1,
    "Bronze Medal": 1
  },
  "Chile": {
    "Gold Medal": 1,
    "Silver Medal": 1,
    "Bronze Medal": 0
  },
  "Armenia": {
    "Gold Medal": 0,
    "Silver Medal": 3,
    "Bronze Medal": 1
  },
  "Singapore": {
    "Gold Medal": 0,
    "Silver Medal": 0,
    "Bronze Medal": 1
  },
  "Jamaica": {
    "Gold Medal": 1,
    "Silver Medal": 3,
    "Bronze Medal": 2
  },
  "AIN": {
    "Gold Medal": 1,
    "Silver Medal": 3,
    "Bronze Medal": 1
  },
  "Bahrain": {
    "Gold Medal": 2,
    "Silver Medal": 1,
    "Bronze Medal": 1
  },
  "Sweden": {
    "Gold Medal": 4,
    "Silver Medal": 4,
    "Bronze Medal": 3
  },
  "Pakistan": {
    "Gold Medal": 1,
    "Silver Medal": 0,
    "Bronze Medal": 0
  },
  "Thailand": {
    "Gold Medal": 1,
    "Silver Medal": 3,
    "Bronze Medal": 2
  },
  "Spain": {
    "Gold Medal": 5,
    "Silver Medal": 4,
    "Bronze Medal": 9
  },
  "Lithuania": {
    "Gold Medal": 0,
    "Silver Medal": 2,
    "Bronze Medal": 2
  },
  "Tunisia": {
    "Gold Medal": 1,
    "Silver Medal": 1,
    "Bronze Medal": 1
  },
  "Peru": {
    "Gold Medal": 0,
    "Silver Medal": 0,
    "Bronze Medal": 1
  },
  "Philippines": {
    "Gold Medal": 2,
    "Silver Medal": 0,
    "Bronze Medal": 2
  },
  "Malaysia": {
    "Gold Medal": 0,
    "Silver Medal": 0,
    "Bronze Medal": 2
  },
  "Portugal": {
    "Gold Medal": 1,
    "Silver Medal": 2,
    "Bronze Medal": 1
  },
  "Fiji": {
    "Gold Medal": 0,
    "Silver Medal": 1,
    "Bronze Medal": 0
  },
  "Argentina": {
    "Gold Medal": 1,
    "Silver Medal": 1,
    "Bronze Medal": 1
  },
  "Serbia": {
    "Gold Medal": 3,
    "Silver Medal": 1,
    "Bronze Medal": 1
  },
  "Indonesia": {
    "Gold Medal": 2,
    "Silver Medal": 0,
    "Bronze Medal": 1
  },
  "Panama": {
    "Gold Medal": 0,
    "Silver Medal": 1,
    "Bronze Medal": 0
  },
  "Albania": {
    "Gold Medal": 0,
    "Silver Medal": 0,
    "Bronze Medal": 2
  },
  "Botswana": {
    "Gold Medal": 1,
    "Silver Medal": 1,
    "Bronze Medal": 0
  },
  "Puerto Rico": {
    "Gold Medal": 0,
    "Silver Medal": 0,
    "Bronze Medal": 2
  },
  "Saint Lucia": {
    "Gold Medal": 1,
    "Silver Medal": 1,
    "Bronze Medal": 0
  },
  "Jordan": {
    "Gold Medal": 0,
    "Silver Medal": 1,
    "Bronze Medal": 0
  },
  "Ireland": {
    "Gold Medal": 4,
    "Silver Medal": 0,
    "Bronze Medal": 3
  },
  "Austria": {
    "Gold Medal": 2,
    "Silver Medal": 0,
    "Bronze Medal": 3
  },
  "Qatar": {
    "Gold Medal": 0,
    "Silver Medal": 0,
    "Bronze Medal": 1
  },
  "Norway": {
    "Gold Medal": 4,
    "Silver Medal": 1,
    "Bronze Medal": 3
  },
  "Dominica": {
    "Gold Medal": 1,
    "Silver Medal": 0,
    "Bronze Medal": 0
  },
  "Cyprus": {
    "Gold Medal": 0,
    "Silver Medal": 1,
    "Bronze Medal": 0
  },
  "Guatemala": {
    "Gold Medal": 1,
    "Silver Medal": 0,
    "Bronze Medal": 1
  },
  "Slovakia": {
    "Gold Medal": 0,
    "Silver Medal": 0,
    "Bronze Medal": 1
  },
  "Cabo Verde": {
    "Gold Medal": 0,
    "Silver Medal": 0,
    "Bronze Medal": 1
  },
  "EOR": {
    "Gold Medal": 0,
    "Silver Medal": 0,
    "Bronze Medal": 1
  },
  "Mongolia": {
    "Gold Medal": 0,
    "Silver Medal": 1,
    "Bronze Medal": 0
  },
  "Algeria": {
    "Gold Medal": 2,
    "Silver Medal": 0,
    "Bronze Medal": 1
  },
  "Zambia": {
    "Gold Medal": 0,
    "Silver Medal": 0,
    "Bronze Medal": 1
  },
  "Grenada": {
    "Gold Medal": 0,
    "Silver Medal": 0,
    "Bronze Medal": 2
  }
};


const classementJO = Object.entries(pays)
  .map(([nom, medals]) => ({
    pays: nom,
    gold: medals["Gold Medal"],
    silver: medals["Silver Medal"],
    bronze: medals["Bronze Medal"]
  }))
  .sort((a, b) => {
    if (b.gold !== a.gold) return b.gold - a.gold;
    if (b.silver !== a.silver) return b.silver - a.silver;
    return b.bronze - a.bronze;
  });


console.log(classementJO);