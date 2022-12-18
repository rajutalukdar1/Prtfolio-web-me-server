const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;


const projectsDetails = require('./data/projectsDetails.json');

// * middleware
app.use(cors());
app.use(express.json())


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