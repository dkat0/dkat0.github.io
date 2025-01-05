---
layout: page
title: Epileptic Seizure Detection
description: Epileptic Seizure Detection Using RNN, LSTM, and GRU Models
img: assets/img/brainwave.jpeg
importance: 3
category: fun
related_publications: false
---

Epileptic seizures are a chronic neurological condition that is characterized by sudden and recurrent instances of abnormal electrical activity in the brain. The detection of these seizures in an accurate and timely manner from EEG data can lead to improved outcomes for patient care. This project explores advanced deep learning techniques to develop robust seizure detection models.

Using the [UCI Epileptic Seizure Recognition dataset](https://archive.ics.uci.edu/ml/datasets/Epileptic+Seizure+Recognition), I experimented with Recurrent Neural Networks (RNN), Long Short-Term Memory networks (LSTM), as well as Gated Recurrent Unit networks (GRU) to detect seizures from EEG signals. Data preprocessing was a crucial part of the project, predominantly involving combining EEG chunks into a single time series, as well as hyperparameter optimization methods to improve accuracy. Ultimately, the LSTM model achieved the highest accuracy of `97.5%`.

### [[Codebase]](https://github.com/dkat0/LSTM-Seizure-Prediction)