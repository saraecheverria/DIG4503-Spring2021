import Axios from 'axios'; 
import React, { useState } from "react"; 


function Put(){
    const [newAuthor, setNewAuthor] = useState(""); 
    const [newTitle, setNewTitle] = useState(""); 
    const [newDescription, setNewDescription] = useState(""); 
    const [newISBN, setNewISBN] = useState(""); 
    

    const putNew = async ()=> 
    { 
        const result = await Axios.put("http://localhost:45030/books/" + newISBN, {
            "title": newTitle, 
            "author": newAuthor, 
            "description": newDescription, 
            "ISBN": newISBN, 
        })
            console.log(result.data); 
    }

    return ( 
        <div> 
            <h2>Title</h2>
            <input type="text" value={newTitle} onChange={(addTitle) => {setNewTitle(addTitle.target.value);}}></input>

            <h2>Author</h2>
            <input type="text" value={newAuthor} onChange={(addAuthor) => {setNewAuthor(addAuthor.target.value);}}></input>


            <h2>Description</h2>
            <input type="text" value={newDescription} onChange={(addDescription) => {setNewDescription(addDescription.target.value);}}></input>


            <h2>ISBN</h2>
            <input type="text" value={newISBN} onChange={(addISBN) => {setNewISBN(addISBN.target.value);}}></input>

           
            <button onClick={() => {putNew()}}>Add Your Book</button>

        </div>
    )
}



export default Put; 
