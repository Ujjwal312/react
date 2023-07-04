import React, {useState} from "react";
import data from './components/data2'
import Shop from "./components/Shop";
import "./index2.css";
const App = ({setselectshop,selectshop,setIsLoggedIn,isLoggedIn}) => {

  const [shop, setshop] = useState(data);
  



  function removeshop(id) {
    const newshop = shop.filter(shop => shop.id !== id);
    const newshop2 = shop.filter(shop => shop.id === id);
    console.log(id);

setselectshop(oldArray => [...oldArray, newshop2]);
  
    console.log(selectshop);
    setshop(newshop);
  }

  if(shop.length === 0) {
    return (
        <div className="refresh">
          <h2>No shop Left</h2>
          <button className="btn-white" onClick={() => setshop(data)}>
            Refresh
          </button>
        </div>
    );
  }

  return (
    <div className="App">
      <Shop shop={shop} removeshop={removeshop} setIsLoggedIn={setIsLoggedIn} isLoggedIn ={isLoggedIn}></Shop>
    </div>
  )
};

export default App;

