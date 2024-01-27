from flask import Flask, request, jsonify
app = Flask(__name__)
from joblib import load
model = load('random_forest_model.joblib')


@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    # Extract relevant data and convert to the format your model expects
    prediction = model.predict([data])
    return jsonify({'prediction': prediction.tolist()})


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')