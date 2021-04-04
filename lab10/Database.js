import MongoClient from 'mongodb';

const url = "mongodb+srv://SaraEcheverria:kmDqUCuY6ypngImn@cluster0.yuzwq.mongodb.net";

export default class Database {
        constructor() {
            this.connection = null
            this.database = null
            this.collection = null
    }

    async connect() {
        this.connection = await MongoClient.connect(url, { useUnifiedTopology: true });
        this.database = this.connection.db("lab10");
        this.collection = this.database.collection("people");
    }

    async createOne(firstName, lastName, faveColor) {
      if (this.collection != null) {
        let newData = {
          firstName: firstName,
          lastName: lastName,
          favoriteColor: faveColor,
        };
        
        await this.collection.insertOne(newData);
        return newData;
      }
    }

    async readOne(person) {
      if (this.collection != null) {
        let searchData = { search: "not found" };
        let results = await this.collection.findOne({
          firstName: person,
        });
        if (results != null) {
          searchData = results;
        }
        return searchData;
      }
    }
  
    close() {
      if (this.connection != null) {
        this.connection.close();
      }
    }
}