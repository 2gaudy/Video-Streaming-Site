import { useEffect, useRef } from 'react';

function VideoPlayer() {
    const cloudinaryRef = useRef();
    const videoRef = useRef();
    useEffect(() => {
        if (cloudinaryRef.current ) return;
        cloudinaryRef.current = window.cloudinary
        cloudinaryRef.current.VideoPlayer(videoRef.current,  {
            cloud_name: 'dhgnili4u'
        })
    }, [])
    return (
        <video
            ref={videoRef}
            data-cld-public-id="qiljpohwvu6dfgflg5du"
        />
    )
}

// export VideoPlayer;