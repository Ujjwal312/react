import React from 'react'
import Item from './Item';


const Items = (props) => {
    let activities = props.activities;
    let category = props.category;

    
    function getCourses() {
        if(category === "All") {
            let allactivities = [];
            Object.values(activities).forEach(array => {
                array.forEach(activityData => {
                    allactivities.push(activityData);
                })
            })
            return allactivities;
        }
        else {
            //main sirf specific categiry ka data array krunga  
            return activities[category];      
        }

    }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getCourses().map( (activity) => (
            <Item key={activity.id} 
            activity = {activity} 
 
    />
        ))
      }
    </div>
  )
}

export default Items
