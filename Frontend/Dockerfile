from flask import Flask
import requests

app = Flask(__name__)

@app.route("/")
def home():
    response = requests.get("http://backend-service:5000")
    return f"<h1>Frontend</h1><p>{response.text}</p>"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000) 
