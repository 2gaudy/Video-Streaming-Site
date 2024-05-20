
import './App.css'

function App() {
  

  return (
    <>
      <div className='main'>
        <h1>Video Host Test Site</h1>
        <div className='video-wrapper'>
          <h2>The Video</h2>
          <iframe src='https://drive.google.com/file/d/1PzPM0dR9gc7Mie478qKA5Sbf6Luvjs12/view?usp=sharing' width="640" height="480"></iframe>
          
          <img src="https://drive.google.com/thumbnail?id=1PzPM0dR9gc7Mie478qKA5Sbf6Luvjs12&sz=w1000" alt="None"/>
          <video src='https://drive.google.com/thumbnail?id=1PzPM0dR9gc7Mie478qKA5Sbf6Luvjs12&sz=w1000'></video>
        </div>

      </div>
        
    </>
  )
}

export default App
