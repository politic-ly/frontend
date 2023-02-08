import './App.scss';
import {Outlet} from 'react-router-dom';
import Navigation from './navigation/Navigation';

function App() {
  
  return (
    <div className='App'>
    <div className='grid-container'>
            <Navigation/>  
    </div>
    <Outlet/>
{/* <Button kind="primary-butt
on fuck-da-police" onClick={onc} text="buts" ></Button> */}
</div>
  );
}

export default App;
