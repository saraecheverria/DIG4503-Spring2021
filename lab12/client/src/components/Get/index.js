import Axios from 'axios'; 
import React, { useState } from "react"; 

function Get(){ 
    const [getISBN, setGetISBN] = useState(""); 
    const [getSearch, setGetSearch] = useState(""); 


    const getBook = async () => 
    { 
        const result = await Axios.get("http://localhost:45030/books/" + getISBN)
            setGetSearch(result.data); 
            console.log(result.data); 
    }

    return( 
        <div>
            
            <h2> Enter the ISBN of the book you're looking for</h2> 
            
            <input type="text" value={getISBN} placeholder="Enter ISBN#" onChange={(search) => {setGetISBN(search.target.value);}}></input>
            

            <button onClick={() => {getBook()}}>Search</button>

            <div> 
                <h2>Title</h2> 
                    {getSearch.title} 
                <h2>Author</h2> 
                    {getSearch.author}
                <h2>Description</h2>
                    {getSearch.description}
                <h2>ISBN</h2> 
                    {getSearch.ISBN}
            </div>

        </div>
        
    )
}

export default Get; 