const express = require('express');
const axios = require('axios');

const app = express();

// Middleware to parse JSON
app.use(express.json());

app.post('/authenticate', async (req, res) => {
    const { username, secret } = req.body;
    console.log('Parsed Body:', req.body);

    if (!username || !secret) {
        return res.status(400).json({
            username: username ? undefined : ["This field is required."],
            secret: secret ? undefined : ["This field is required."]
        });
    }

    try {
        const response = await axios.post('https://api.chatengine.io/users/', {
            username: username,
            secret: secret
        }, {
            headers: {
                'PRIVATE-KEY': '', // replace with your actual private key
                'Content-Type': 'application/json'
            }
        });
        res.send(response.data);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        res.status(error.response ? error.response.status : 500).send(error.response ? error.response.data : 'Internal Server Error');
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
