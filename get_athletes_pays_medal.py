import requests
import json
from pydantic import BaseModel


url = "https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/paris-2024-results-medals-oly-eng/records"

data = []

def get_athletes_pays_medal(pays:str, medaille:str) : 
    global data
    limit = 100
    offset = 0

    while True:

        params = {
            "select": "name, discipline, medal_type, country",
            "where": 'country = "{}" and medal_type = "{}"'.format(pays, medaille),
            "limit": limit,
            "offset": offset
        }

        try:
            response = requests.get(url, params = params)
            if(response.status_code != 200) :
                print("Erreur dans la requête")
                exit()
            
            resultats = response.json()["results"]
            if resultats:
                data.extend(resultats)
                offset+=limit
            else:
                break

        
        except requests.exceptions.ConnectionError :
            print("Pas de connexion internet!")
            exit()
    if not data:
        print('pas de données trouvées')

    return data

