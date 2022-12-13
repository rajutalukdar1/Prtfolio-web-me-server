const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


const projectsDetails = require('./data/projectsDetails.json');

// * middleware
app.use(cors());


app.get('/project/:id', (req, res) => {
    const id = req.params.id;
    const project = projectsDetails.filter(n => n.projects_id === id);
    res.send(project);
});


// * test method
app.get('/', (req, res) => {
    res.send('portfolio side is running')
});

app.listen(port, () => console.log(`portfolio side running on ${port}`));