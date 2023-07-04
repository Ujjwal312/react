import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Dashboard = (props) => {
  let  nam=props.nam;
 let selectshop=props.selectshop;

  const [empData, setEmpData] = useState();

  const getAllData = async () => {
    try {
      const getPeople = await fetch(
        `http://localhost:4000/api/v1/getallUsers`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
     console.log(getPeople);
      const res = await getPeople.json();
      setEmpData(res);
    } 
    catch (error) {
      console.log(error);
      alert("error");
    }
  };

  useEffect(() => {
    getAllData();
   
  },[]);
  
  console.log(empData);
  console.log(selectshop);
const val=0;
  return (
    <>
      <section className="container px-4 mx-auto py-4">
          <div className="text-blue-400 mt-[30px] mb-[30px] text-3xl mr-[550px]">Welcome, {nam}!</div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-400 dark:text-white">
              Activities 
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              This is a list of all activity. You can add new activity, edit
              or delete existing ones.
            </p>
          </div>
          <Link to={"/addactivity"}>
            <div>
              <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-indigo-500 ">
                Add Activity
              </button>
            </div>
          </Link>
        </div>
     
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-700 dark:divide-gray-700">
                  <thead className="bg-gray-400 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4  font-normal text-left rtl:text-right text-blue-700 text-2xl dark:text-gray-400"
                      >
                        <span>Activity</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5  text-blue-700 text-2xl font-normal text-left rtl:text-right dark:text-gray-400"
                      >
                        Dueration
                      </th>

                      <th
                        scope="col"
                        className="px-9 py-3.5  text-blue-700 text-2xl font-normal text-left rtl:text-right  dark:text-gray-400"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                 


                    {empData?.data.map((person) => (
                      <tr key={person.name}>
                        <td className="py-4  whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                           
                            </div>
                            <div className="">
                              <div className="text-lg font-medium text-gray-400 dark:text-white">
                                {person.name}
                              </div>
                         
                            </div>
                          </div>
                        </td>
                        <td className="px-20 py-4 whitespace-nowrap">
                          <div className="text-lg  text-gray-400 dark:text-white">
                            {person.dueration}
                          </div>
                     
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-lg text-gray-700 dark:text-gray-300">
                         <div className="  border-collapse  text-center align-middle pt-[4px] justify-center  rounded-3xl w-[125px] h-10 bg-green-400"> {person.status}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
              </div>
            </div>
            
          </div>
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"> 
            <div className=" text-center border-2 border-dashed rounded-lg border-blue-100 w-[200px] mx-auto text-3xl text-richblack-200 mt-10 mb-5">Your Card</div>
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-700 dark:divide-gray-700">
                  <thead className="bg-blue-400 dark:bg-gray-800">
                    <tr>
                   
                      <th
                        scope="col"
                        className="py-3.5 pl-[60px] text-center font-normal  rtl:text-right text-blue-700 text-2xl dark:text-gray-400"
                      >
                        <span>Item</span>
                      </th>

                      <th
                        scope="col"
                        className="px-[79px] py-3.5  text-blue-700 text-2xl font-normal text-left rtl:text-right dark:text-gray-400"
                      >
                        Price
                      </th>

                      <th
                        scope="col"
                        className="px-9 py-3.5  text-blue-700 text-2xl font-normal text-left rtl:text-right  dark:text-gray-400"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {selectshop[0]?.map((selectshop) => (
                    
                      <tr key={selectshop.name}>
                        <td className="py-4  whitespace-nowrap">
                          <div className="flex items-center">
                          <td className="px-4 py-4 whitespace-nowrap text-lg text-gray-600 dark:text-gray-300">
                         <img className="  border-collapse  text-center align-middle pt-[4px] justify-center   w-[195px] h-[195px] " src={selectshop.image}></img>
                        </td>
                            <div className="flex-shrink-0 h-10 w-10">
                         
                            </div>
                        
                            <div className="">
                              <div className="text-lg font-medium text-gray-400 dark:text-white">
                                {selectshop.name}
                              </div>
                         
                            </div>
                          </div>
                        </td>
                        <td className="px-20 py-4 whitespace-nowrap">
                          <div className="text-lg  text-gray-400 dark:text-white">
                            {selectshop.price}
                          </div>
                     
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-lg text-gray-600 dark:text-gray-300">
                         <div className=" cursor-not-allowed  border-collapse  text-center align-middle pt-[4px] justify-center  rounded-3xl w-[125px] h-10 bg-blue-500" >Buy now</div>
                        </td>
                      </tr>
                    
))}
 {selectshop[1]?.map((selectshop) => (
   <tr key={selectshop.name}>
   <td className="py-4  whitespace-nowrap">
     <div className="flex items-center">
     <td className="px-4 py-4 whitespace-nowrap text-lg text-gray-600 dark:text-gray-300">
    <img className="  border-collapse  text-center align-middle pt-[4px] justify-center   w-[195px] h-[195px] " src={selectshop.image}></img>
   </td>
       <div className="flex-shrink-0 h-10 w-10">
    
       </div>
   
       <div className="">
         <div className="text-lg font-medium text-gray-400 dark:text-white">
           {selectshop.name}
         </div>
    
       </div>
     </div>
   </td>
   <td className="px-20 py-4 whitespace-nowrap">
     <div className="text-lg  text-gray-400 dark:text-white">
       {selectshop.price}
     </div>

   </td>

   <td className="px-4 py-4 whitespace-nowrap text-lg text-gray-600 dark:text-gray-300">
    <div className=" cursor-not-allowed border-collapse  text-center align-middle pt-[4px] justify-center  rounded-3xl w-[125px] h-10 bg-blue-500" >Buy now</div>
   </td>
 </tr>

                  
) )}
 {selectshop[2]?.map((selectshop) => (
                <tr key={selectshop.name}>
                <td className="py-4  whitespace-nowrap">
                  <div className="flex items-center">
                  <td className="px-4 py-4 whitespace-nowrap text-lg text-gray-600 dark:text-gray-300">
                 <img className="  border-collapse  text-center align-middle pt-[4px] justify-center   w-[195px] h-[195px] " src={selectshop.image}></img>
                </td>
                    <div className="flex-shrink-0 h-10 w-10">
                 
                    </div>
                
                    <div className="">
                      <div className="text-lg font-medium text-gray-400 dark:text-white">
                        {selectshop.name}
                      </div>
                 
                    </div>
                  </div>
                </td>
                <td className="px-20 py-4 whitespace-nowrap">
                  <div className="text-lg  text-gray-400 dark:text-white">
                    {selectshop.price}
                  </div>
             
                </td>

                <td className="px-4 py-4 whitespace-nowrap text-lg text-gray-600 dark:text-gray-300">
                 <div className=" cursor-not-allowed border-collapse  text-center align-middle pt-[4px] justify-center  rounded-3xl w-[125px] h-10 bg-blue-500" >Buy now</div>
                </td>
              </tr>
            
                  
))}
 {selectshop[3]?.map((selectshop) => (
                    
                    <tr key={selectshop.name}>
                    <td className="py-4  whitespace-nowrap">
                      <div className="flex items-center">
                      <td className="px-4 py-4 whitespace-nowrap text-lg text-gray-600 dark:text-gray-300">
                     <img className="  border-collapse  text-center align-middle pt-[4px] justify-center   w-[195px] h-[195px] " src={selectshop.image}></img>
                    </td>
                        <div className="flex-shrink-0 h-10 w-10">
                     
                        </div>
                    
                        <div className="">
                          <div className="text-lg font-medium text-gray-400 dark:text-white">
                            {selectshop.name}
                          </div>
                     
                        </div>
                      </div>
                    </td>
                    <td className="px-20 py-4 whitespace-nowrap">
                      <div className="text-lg  text-gray-400 dark:text-white">
                        {selectshop.price}
                      </div>
                 
                    </td>

                    <td className="px-4 py-4 whitespace-nowrap text-lg text-gray-600 dark:text-gray-300">
                     <div className=" cursor-not-allowed border-collapse  text-center align-middle pt-[4px] justify-center  rounded-3xl w-[125px] h-10 bg-blue-500" >Buy now</div>
                    </td>
                  </tr>
                
                  
) )}
                  </tbody>
                </table>
                
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
