import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const LoginForm = (props) => {
const setIsLoggedIn=props.setIsLoggedIn;
let nam =props.nam;
let setname=props.setname;

    const navigate = useNavigate();

    const [formData, setFormData] = useState( {
        email:"", password:""
    })

    const[showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    function submitHandler(event) {
        event.preventDefault();
     
   
        console.log("Printing the formData ");
        console.log(formData)
     
    }
    const login = () => {
        const  {email,password } = formData;
        console.log(formData);
       
          axios.post("http://localhost:4000/api/v1/register/login", formData)
                .then( res => {
                    console.log(res);
                    console.log(res.data.data);
                    const fname=res.data.data.fname;
                    const lname=res.data.data.lname;
                    
                    if(res.data.status=="exist"){
                        // alert(`welcome ${fname} ${lname}`);
                        
                        toast.success("Logged in");
                        toast.custom((t) => (
                            <div
                              className={`${
                                t.visible ? 'animate-enter' : 'animate-leave'
                              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                            >
                              <div className="flex-1 w-0 p-4">
                                <div className="flex items-start">
                                  <div className="flex-shrink-0 pt-0.5">
                                    <img
                                      className="h-10 w-10 rounded-full"
                                      src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="ml-3 flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                    {fname} {lname}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      Welcome to Dashboard
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="flex border-l border-gray-200">
                                <button
                                  onClick={() => toast.dismiss(t.id)}
                                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          ))
                        
                     setname(fname);
                        navigate("/dashboard");
                            setIsLoggedIn(true);
                          
                        }
          else {
                   
            setIsLoggedIn(false);
                    toast.error("Invalid Email or password");
          }
                })
            
     
      };
  return (
    <form onSubmit={submitHandler}
 
    className="flex flex-col w-full  gap-y-4 mt-6">

        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input 
                required
                type="email"
                value = {formData.email}
                onChange={changeHandler}
                placeholder="Enter email address"
                name="email"
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password<sup className='text-pink-200'>*</sup>
            </p>
            <input 
                required
                type= {showPassword ? ("text") : ("password")}
                value = {formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />

            <span 
            className='absolute right-3 top-[62px] cursor-pointer'
            onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? 

                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#">
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button  className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6' onClick={login}>
            Sign In
        </button>

    </form>
  )
}

export default LoginForm
