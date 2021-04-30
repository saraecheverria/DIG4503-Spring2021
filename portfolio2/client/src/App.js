import Put from "./components/Put"
import Get from "./components/Get"
import Delete from "./components/Delete"
import Patch from "./components/Patch"




function App() {
  return (
    <div className="App">
      <h1>Food Journal</h1>
      <h2>What's the last thing you ate?</h2>
      <Put/> 
      <h2>Find Entry</h2>
      <p>Find something in your food journal by searching for the time it was eaten</p>
      <Get/> 
      <h2>Delete Entry</h2>
      <p>Find something in your food journal by searching for the time it was eaten</p>
      <Delete/> 
      <h2>Change your Entry</h2>
      <Patch/> 
     
    </div>
  );
}

export default App;
