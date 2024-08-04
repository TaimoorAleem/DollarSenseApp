import os
import pandas as pd
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from werkzeug.utils import secure_filename
from sklearn.linear_model import LinearRegression
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder

# Constants for file uploads
ALLOWED_EXTENSIONS = {'csv'}
UPLOAD_FOLDER = '/files'

# Flask app setup
app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Utility function to check file extension
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() == 'csv'

# ML model class for expense prediction
class ExpensePredictor:
    def __init__(self):
        # Load and preprocess the dataset
        self.df = pd.read_csv("cleaned_monthlyspendings.csv")
        self.X = self.df[['Vendor', 'Category', 'Month']]
        self.y = self.df['Amount_Spent']
        
        # Preprocessing pipeline for categorical features
        categorical_features = ['Vendor', 'Category', 'Month']
        categorical_transformer = Pipeline(steps=[
            ('onehot', OneHotEncoder(handle_unknown='ignore'))
        ])
        preprocessor = ColumnTransformer(transformers=[
            ('cat', categorical_transformer, categorical_features)
        ])
        
        # Combine preprocessing with linear regression model
        self.model = Pipeline(steps=[
            ('preprocessor', preprocessor),
            ('regressor', LinearRegression())
        ])
        self.model.fit(self.X, self.y)

    def predict_expenses(self, next_month_data):
        # Predict and format expenses for the next month
        predictions = self.model.predict(next_month_data)
        return pd.DataFrame({
            'Vendor':next_month_data['Vendor'],
            'Category': next_month_data['Category'],
            'Predicted_Amount_Spent': predictions
        }).to_dict(orient='records')

# Instantiate the model
expense_predictor = ExpensePredictor()

# Route for uploading a CSV file and making a prediction
@app.route('/predict', methods=['POST'])
@cross_origin()
def predict():
    # Check if a file is part of the request
    if 'file' not in request.files:
        return jsonify(error='No file part'), 400
    file = request.files['file']
    
    # Check if file name is not empty and allowed
    if file.filename == '' or not allowed_file(file.filename):
        return jsonify(error='No selected file or file type not allowed'), 400
    
    # Save file
    filename = secure_filename(file.filename)
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(filepath)
    
    # Load and predict
    next_month_data = pd.read_csv(filepath)
    predictions = expense_predictor.predict_expenses(next_month_data)
    
    # Clean up: remove the file after prediction
    os.remove(filepath)
    return jsonify(predictions)



# Main entry point
if __name__ == '__main__':
    app.run(debug=True, port=5000)
