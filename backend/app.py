from flask import Flask, request
import pandas as pd
# from Flask_Cors import CORS, cross_origin


app = Flask(__name__)
# cors = CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/getData', methods = ['POST'])
# @cross_origin
def getData():
    req = request.get_json()
    data = pd.read_csv('test.csv')
    value = data.iloc[req['row'], req['col']] #index starts at 0. ignores the headers for row

    return {'Success': value}

if __name__ == "__main__":
    app.run(debug=True)