import requests
url = 'https://itn8wyc45i.execute-api.us-east-1.amazonaws.com/prod/upload'
response = requests.get(url)
data = response.json()
print(data)