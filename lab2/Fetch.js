import axios from 'axios';
import chalk from 'chalk'; 

class Fetch{ 
    constructor(pokemon, color ){ 
        this.pokemon=pokemon; 
        this.color=color; 
    }

    fetch() {
        axios("https://pokeapi.co/api/v2/pokemon/" + this.pokemon)
        .then((response) => { 
            const pokeapi = response.data; 
            console.log(chalk.hex(this.color)(pokeapi.name + " and the id is " + pokeapi.id)); 
        })

    .catch((error) => { 
        console.log(chalk.red(" Invalid ID " + error)); 
    }); 
    }
}

export default Fetch; 