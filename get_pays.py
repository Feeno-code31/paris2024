import requests
import json

def get_pays() :
    url = "https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/paris-2024-results-medals-oly-eng/records"
    limit = 100
    offset = 0
    all_data = []
    while True :
        params = {
            "select" : "country, medal_type",
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


    dict_pays_medal = dict()
    if(all_data) :
        for elem in all_data :
            country = elem["country"] 
            if country not in dict_pays_medal :
                dict_pays_medal[country] = {"Gold Medal" : 0, "Silver Medal": 0, "Bronze Medal" : 0}
            medal_type = elem["medal_type"]
            dict_pays_medal[country][medal_type] += 1

    print(dict_pays_medal)
    return dict_pays_medal

all_data_pays = get_pays()
