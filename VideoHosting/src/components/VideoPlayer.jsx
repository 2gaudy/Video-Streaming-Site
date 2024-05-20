import { useEffect, useRef } from 'react';

function VideoPlayer(props) {
    const { width, height } = props;
    const cloudinaryRef = useRef();
    const videoRef = useRef();
    useEffect(() => {
        if (cloudinaryRef.current ) return;
        cloudinaryRef.current = window.cloudinary
        cloudinaryRef.current.videoPlayer(videoRef.current,  {
            cloud_name: 'dhgnili4u'
        })
    }, [])
    return (
        <video
            ref={videoRef}
            data-cld-public-id="qiljpohwvu6dfgflg5du"
            width={width}
            height={height}
            controls
        />
    )
}

export default VideoPlayer;