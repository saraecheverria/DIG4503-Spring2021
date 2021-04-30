import Axios from 'axios'; 
import React, { useState } from "react"; 


function Patch(){
    const [newFood, setNewFood] = useState(""); 
    const [newCalories, setNewCalories] = useState(""); 
    const [newDescription, setNewDescription] = useState(""); 
    const [newID, setNewID] = useState(""); 
    

    const patchNew = async ()=> 
    { 
        const result = await Axios.patch("http://localhost:45031/SaraEcheverria/" + newID, {
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

           
            <button onClick={() => {patchNew()}}>Change Your Entry</button>

        </div>
    )
}



export default Patch; 