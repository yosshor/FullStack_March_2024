
const express = require('express'); 
const app = express();
const port = 3001;  

app.use('/', express.static('pets'));
app.use(express.json());

const pet = require('./routes/pet');
app.use('/api/pets', pet);





app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});