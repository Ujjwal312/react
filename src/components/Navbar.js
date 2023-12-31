import React from "react"
import { Link } from "react-router-dom"

import { toast } from "react-hot-toast";

const Navbar=(props)=>{
let islogin=props.isLoggedIn;
let setlogin=props.setIsLoggedIn;

return(
  
<div className="flex  justify-between items-center w-10/12 max-w-[1160px] px-4 mx-auto ">
<Link to="/">
<img src="https://images.template.net/wp-content/uploads/2016/10/17093230/fimg-fit-logo.jpeg" alt="logo" width={120} height={22} loading="lazy"/>
</Link>
<nav>

<ul className=" text-richblack-100 flex gap-x-6">
<li className=" hover:text-violet-600 ">
    <Link to="/">Home</Link>
</li>
<li className=" hover:text-violet-600 ">
    <Link to="/Home">Fintness activity</Link>
</li>
<li className=" hover:text-violet-600 ">
    <Link to="/Plans">Fintness Shop</Link>
</li>
<li className=" hover:text-violet-600 " >
    <Link to="/contact">Contact</Link>
</li>
</ul>
</nav>
<div className="flex items-center gap-x-4 ">
{!islogin &&
<Link to="/login">
<button className="bg-richblack-800  hover:bg-blue-500 text-richblack-100 py-[8px] px-[12px] my-3
rounded-[8px] border border-richblack-700  ">
    Login
</button>

</Link>
}
{ !islogin&&
<Link to="/signup">
<button className="bg-richblack-800  hover:bg-blue-500 text-richblack-100 py-[8px] px-[12px] my-3
rounded-[8px] border border-richblack-700  ">
    Sign Up
</button>
</Link>
}
{islogin&&
<Link to="/">
<button onClick={()=>
{
setlogin(false);
toast.success("Logged Out");
}
} className="bg-richblack-800  hover:bg-red-500  text-richblack-100 py-[8px] px-[12px] my-3
rounded-[8px] border border-richblack-700  ">
 Logout
</button>
</Link>
}
{islogin&&
<Link to="/dashboard">
<button className="bg-richblack-800  hover:bg-blue-500 text-richblack-100 py-[8px] px-[12px] my-3
rounded-[8px] border border-richblack-700  ">
    Dashboard
</button>
</Link>
}

</div>
</div>
)
}
export default Navbar