const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.static(path.join(process.cwd(),'client','dist')));
console.log(path.join(process.cwd(),'client','dist'));


app.get('*', (req, res) => {
    res.sendFile(path.join(process.cwd(),'client','dist','index.html'));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});