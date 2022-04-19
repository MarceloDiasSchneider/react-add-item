import {useState} from "react";

function App() {
  const [btnValue, setBtnValue] = useState('Add Item')
  const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])
  var thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

  function addItem() {
    setBtnValue('Adding Item')
    
    console.log(thingsArray);
    let len = thingsArray.length + 1
    setThingsArray(thingsArray => [...thingsArray, `Thing ${len}`] )
     
    setTimeout(() => {
      setBtnValue('Add Item')
    }, 1000);
  }

  return (
    <div className="App">
      <button onClick={addItem}>{btnValue}</button>
      {thingsElements}
    </div>
  );
}

export default App;
