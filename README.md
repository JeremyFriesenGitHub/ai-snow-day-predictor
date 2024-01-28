# AI - Snow Day Predictor

## Description
This single-page application uses a random forest classifier model to help predict snow days. Data used for training the model can be found [here.](https://ottawa.weatherstats.ca/download.html) Users in the app, can login and either get past snow day predictions or input new data for the model to predict. Admins can add historical data to a database and see user feedback from the app!  

## Prerequisites
To run this application, Docker must be installed on your local machine and running. Installing Docker Desktop is recommended for ease of use. Installation instructions can be found at [Docker Desktop Installation](https://docs.docker.com/desktop/install/windows-install/).

## Setup Instructions
1. Make sure to download and extract the source files from this repo. 
2. Open the command prompt and navigate to the root directory of this project.
3. Use the command:
   ```bash
     docker-compose up
     ```
   Make sure the Docker engine is running in order to create your container!
4. To stop, use:
   ```bash
    Ctrl+C
   ```
   Start again using:
   ```bash
     docker-compose up
     ```
   Or use Docker desktop to run container again.

5. **Tutorial**:
   - For a comprehensive walkthrough, you can watch a YouTube tutorial [here]().

## License
This project is licensed under the Apache License 2.0.

