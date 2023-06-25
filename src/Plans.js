import React, {useState} from "react";
import data from './components/data2'
import Shop from "./components/Shop";
import "./index2.css";
const App = () => {

  const [shop, setshop] = useState(data);

  function removeshop(id) {
    const newshop = shop.filter(shop => shop.id !== id);
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
      <Shop shop={shop} removeshop={removeshop}></Shop>
    </div>
  )
};

export default App;

