import Express from 'express'; 
import Database from './Database.js'; 

const App = Express(); 
const port = 45030; 

App.use(Express.json()); 

const db = new Database(); 
db.connect(); 


App.put("/books/:ISBN", async(req, res) => {
    let title =req.body.title; 
    let author =req.body.author; 
    let description =req.body.description; 
    let ISBN = req.params.ISBN; 

    let result = await db.createOne(title, author, description, ISBN); 
    res.json(result); 
}
); 

App.get("/books/:ISBN",  async (req, res) => { 
    let ISBN = req.params.ISBN; 

    let result = await db.readOne(ISBN); 
    res.json(result)
})

App.post("/books/search", async (req, res) => { 
    let title = req.body.title; 
    let author = req.body.author; 

    let result = db.readMany(title, author); 
    res.json(result); 
})

App.patch("/books/:ISBN", async (req, res) => { 
    let title = req.body.title; 
    let author = req.body.author; 
    let description = req.body.description; 
    let ISBN = req.params.ISBN; 

    let result= await db.updateOne(title, author, description, ISBN); 
    res.json(result); 
})


App.delete("/books/:ISBN", async (req, res) => { 
    let ISBN = req.params.ISBN; 

    let result = await db.deleteOne(ISBN); 
    res.json(result); 
})


App.listen(port, () =>{
      console.log("Server running!");
    });