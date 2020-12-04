const express = require('express');
const app = express();
const stack = require('./stack');

app.use(express.json());

// request handler
app.post('/', (req, res) => {
})

app.listen(7890, () => {
    console.log('started on 7890');
});
