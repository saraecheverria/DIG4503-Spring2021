import Axios from 'axios'; 
import React, { useState } from "react"; 


function Put(){
    const [newFood, setNewFood] = useState(""); 
    const [newCalories, setNewCalories] = useState(""); 
    const [newDescription, setNewDescription] = useState(""); 
    const [newID, setNewID] = useState(""); 
    

    const putNew = async ()=> 
    { 
        const result = await Axios.put("http://localhost:45031/SaraEcheverria/" + newID, {
            "food": newFood, 
            "calories": newCalories, 
            "description": newDescription, 
            "ID": newID, 
        })
            console.log(result.data); 
    }

    return ( 
        <div> 
            <h2>Food</h2>
            <input type="text" value={newFood} onChange={(addFood) => {setNewFood(addFood.target.value);}}></input>

            <h2>Calories</h2>
            <input type="text" value={newCalories} onChange={(addCalories) => {setNewCalories(addCalories.target.value);}}></input>


            <h2>Description</h2>
            <input type="text" value={newDescription} onChange={(addDescription) => {setNewDescription(addDescription.target.value);}}></input>


            <h2>Time Eaten</h2>
            <input type="text" value={newID} onChange={(addID) => {setNewID(addID.target.value);}}></input>

           
            <button onClick={() => {putNew()}}>Add Your Food Item</button>

        </div>
    )
}



export default Put; 