import requests
import json

def get_nb_events() :
    url = "https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/paris-2024-results-medals-oly-eng/records"
    limit = 100
    offset = 0
    all_data = []
    while True :
        params = {
            "select" : "event",
            "limit" : limit,
            "offset" : offset
        }

        try :
            response = requests.get(url, params=params)
            if response.status_code != 200 : 
                print("Erreur")
                exit()
            
            data = response.json()["results"]
            if not data : 
                break 
            all_data.extend(data)
            offset += limit  

        except requests.exceptions.ConnectionError :
            print("Erreur de connexion !")
            exit()


    
    return all_data


nb = get_nb_events()
print(len(nb))