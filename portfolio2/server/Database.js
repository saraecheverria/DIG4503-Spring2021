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
        this.database = this.connection.db("portfolio2"); 
        this.collection = this.database.collection("SaraEcheverria"); 

    }

    
    async createOne(food, calories, description, ID){
        if(this.collection != null){
            let newData = {
                "food": food, 
                "calories": calories, 
                "description": description,
                "ID": ID,
            }; 
            await this.collection.insertOne(newData); 
            return newData; 

        }  

    }

    async readOne(ID){ 
        if (this.collection !=null) { 
            let search = {food: "not found"}
            let results = await this.collection.findOne({"ID": ID})
              if (results != null){ 
                  search = results; 
              }

              return search; 
              
            }
          }
                

    async updateOne(food, calories, description, ID){ 
        if(this.collection !=null){ 
           let result= await this.collection.updateOne({ "ID": ID}, { $set: {"food": food, "calories": calories, "description": description}} )

           return {"food": food, "calories": calories, "description": description}

        }else { 
            return null; 
        }

    }


    async deleteOne(ID){
        if(this.collection != null){ 
            const result = await this.collection.deleteOne({"ID": ID}); 
            return{deleted: result.deletedCount}
        } else { 
            return{deleted: 0}; 
        }

    }

    close(){ 
        if(this.collection != null){ 
            this.connection.close(); 
        }
    }
}

export default Database; 
