import Axios from 'axios'; 
import React, { useState } from "react"; 

function Delete(){ 
    const [deleteISBN, setDeleteISBN] = useState(""); 
    const [deleteSelected, setDeleteSelected] = useState(""); 

    const deleteBook = async () => 
    { 
        const result= await Axios.delete("http://localhost:45030/books/" + deleteISBN)
        setDeleteSelected(result.data);
        console.log(result.data); 
    }

    return(
        <div> 

            <h2>Enter the ISBN of the book you wish to delete</h2>

            <input type="text" value={deleteISBN} placeholder="Enter ISBN#" onChange={(search) => {setDeleteISBN(search.target.value);}}></input>

            <button onClick={() => {deleteBook()}}>Delete</button>

            <div> 
            {deleteSelected.books > 0 ? ( 
            <h2> This book has been successfully deleted from the Database</h2> )
            : undefined }

            </div>

        </div>
    )


}

export default Delete; 