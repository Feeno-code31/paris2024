from fastapi import FastAPI, Query
from pydantic import BaseModel
from get_athletes_pays_medal import get_athletes_pays_medal
from get_athletes_disciplines import get_athletes_discipline
from fastapi.responses import FileResponse
from get_epreuves_discipline import get_epreuves_discipline
from get_athletes_discipline_epreuve import get_athletes_discipline_epreuve
from get_athletes_discipline_epreuve_medaille import get_athletes_discipline_epreuve_medaille
from get_athletes_discipline_medaille import get_athletes_discipline_medaille
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # en dev seulement
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Athlete(BaseModel) :
    name : str
    gender : str
    country : str
    discipline : str
    medal_type : str
    event : str


@app.get("/")
def home():
    return FileResponse("sports.html")


@app.get("/athletes/pays/{pays}/{medaille}")
async def read_home(pays:str, medaille:str) :
    data_pays = get_athletes_pays_medal(pays, medaille)
    return [Athlete(**element) for element in data_pays]

@app.get("/athletes/discipline/{discipline}")
async def read_discipline_athletes(discipline : str) :
    data_discipline = get_athletes_discipline(discipline)
    return [Athlete(**element) for element in data_discipline if element["discipline"] == discipline]


class Event(BaseModel) :
    event : str

@app.get("/epreuve/{discipline}")
async def read_epreuves_athletes(discipline : str) :
    epreuves = get_epreuves_discipline(discipline)
    return [Event(**epreuve) for epreuve in epreuves]


"""
@app.get("/athletes")
async def read_athletes(
    discipline : str, # Obligatoire car on doit avoir une discipline pour sélectionner une épreuve
    epreuve : str = Query(None), # None par défaut
    medaille : str = Query(None) # None par défaut
):
    if(epreuve != None and medaille != None) :
        athletes = get_athletes_discipline_epreuve_medaille(discipline, epreuve, medaille)
        return [Athlete(**athlete) for athlete in athletes]
    if(epreuve != None) :
        athletes = get_athletes_discipline_epreuve(discipline, epreuve)
        return [Athlete(**athlete) for athlete in athletes]
    if(medaille != None) :
        athletes = get_athletes_discipline_medaille(discipline,medaille)
        return [Athlete(**athlete) for athlete in athletes]
    
    athletes = get_athletes_discipline(discipline)
    return [Athlete(**athlete) for athlete in athletes]
"""

@app.get("/athletes")
async def read_athletes(
    discipline : str, # Obligatoire car on doit avoir une discipline pour sélectionner une épreuve
    epreuve : str = Query(None), # None par défaut donc facultatif
    medaille : str = Query(None) # None par défaut donc facultatif
):
    athletes = get_athletes_discipline(discipline)  # récupère tous les athlètes de la discipline

    # Filtrage en fonction des autres paramètres
    if epreuve is not None:
        athletes = [a for a in athletes if a["event"] == epreuve]
    
    if medaille is not None:
        athletes = [a for a in athletes if a["medal_type"] == medaille]

    return [Athlete(**a) for a in athletes]