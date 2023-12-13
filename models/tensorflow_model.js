const tf = require('@tensorflow/tfjs-node');
const loadData = require('./data_preparation');

async function trainModel() {
    const { trainFeatureTensor, trainLabelTensor, testFeatureTensor, testLabelTensor } = await loadData('corrected_dataset_3.csv');

    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 50, activation: 'relu', inputShape: [6] }));
    model.add(tf.layers.dense({ units: 30, activation: 'relu' }));
    model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

    model.compile({ optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy'] });

    await model.fit(trainFeatureTensor, trainLabelTensor, {
        epochs: 50,
        validationData: [testFeatureTensor, testLabelTensor]
    });

    await model.save('file://models/tensorflow_model');
}

trainModel();
