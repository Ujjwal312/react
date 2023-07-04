import React from "react";
import "./Style.css";
import images5 from "./images5.png"
import image1 from "./172819.png"
import images10 from "./images.png"
import images2 from "./images2.png"
import { useEffect } from "react";
import {AiOutlineDoubleLeft,AiOutlineDoubleRight} from "react-icons/ai"
import { story } from "./data3";
import { useState } from "react";
import  "./running.jpg";
import Footer from "./components/Footer.js";
import { Link } from "react-router-dom";


const Home2 = () => { 
  const [ima, setima] = useState(story[0].img);
  const [Index, setIndex] = useState(0);
  const [name, setname] = useState(story[0].name);
  const [showFullDescription, setFullDescription] = useState(false);
  const [showFullDescription1, setFullDescription1] = useState(false);
  const [showFullDescription2, setFullDescription2] = useState(false);
  const [showFullDescription3, setFullDescription3] = useState(false);






  

  function play()
  { 
      
  setima(story[Index].img);
  setname(story[Index].name);


  };

function lefthandle() {

if(Index==0){
  setIndex(4);
  play();
}
else{
setIndex(Index-1);
play () ;
}



  };

 function righthandle() {
  if(Index==story.length-1)
  {
    setIndex(0);
    play () ;
  } 
  else{
  setIndex(Index+1);
  play () ;
  }

    };
    useEffect(() => {
      play () ;
    },[] );
    function readmore(){
      setFullDescription(true);
    }
    function showless(){
      setFullDescription(false);
    }
    function readmore1(){
      setFullDescription1(true);
    }
    function showless1(){
      setFullDescription1(false);
    }
    function readmore2(){
      setFullDescription2(true);
    }
    function showless2(){
      setFullDescription2(false);
    }
    function readmore3(){
      setFullDescription3(true);
    }
    function showless3(){
      setFullDescription3(false);
    }
  return(
<>



  <header className="bg-richblack-700">

    <div className="banner">
      <div className="intro   w-[600px]">
        <h2>Be Strong Fitness</h2>
        <p>
          Let Fitocracy help you conquer this year. Track workouts, build
          support, challenge yourself.
        </p>
        <Link to="/signup">
        <button className="btn">join Now</button>
        </Link>
      </div>
    </div>
  </header>
  <div className="row">
    <div
      className="card"
      style={{ color: "white", backgroundColor: "rgb(42, 164, 188)" }}
    >
      <h2>Progression</h2>
      <p>
      Progressing your exercise means changing it to make it more challenging.
      </p>
    </div>
    <div className="card" style={{ background: "white" }}>
      <h2 style={{ color: "var(--primary-color)" }}>Workout</h2>
      <p style={{ color: "var(--secondary-color)" }}>
      The five exercises of bench press, deadlift, squat, shoulder press and pull-up
      </p>
    </div>
    <div
      className="card"
      style={{ color: "white", background: "var(--primary-color)" }}
    >
      <h2>Nutrition</h2>
      <p>
      Being nutritionally fit means finding the right “fuel” so you perform best.
      </p>
    </div>
  </div>
  <div className="middle  bg-richblack-700 text-gray-300 text-lg" >
    <center className=" abc border border-2 w-[800px] mx-auto">
      <h1 className="text-2xl">How Does Fitness Help Me?</h1>
      <p>
        GET YOUR VERY OWN PERSONAL TRAINER THAT PROVIDES EVERYTHING YOU NEED TO
        GET IN THE BEST SHAPE OF YOUR LIFE.{" "}
      </p>
    </center>
    <div className="mid2  bg-richblack-700">
      <div className="mid ">
        <div className="half">
          <div className="f1  border-2 border-black rounded-3xl bg-zinc-600">
            <div className="inner ">
              <img src={images5} height="80px" width="80px" />
              <h2 className="h22">MOTIVATION &amp; ACCOUNTABILITY</h2>
            </div>
            {!showFullDescription&&
            <p className="para">
              Your coach works with you on a daily basis to keep you motivated
              and on track. <button className="text-blue-500" onClick={readmore} >..read more</button>
            </p>
}
{showFullDescription&&
            <p className="para">
              Your coach works with you on a daily basis to keep you motivated
              and on track. They're your secret weapon to hit any goal, no
              matter what it is.<button className="text-blue-500"  onClick={showless} >..show less</button>
            </p>
}
          </div>
          <div className="f1 border-2 border-black rounded-3xl  bg-zinc-600">
            <div className="inner pr-[118px]">
        
              <img src={image1} height="80px" width="80px" alt="" />
              <h2 className="h22">FITNESS ASSESSMENT</h2>
            </div>
            {!showFullDescription1&&
            <p className="para">
              Your coach works with you on a daily basis to keep you motivated
              and on track. <button className="text-blue-500" onClick={readmore1} >..read more</button>
            </p>
}
{showFullDescription1&&
            <p className="para">
              Your coach works with you on a daily basis to keep you motivated
              and on track. They're your secret weapon to hit any goal, no
              matter what it is.<button className="text-blue-500"  onClick={showless1} >..show less</button>
            </p>
}
          </div>
        </div>
        <div className="half ml-[100px]">
          <div className="f1 border-2 border-black rounded-3xl bg-zinc-600">
            <div className="inner">
              <img src={images10} height="80px" width="80px" alt="" />
              <h2 className="h22">NUTRITIONAL SUCCESS</h2>
            </div>
            {!showFullDescription2&&
            <p className="para">
              Your coach works with you on a daily basis to keep you motivated
              and on track. <button className="text-blue-500" onClick={readmore2} >..read more</button>
            </p>
}
{showFullDescription2&&
            <p className="para">
              Your coach works with you on a daily basis to keep you motivated
              and on track. They're your secret weapon to hit any goal, no
              matter what it is.<button className="text-blue-500"  onClick={showless2} >..show less</button>
            </p>
}
          </div>
          <div className="f1  border-2 border-black rounded-3xl bg-zinc-600">
            <div className="inner pr-[100px]">
              <img src={images2} height="100px" width="100px" alt="" />
              <h2 className="h22">WORKOUTS</h2>
            </div>
            {!showFullDescription3&&
            <p className="para">
              Your coach works with you on a daily basis to keep you motivated
              and on track. <button className="text-blue-500" onClick={readmore3} >..read more</button>
            </p>
}
{showFullDescription3&&
            <p className="para">
              Your coach works with you on a daily basis to keep you motivated
              and on track. They're your secret weapon to hit any goal, no
              matter what it is.<button className="text-blue-500"  onClick={showless3} >..show less</button>
            </p>
}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="h1" style={{ textAlign: "center" }}>
    <h1 className="text-3xl border border-2"> Fitness plans</h1>
  </div>
  <div
    className="gallery"
    id="image"
    style={{
    
      display: "flex",
      justifyContent: "centre",
      alignItems: "center"
    }}
  >
    <div className="left text-right">
  <AiOutlineDoubleLeft className="left cursor-pointer" onClick={()=>lefthandle()}/>
    </div>
    <div  style={{ marginLeft: 75 }}>
      <figure className="card">
        <img src={ima} width="300px" height="300px" />
       <div className="text1 text-white text-2xl">{name}</div>
      </figure>
    </div>
    <div className="right ml-[75px]">
 <AiOutlineDoubleRight className="right cursor-pointer" onClick={()=>righthandle()}/>
    </div>

  </div>

     <footer>
      <center>
        <div className="footer">
          
        </div>
      </center>
    </footer> 
<Footer />
  
</>

  );
};

export default Home2;