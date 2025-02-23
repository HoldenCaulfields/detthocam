const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors({ origin: "https://detthocamm.onrender.com"}));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});