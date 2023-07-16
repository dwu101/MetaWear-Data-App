from flask import Flask, request
import pandas as pd


app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/getData', methods = ['POST', 'GET'])
# @cross_origin
def getData():
    req = request.get_json()
    data = pd.read_csv('test.csv')
    value = data.iloc[req['row'], req['col']] #index starts at 0. ignores the headers for row

    return {'Success': value}

if __name__ == "__main__":
    app.run(debug=True)