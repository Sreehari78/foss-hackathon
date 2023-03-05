## PROBLEM 
The aim of the project is to recommend suitable fertilizer for a specific crop dependng on the soil composton like nitrogen phosphorus and potassium along wth factors like humidity temperature and moisture content and soil type.

## UI Interface

![Ui](/assets/images/ui.jpg)
![temperature](/assets/images/temp.jpg)
![Humdty](/assets/images/hum.jpg)
![Mosture](/assets/images/moist.jpg)


## Data
**
The data used here is a dataset uploaded on kaggle by mohitsingh14. The dataset contain 10 classes of 45-50 images each and is used for training the model. Each image is of size and labeled.


## Data Available

Soil Type	Crop Type
Sandy	    Maize
Loamy	    Sugarcane
Black   	Cotton
Red	        Tobacco
Clayey	    Paddy
	        Barley
	        Wheat
	        Millets
	        Oil seeds
	        Pulses
	        Ground Nuts


## Testing

### Pre-requisites
```
pip install os
pip install numpy
pip install pandas
pip install seaborn
pip install matplotlib
pip install imblearn
pip install Counter
pip install sklearn
pip install pickle
pip install tensorflow
```


The input is accepted from the user and is converted into an array format which is processed by the model and coressponding fertilizer is recommended.
```
import pickle
import xgboost as xgb
with open('fertname_dict.pkl', 'rb') as f:
    fert_dict = pickle.load(f)

with open('soiltype_dict.pkl', 'rb') as f:
    soil_dict = pickle.load(f)

with open('svm_pipeline.pkl', 'rb') as f:
    model = pickle.load(f)
    
with open('croptype_dict.pkl', 'rb') as f:
    crop_dict = pickle.load(f)

import numpy as np
import pandas as pd
data=np.array([30, 60, 63,  3,  1,  9,  9, 0]).reshape(1, -1)
X=pd.DataFrame(data)

print(X.values)

y=model.predict(X.values)

fert_dict.get(y[0])
```

## Working

This system provides a user friendly enviornment which enables the user to upload picture of crops and provide the details such as soil type , amount of Nitrogen, Phosphorous present in the soil. Here we implement two machine learning models one for crop detection and other mode is for the suggestion of fertilizer needed for that specific crop. When user input details regarding the crop , the crop detection model detects which crop is it and that result is forwarded into the Fertilizer prediction model which predicts the fertilizer required for the crop.



