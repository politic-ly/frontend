import React from 'react';
import ExploreBlock from './Blocks/Explore-Block';
import InitiativesBlock from './Blocks/Initiatives-Block';
import NewsBlock from './Blocks/News-Block';
import { Card } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const explores = 4;
  const initiatives = 6;
  const news = 6;
  
    return (
      <div className="column-wrapper">
        <div className="row-wrapper">
          <div>
            <b>Explore What is Going On in Your Community</b>
            <div className='explore-wrapper'>
            {[...Array(explores)].map((e, i) => (
              <Card key={i}>
                <CardActionArea>
                  <NavLink to='/initiative' className={e => (e.isActive ? 'navigation--item active' : 'navigation--item')}>
                    <ExploreBlock/>
                  </NavLink>
                </CardActionArea>
              </Card>
            ))}
            </div>

          </div>
          <div>
            <b>Updates on Initiatives You Follow</b>
            <div className='initiatives-wrapper'>
            {[...Array(initiatives)].map((e, i) => (
              <Card key={i}>
                <CardActionArea>
                  <InitiativesBlock/>
                  </CardActionArea>
              </Card>
            ))}
            </div>

          <div/>
        </div>
      </div>
      <div>
        <b>News</b>
          <div className='news-wrapper'>
                {[...Array(news)].map((e, i) => (
                  <Card key={i}>
                    <CardActionArea>
                      <NewsBlock/>
                      </CardActionArea>
                  </Card>
                ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  