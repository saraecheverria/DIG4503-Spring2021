import MongoClient from 'mongodb'; 

const url = "mongodb+srv://SaraEcheverria:kmDqUCuY6ypngImn@cluster0.yuzwq.mongodb.net"; 

class Database{ 
    constructor(){ 
        this.connection = null; 
        this.database = null; 
        this.collection = null; 

    }
    async connect() { 
        this.connection = await MongoClient.connect(url, {useUnifiedTopology:true}); 
        this.database = this.connection.db("lab11"); 
        this.collection = this.database.collection("books"); 

    }

    
    async createOne(title, author, description, ISBN){
        if(this.collection != null){
            let newData = {
                "title": title, 
                "author": author, 
                "description": description,
                "ISBN": ISBN,
            }; 
            await this.collection.insertOne(newData); 
            return newData; 

        }  

    }

    async readOne(ISBN){ 
        if (this.collection !=null) { 
            let search = {book: "not found"}
            let results = await this.collection.findOne({"ISBN": ISBN})
              if (results != null){ 
                  search = results; 
              }

              return search; 
              
            }
          }
                
            

    async readMany(title, author){ 
        if(this.collection != null) { 
            let array = []; 

            let result = await this.collection.find({ "title": title, "author": author})
        
        } return { books: array}; 

    }

    async updateOne(title, author, description, ISBN){ 
        if(this.collection !=null){ 
           let result= await this.collection.updateOne({ "ISBN": ISBN}, { $set: {"title": title, "author": author, "description": description}} )

           return {"title": title, "author": author, "description": description}

        }else { 
            return null; 
        }

    }


    async deleteOne(ISBN){
        if(this.collection != null){ 
            const result = await this.collection.deleteOne({"ISBN": ISBN}); 
            return{books: result.deletedCount}
        } else { 
            return{books: 0}; 
        }

    }

    close(){ 
        if(this.collection != null){ 
            this.connection.close(); 
        }
    }
}

export default Database; 
