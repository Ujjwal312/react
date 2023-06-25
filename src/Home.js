import React from "react";
import Navbar from  "./components/Navbar2";
import Cards from "./components/Items"
import Filter from "./components/Filter"
import { apiUrl, filterData  } from "./data";
import { useState,useEffect } from "react";
import Spinner from "./components/Spinner";



const Home = () => { 
  const [activities, setactivities] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);

      setactivities(apiUrl.data);
    
 
    setLoading(false);
  }

  useEffect(() => {
     fetchData();
   },[] )
  

  return (
    <div className="min-h-screen flex flex-col bg-teal-900">
      <div>
        <Navbar/>
      </div>
      <div className="bg-teal-900">
        <div>
          <Filter 
          filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
            loading ? (<Spinner/>) : (<Cards activities={activities} category={category}/>)
          }
        </div>
      </div>


    </div>
  );
};

export default Home;
