import React from 'react'; 
import MarketItem from '../MarketItem'; 
import NameForm from '../NameForm';
import Remove from '../Remove'; 

class Market extends React.Component{ 

    constructor(props) { 
        super(props); 

        this.state = { 
            items: []
        }; 
    }

    render(){ 
        return( 
            <div className = "App"> 
                <p>Portfolio 1 Assignment</p>

                <button onClick={() => {
                    const items = this.state.items; 
                    items.push(<MarketItem count = {items.length}/>); 
                    this.setState({items: items}); 
                }}>Add Items!</button>

                <button onClick={() => {
                    const items = this.state.items; 
                    items.pop(<Remove count = {items.length}/>); 
                    this.setState({items: items}); 
                }}>Remove Items!</button>

                <NameForm></NameForm> 
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