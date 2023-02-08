import ExploreBlock from '../home/Blocks/Explore-Block';
import './ExplorePage.scss';

function Explore() {
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
  