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

    return  `
                <span class="fi fi-${code}"></span> 
                <span class="nom_pays_span">${countryName}</span>
            `;
}




const sports = document.getElementById("sports");
const athletes = document.getElementById("athletes");

const discipline_select = document.getElementById("discipline_select");


fetch(`http://127.0.0.1:8000/disciplines`)
.then(response => response.json())
.then(disciplines => 
    disciplines.forEach(discipline => {
        let sport = document.createElement("option");
        sport.value = discipline["discipline"];
        sport.textContent = discipline["discipline"];
        discipline_select.appendChild(sport);
    })
)



//----------------------------------------------------

const epreuve_select = document.getElementById("epreuve_select");
const medaille_select = document.getElementById("medaille_select");

discipline_select.addEventListener("change", function() {
    sports.innerHTML = "";
    epreuve_select.innerHTML = '<option value="">Épreuve</option>';
    
    fetch(`http://127.0.0.1:8000/epreuve/${this.value}`)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            let epreuve = document.createElement("option");
            epreuve.value = element["event"];
            epreuve.textContent = element["event"];
            epreuve_select.appendChild(epreuve);
        })
    })
})


// ------------------------------------------------------------------------
const chercher_athletes = document.getElementById("chercher_athletes");
chercher_athletes.addEventListener("click", () => {
    const params_fetch = new URLSearchParams();
    params_fetch.append("discipline", discipline_select.value);

    // n'ajoute le paramètre que si sélectionné
    if (epreuve_select.value !== "") params_fetch.append("epreuve", epreuve_select.value);
    if (medaille_select.value !== "") params_fetch.append("medaille", medaille_select.value);

    
    fetch(`http://localhost:8000/athletes/?${params_fetch.toString()}`)
    .then(response => response.json())
    .then(data => {
        athletes.innerHTML = `
            <div class="entete_athlete">
                <div class="nom_athlete">
                    <span>Nom</span>
                </div>

                <div class="genre">
                    <span>Genre</span>
                </div>

                <div class="nom_pays">
                    <span>Pays</span>
                </div>

                <div class="medal_type">
                    <span>Médaille</span>
                </div>

                <div class="discipline">
                    <span>Discipline</span> 
                </div>

                <div class="epreuve">
                    <span>Épreuve</span> 
                </div>


            </div>
        `;


        data.forEach(element => {
            let athlete = document.createElement("div");
            athlete.className = "athlete";
            let name_flag = createFlagWithName(element["country"])
            athlete.innerHTML = `
                <div class="nom_athlete">
                    <span>${element["name"]}</span>
                </div>

                <div class="genre">
                    <span>${element["gender"]}</span>
                </div>

                <div class="nom_pays">
                    ${name_flag}
                </div>

                <div class="medal_type">
                    <span>${element["medal_type"]}</span>
                </div>

                <div class="discipline">
                    <span>${element["discipline"]}</span>
                </div>

                <div class="epreuve">
                    <span>${element["event"]}</span> 
                </div> 
            
            `;
            
            athletes.appendChild(athlete);
            // Songer à corriger les genres pour l'équitation
        })
    });
})