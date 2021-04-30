import Axios from 'axios'; 
import React, { useState } from "react"; 

function Delete(){ 
    const [deleteID, setDeleteID] = useState(""); 
    const [deleteSelected, setDeleteSelected] = useState(""); 

    const deleteFood = async () => 
    { 
        const result= await Axios.delete("http://localhost:45031/SaraEcheverria/" + deleteID)
        setDeleteSelected(result.data);
        console.log(result.data); 
    }

    return(
        <div> 

          

            <input type="text" value={deleteID} placeholder="Ex: 3 pm" onChange={(search) => {setDeleteID(search.target.value);}}></input>

            <button onClick={() => {deleteFood()}}>Delete</button>

            <div> 
            {deleteSelected.deleted> 0 ? ( 
            <p> This food entry has been successfully deleted from your journal</p> )
            : undefined }

            </div>

        </div>
    )


}

export default Delete; 