import Axios from 'axios'; 
import React, { useState } from "react"; 

function Get(){ 
    const [getID, setGetID] = useState(""); 
    const [getSearch, setGetSearch] = useState(""); 


    const getFood = async () => 
    { 
        const result = await Axios.get("http://localhost:45031/SaraEcheverria/" + getID)
            setGetSearch(result.data); 
            console.log(result.data); 
    }

    return( 
        <div>
            
            
            <input type="text" value={getID} placeholder="Ex: 3 pm" onChange={(search) => {setGetID(search.target.value);}}></input>
            

            <button onClick={() => {getFood()}}>Search</button>

            <div> 
                <p>Food</p> 
                    {getSearch.food} 
                <p>Calories</p> 
                    {getSearch.calories}
                <p>Description</p>
                    {getSearch.description}
                <p>Time Consumed</p> 
                    {getSearch.ID}
            </div>

        </div>
        
    )
}

export default Get; 