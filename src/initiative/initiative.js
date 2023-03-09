import React, { useEffect, useState } from 'react';
import InitiativeCard from "../cards/InitiativeCard";
import pic from "../assets/blurby-cat.jpg";
import axios from 'axios';
function Initiative() {
  const [data,setData]=useState([]);
  const getData=()=>{
    axios.get('http://localhost:5152/initiatives')
      .then(function(response){
        return response.data;
      })
      .then(function(myJson) {
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData();

  },[])


  return (
    <div className="page-wrapper">
      <span>
        <h2>
          <b>Initiative Title</b>
        </h2>
        <p className="page-subtitle">
          <i>My Bookmarked/Top Initiatives</i>
        </p>
      </span>
      <div className="favorites-wrapper">
        {data.map((initiative, i) => (
          <div key={i}>
              <InitiativeCard
                // img={`../assets/${initiative.images[0]}`}
                img={pic}
                title={initiative.title}
                subtitle={initiative.summary}
                location={initiative.location}
                volunteerData={initiative.followers}
              />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Initiative;
