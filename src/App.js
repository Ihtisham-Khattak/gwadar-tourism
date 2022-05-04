
import './App.css';
// import Video from './Components/General.mp4';
import Video2 from './Components/General2.mp4';
import Video3 from './Components/General3.mp4';

function App() {
  return (
    <div className="App">
      
      <div className='overlay'>

        
      </div>

      
      {/* <video src={Video} autoPlay loop muted></video> */}
      {/* <video src={Video2} autoPlay loop muted></video> */}
      <video src={Video3} autoPlay loop muted></video>
      
      <div className='content'>
      <h1>“Where there’s tea there’s hope.” <br /> – Arthur Wing Pinero </h1>
      </div>


    </div>
  );
}

export default App;
