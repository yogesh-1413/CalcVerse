import requests
import json

API_URL = os.getenv(CURRENCY_API)
response = requests.get(API_URL)
if response.status_code == 200:
    data = response.json()
    with open("currrency_data.json", 'w') as f:
        json.dump(data, f, separators=("," ":"), indent=2)
else:
    print("Error:", response.status_code)
