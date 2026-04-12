import requests
import json



    
url = "https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/paris-2024-sites-de-competition/records"


def get_sites() : 
    """
        Récupère tous les sites (nom du site et sports) sans doublons où se sont déroulés des épreuves des JO 2024
    """
    data = []
    limit = 100
    offset = 0

    while True:

        params = {
            "select" : "nom_site, sports",
            "where" : 'category_id = "venue-olympic"',
            
            "order_by" : "nom_site ASC",
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


def get_sites_names() : 
    """
        Récupère le nom des sites
    """
    data = get_sites()
    return [{"nom_site" : site["nom_site"]} for site in data]

















# import time

# def get_sites_names(*args) : 
#     types_attendus = [str]
#     # Vérification cas valeur manquante
#     if(len(args) != len(types_attendus)) :
#         print("Le nombre d'arguments est incorrect ! Vérifiez et réessayez")
#         exit()

#     # Vérification cas valeur invalide dans la requête primaire

#     # zip() prend plusieurs listes ou itérables et les associe
#     # élément par élément
#     # On l'utilise pour le for dans notre cas
#     for argument, types in zip(args, types_attendus) : 
#         if(type(argument) != types) :
#             print("Vous avez entré un mauvais paramètre ! Vérifiez et réessayez")
#             exit()
 
#     params = {
#         "select" : args[0],
#         "category_id" : "venue-olympic",
#         "limit" : 20
#     }

#     url = "https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/paris-2024-sites-de-competition/records"

#     try:
#         response = requests.get(url, params=params)
#         # Vérification cas code de retour HTTP invalide (!= 200)
#         if(response.status_code != 200) :
#             print(response.status_code)
#             print("La requête est mal formulée ou non autorisée ! Vérifiez les paramètres et réessayez")
#             exit()

#         data = response.json()
#         for i in data["results"]:
#             print(i["nom_site"])

#     except requests.exceptions.ConnectionError :
#         print("Pas de connexion internet ! Veuillez vous connectez et réessayez")
#         exit()

# # varibales buffer pour l'écart de temps entre les requêtes
# sites_infos = None
# time_since_request = None

# def get_sites_all_info() : 
#     # Récupère toutes les informations concernant les sites du JO 2024
#     global sites_infos, time_since_request
#     if sites_infos is not None and time.time() - time_since_request < 300 :
#         """
#         with open("sites_infos.js", "w", encoding="utf-8") as f:
#             f.write("const sites_infos = ")
#             json.dump(sites_infos, f, indent=2)
#             f.write(";") 
#         """
    
#         return sites_infos

#     print(5)
#     params = {
#         "select" : "*",
#         "category_id" : "venue-olympic",
#         "limit" : 100
#     }

#     url = "https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/paris-2024-sites-de-competition/records"


    
#     try:
#         response = requests.get(url, params=params)
#         # Vérification cas code de retour HTTP invalide (!= 200)
#         if(response.status_code != 200) :
#             print(response.status_code)
#             print("La requête est mal formulée ou non autorisée ! Vérifiez les paramètres et réessayez")
#             exit()

#         data = response.json()
#         if data:
#             sites_infos = data["results"]
#             time_since_request = time.time()

#         if data:
#             with open("sites_infos.js", "w", encoding="utf-8") as f:
#                 f.write("const sites_infos = ")
#                 json.dump(sites_infos, f, indent=2)
#                 f.write(";")
            
#             """
#             for i in sites_infos:
#                 for champ in i:
#                     print(i[champ])
#                 print("\n")
#             """
            
#         return sites_infos

#     except requests.exceptions.ConnectionError :
#         print("Pas de connexion internet ! Veuillez vous connectez et réessayez")
#         exit()


# get_sites_all_info()
# get_sites_all_info()

