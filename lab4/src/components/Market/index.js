import React from 'react'; 
import MarketItem from '../MarketItem'; 

class Market extends React.Component{ 

    constructor(props) { 
        super(props); 

        this.state = { 
            items: []
        }; 
    }

    render(){ 
        return( 
            <div> 
                <p>Click to add items</p>

                <button onClick={() => {
                    const items = this.state.items; 
                    items.push(<MarketItem count = {items.length}/>); 
                    this.setState({items: items}); 
                }}>Click Here!</button>
                
                <div> 
                    {this.state.items.map((count,key) => {
                        return <div key ={key}>{count}</div>
                    })}
                </div>
                    
                </div> 
        )
    }
}

export default Market; 