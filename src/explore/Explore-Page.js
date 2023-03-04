import InitiativeCard from '../cards/InitiativeCard';
import pic from '../assets/gimpy.PNG';
import React, { useEffect, useState } from 'react';
import '../App.scss';

function Explore() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('initiatives.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson)
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData();

  },[])

    return (
      <div className="page-wrapper">
        <h2>Take Action</h2>
        <p className='page-subtitle'><i>Initiatives based on your interests</i></p>
            <div className='explore-wrapper'>
            {data.map((initiative, i) => (
              <div key={i}>
                  <InitiativeCard
                    key={i}
                    // img={`../assets/${initiative.images[0]}`}
                    img={pic}
                    title={initiative.title}
                    subtitle={initiative.shortDescription}
                    location={initiative.location}
                    volunteerData={initiative.followers}
                  />
              </div>
            ))}
            </div>
      </div>
    );
  }
  
  export default Explore;
  