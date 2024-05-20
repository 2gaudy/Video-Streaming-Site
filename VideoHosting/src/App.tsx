
import './App.css'
import VideoPlayer from './components/VideoPlayer'

function App() {
  

  return (
    <>
      <div className='main'>
        <h1>Video Host Test Site</h1>
        <div className='video-wrapper'>
          <h2>The Video</h2>

            <VideoPlayer/>

        </div>

      </div>
        
    </>
  )
}

export default App
