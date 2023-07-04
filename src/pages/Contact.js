import React from "react"


import ContactDetails from "../components/ContactDetails"
import ContactForm from "../components/ContactForm"


const Contact = () => {
  return (
    <div>
      <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
       
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

     
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>
    
      
    </div>
  )
}

export default Contact