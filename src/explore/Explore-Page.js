import ExploreBlock from '../home/Blocks/Explore-Block';
import '../App.scss';

function Explore() {
  const explore = 6;
    return (
      <div className="page-wrapper">
        <h2>Take Action</h2>
        <p className='page-subtitle'><i>Initiatives based on your interests</i></p>
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
  