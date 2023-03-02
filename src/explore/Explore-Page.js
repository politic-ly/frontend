import ExploreBlock from '../home/Blocks/Explore-Block';
import { useEffect, useState } from 'react';
import '../App.scss';

function Explore() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('campaign.json'
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


  const explore = 6;
    return (
      <div className="wrapper">
        <h3>Take Action</h3>
        <p><i>Initiatives based on your interests</i></p>
            <div className='explore-wrapper'>
            {[...Array(explore)].map((e, i) => (
              <div key={i}>
                  <ExploreBlock/>
              </div>
            ))}
            </div>
          </div>
    );
  }
  
  export default Explore;
  