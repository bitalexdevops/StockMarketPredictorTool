# **Stock Market Predictor Ultimate**

This repository contains Python code for predicting stock market
movements using machine learning techniques. The code utilizes the
yfinance library to fetch historical data for the S&P 500 index (\^GSPC)
and then preprocesses the data to create features for training a Random
Forest Classifier model.

## **Prerequisites**

-   Python 3.x

-   pandas

-   yfinance

-   scikit-learn

You can install the required packages using pip:

pip install pandas yfinance scikit-learn

## **Usage**

1.  Clone the repository and navigate to the project directory.

2.  Run the code in a Python environment. The code is self-contained and
    > should execute without any additional setup.

## **Code Overview**

The code performs the following steps:

1.  Fetches historical data for the S&P 500 index using yfinance.

2.  Preprocesses the data by creating a Target column indicating whether
    > the next day\'s closing price is higher or lower than the current
    > day\'s closing price.

3.  Splits the data into training and testing sets.

4.  Trains a Random Forest Classifier model on the training data using
    > features such as Close, Volume, Open, High, and Low.

5.  Evaluates the model\'s performance on the testing data using the
    > precision_score metric.

6.  Defines helper functions for predicting and backtesting the model on
    > different time periods.

7.  Creates additional features such as rolling averages and trends at
    > different time horizons (2, 5, 60, 250, and 1000 days).

8.  Retrains the Random Forest Classifier model using the new features
    > and evaluates its performance.

## **Results**

The code outputs the precision score of the model\'s predictions, as
well as the value counts and proportions of the Target and Predictions
columns. You can analyze these results to assess the model\'s
performance and make any necessary adjustments.

## **Contributions**

Contributions to this project are welcome. If you find any issues or
have suggestions for improvements, please open an issue or submit a pull
request.

## ** License & Open Source **

Licensed Under Apache License 2.0
