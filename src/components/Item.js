import React from 'react'


const Item = (props) => {
    let activity = props.activity;


  return (
    <div className='w-[300px] bg-zinc-900 bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={activity.image.url}/>

     
        </div>
        

        <div className='p-4'>
            <p className="text-white font-semibold text-lg leading-6">{activity.title}</p>
            <p className='mt-2 text-white'>
                    {
                        activity.description.length >100 ? 
                        (activity.description.substr(0,100))   :
                        (activity.description)
                    }
            </p>
        </div>
    </div>
  )
}

export default Item
