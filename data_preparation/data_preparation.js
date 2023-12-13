const tf = require('@tensorflow/tfjs-node');
const Papa = require('papaparse');
const fs = require('fs');

// Function to load and preprocess data from CSV
async function loadData(filePath) {
    const csvFile = fs.readFileSync(filePath, 'utf8');
    const parsedCSV = Papa.parse(csvFile, { header: true, dynamicTyping: true }).data;

    const features = parsedCSV.map(row => 
        [row.Temperature, row.Wind_Chill, row.Visibility, row.Rain, row.Snow, row.Snow_On_Ground]);
    const labels = parsedCSV.map(row => [row.Outcome]);

    // Convert data to tensors and normalize
    const featureTensor = tf.tensor2d(features);
    const labelTensor = tf.tensor2d(labels);

    // Shuffle and split the data into training and testing sets
    const [trainFeatureTensor, testFeatureTensor] = tf.split(featureTensor, 2);
    const [trainLabelTensor, testLabelTensor] = tf.split(labelTensor, 2);

    return { trainFeatureTensor, trainLabelTensor, testFeatureTensor, testLabelTensor };
}

module.exports = loadData;
