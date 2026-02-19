import requests
import json

url = "https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/paris-2024-results-medals-oly-eng/records"
params = {
    "select": "name",
    "where": 'medal_type = "Gold Medal"',
    "order_by": "name"
}

response = requests.get(url, params=params)
data = response.json()
names = [r["name"] for r in data["results"]]

# Écrire dans un fichier JSON
with open("medalists.js", "w", encoding="utf-8") as f:
    f.write("const medalists = ")
    json.dump(names, f, indent=2)
    f.write(";")

