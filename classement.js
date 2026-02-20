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


const countryNameToCode = {
    "United States": "us",
    "China": "cn",
    "Japan": "jp",
    "Australia": "au",
    "France": "fr",
    "Netherlands": "nl",
    "Great Britain": "gb",
    "Korea": "kr",
    "Italy": "it",
    "Germany": "de",
    "New Zealand": "nz",
    "Canada": "ca",
    "Uzbekistan": "uz",
    "Hungary": "hu",
    "Spain": "es",
    "Sweden": "se",
    "Kenya": "ke",
    "Norway": "no",
    "Ireland": "ie",
    "Brazil": "br",
    "IR Iran": "ir",
    "Ukraine": "ua",
    "Romania": "ro",
    "Georgia": "ge",
    "Belgium": "be",
    "Bulgaria": "bg",
    "Serbia": "rs",
    "Czechia": "cz",
    "Denmark": "dk",
    "Azerbaijan": "az",
    "Croatia": "hr",
    "Cuba": "cu",
    "Bahrain": "bh",
    "Slovenia": "si",
    "Chinese Taipei": "tw",
    "Austria": "at",
    "Hong Kong, China": "hk",
    "Philippines": "ph",
    "Indonesia": "id",
    "Algeria": "dz",
    "Israel": "il",
    "Poland": "pl",
    "Kazakhstan": "kz",
    "South Africa": "za",
    "Jamaica": "jm",
    "Thailand": "th",
    "AIN": "xx",
    "Ethiopia": "et",
    "Switzerland": "ch",
    "Ecuador": "ec",
    "Portugal": "pt",
    "Greece": "gr",
    "Egypt": "eg",
    "Tunisia": "tn",
    "Argentina": "ar",
    "Uganda": "ug",
    "Chile": "cl",
    "Botswana": "bw",
    "Saint Lucia": "lc",
    "Dominican Republic": "do",
    "Morocco": "ma",
    "Guatemala": "gt",
    "Pakistan": "pk",
    "Dominica": "dm",
    "Türkiye": "tr",
    "Mexico": "mx",
    "Colombia": "co",
    "Armenia": "am",
    "DPR Korea": "kp",
    "Kyrgyzstan": "kg",
    "Lithuania": "lt",
    "India": "in",
    "Republic of Moldova": "md",
    "Kosovo": "xk",
    "Fiji": "fj",
    "Panama": "pa",
    "Jordan": "jo",
    "Cyprus": "cy",
    "Mongolia": "mn",
    "Tajikistan": "tj",
    "Malaysia": "my",
    "Albania": "al",
    "Puerto Rico": "pr",
    "Grenada": "gd",
    "Côte d'Ivoire": "ci",
    "Singapore": "sg",
    "Peru": "pe",
    "Qatar": "qa",
    "Slovakia": "sk",
    "Cabo Verde": "cv",
    "EOR": "xx",
    "Zambia": "zm"
};


function createFlagWithName(countryName) {
    const code = countryNameToCode[countryName];
    if (!code) return countryName; 

    return `
              <span class="fi fi-${code}"></span> 
              <span class="nom_pays_tab">${countryName}</span>
            `;
}


function classement() {
  const classement = document.getElementById("classement");
  classement.innerHTML = "";

  classementJO.forEach((line, i) => {
      const div_ligne = document.createElement("div");
      div_ligne.className = "classement_sous";

      const num = document.createElement("div");
      num.className = "numero_pays";
      num.textContent = i + 1;

      const nom = document.createElement("div");
      nom.className = "nom_pays";
      const drapeau_name = createFlagWithName(line.pays);
      nom.innerHTML = drapeau_name;

      const gMedals = document.createElement("div");
      gMedals.className = "nb_gold_medals";
      gMedals.textContent = line.gold;

      const sMedals = document.createElement("div");
      sMedals.className = "nb_silver_medals";
      sMedals.textContent = line.silver;

      const bMedals = document.createElement("div");
      bMedals.className = "nb_bronze_medals";
      bMedals.textContent = line.bronze;

      div_ligne.append(num, nom, gMedals, sMedals, bMedals);
      classement.appendChild(div_ligne);

      div_ligne.addEventListener("click", () => {
          // Vide le classement et ajoute la classe détails
          classement.innerHTML = "";
          classement.classList.add("pays_details");

          // Contenu de l'entête détails
          classement.innerHTML = `
              <div id="retour_classement"><span>Retour au classement</span></div>
              <div class="info_pays_details">
                  <h2>${line.pays}</h2>
                  <span>Médailles remportées</span>
              </div>
          `;

          // Crée pays_stats avant le listener retour
          let pays_stats = document.createElement("div");
          pays_stats.className = "pays_stats";

          let or = document.createElement("div");
          or.className = "or";
          or.innerHTML = `<i>Icone</i>
                          <p>${line.gold}</p>
                          <p>Or</p>`;
          pays_stats.appendChild(or);

          let argent = document.createElement("div");
          argent.className = "argent";
          argent.innerHTML = `<i>Icone</i>
                              <p>${line.silver}</p>
                              <p>Argent</p>`;
          pays_stats.appendChild(argent);

          let bronze = document.createElement("div");
          bronze.className = "bronze";
          bronze.innerHTML = `<i>Icone</i>
                              <p>${line.bronze}</p>
                              <p>Bronze</p>`;
          pays_stats.appendChild(bronze);

          // Filtre médailles
          let filtre_medailles = document.createElement("div");
          filtre_medailles.className = "filtre_medailles";
          filtre_medailles.innerHTML = `
              <span>Filtrer par médaille</span>
              <div class="choix_filtre_medailles">
                  <div class="medaille_filtre_css" id="all_medailles">Toutes les médailles</div>
                  <div class="medaille_filtre_css" id="or_filtre">Médaille Or</div>
                  <div class="medaille_filtre_css" id="argent_filtre">Médaille Argent</div>
                  <div class="medaille_filtre_css" id="bronze_filtre">Médaille Bronze</div>
              </div>
          `;

          let section_medailles_filtre = document.createElement("div");
          section_medailles_filtre.className = "section_medailles_filtre";
          section_medailles_filtre.innerHTML = `<h2>Les données seront affichées ici</h2>`;

          // Ajout au DOM
          classement.appendChild(pays_stats);
          classement.appendChild(filtre_medailles);
          classement.appendChild(section_medailles_filtre);

          // Listener retour
          document.getElementById("retour_classement").addEventListener("click", () => {
              // Supprime stats et classe détails avant de reconstruire
              pays_stats.remove();
              classement.classList.remove("pays_details");
              classement();
          });
      });
  });
}

function renderClassement() {
    const classement = document.getElementById("classement");
    classement.innerHTML =
    `<div class="classement_sous header">
        <div class="numero_pays">
            <span>#</span>
        </div>

        <div class="nom_pays">
            <span>Pays</span>
        </div>

        <div class="nb_gold_medals">
            <span>Or</span>
        </div>

        <div class="nb_silver_medals">
            <span>Argent</span>
        </div>

        <div class="nb_bronze_medals">
            <span>Bronze</span> 
        </div> 
      </div>`;

    classementJO.forEach((line, i) => {
        const div_ligne = document.createElement("div");
        div_ligne.className = "classement_sous";

        const num = document.createElement("div");
        num.className = "numero_pays";
        num.textContent = i + 1;

        const nom = document.createElement("div");
        nom.className = "nom_pays";
        const drapeau_name = createFlagWithName(line.pays);
        nom.innerHTML = drapeau_name;

        const gMedals = document.createElement("div");
        gMedals.className = "nb_gold_medals";
        gMedals.textContent = line.gold;

        const sMedals = document.createElement("div");
        sMedals.className = "nb_silver_medals";
        sMedals.textContent = line.silver;

        const bMedals = document.createElement("div");
        bMedals.className = "nb_bronze_medals";
        bMedals.textContent = line.bronze;

        div_ligne.append(num, nom, gMedals, sMedals, bMedals);
        classement.appendChild(div_ligne);

        div_ligne.addEventListener("click", () => {
            classement.innerHTML = "";
            classement.classList.add("pays_details");

            classement.innerHTML = `
                <div id="retour_classement"><span>Retour au classement</span></div>
                <div class="info_pays_details">
                    <h2>${line.pays}</h2>
                    <span>Médailles remportées</span>
                </div>
            `;

            
            document.getElementById("retour_classement").addEventListener("click", () => {
                classement.classList.remove("pays_details");
                renderClassement();
            });
        });
    });
}


renderClassement();


