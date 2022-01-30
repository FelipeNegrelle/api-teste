const cors = require('cors');
const express = require('express');
const axios = require('axios');
const app = express();

app.use(cors());

app.get('/', async(req, res) => {
    try {
        const {data} = await axios('https://restcountries.com/v3.1/name/peru')

        return res.json(data)    
    } catch (error) {
        console.error(error);
    }
    
});

app.listen('1112');