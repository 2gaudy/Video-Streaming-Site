
import './App.css'
import VideoPlayer from './components/VideoPlayer'

function App() {
  

  return (
    <>
      <div className='main'>
        <h1>Video Host Test Site</h1>
        <div className='video-wrapper'>
          <h2>The Video</h2>

            <VideoPlayer width={1280} height={720}/>
            <iframe src="https://drive.google.com/file/d/1_dNZkGDGQoaPHsJHzzm3EhAoweSwLYsg/preview" width="640" height="480" allow="autoplay"></iframe>


        </div>

      </div>
        
    </>
  )
}

export default App
