import Express from "express";
import Database from './Database.js';

const App = Express();
const port = 45030;
const d = new Database();

App.use(Express.json());

App.put("/people/create", (req, res) => {
    let person = req.body.person
    d.createOne(person) 
    res.json({person: person,
        body: req.body
    })
    ;
    });

App.get('/people/:person', (req, res) => {
    let person = req.params.person;
    d.readOne(person)
    res.json(
        {person: person,
        person: req.query
    }
    
)
console.log(req.query.firstName, req.query.LastName, req.query.favoriteColor)
});

App.listen(port, function(){
    console.log("Server running!");
});