import Express from 'express'; 
import Database from './Database.js'; 
import CORS from 'cors'; 

const App = Express(); 
const port = 45031; 

App.use(Express.json()); 
App.use(CORS());

const db = new Database(); 
db.connect(); 


App.put("/SaraEcheverria/:ID", async(req, res) => {
    let food =req.body.food; 
    let calories =req.body.calories; 
    let description =req.body.description; 
    let ID = req.params.ID; 

    let result = await db.createOne(food, calories, description, ID); 
    res.json(result); 
}
); 

App.get("/SaraEcheverria/:ID",  async (req, res) => { 
    let ID = req.params.ID; 

    let result = await db.readOne(ID); 
    res.json(result)
})


App.patch("/SaraEcheverria/:ID", async (req, res) => { 
    let food = req.body.food; 
    let calories = req.body.calories; 
    let description = req.body.description; 
    let ID = req.params.ID; 

    let result= await db.updateOne(food, calories, description, ID); 
    res.json(result); 
})


App.delete("/SaraEcheverria/:ID", async (req, res) => { 
    let ID = req.params.ID; 

    let result = await db.deleteOne(ID); 
    res.json(result); 
})


App.listen(port, () =>{
      console.log("Server running!");
    }); 