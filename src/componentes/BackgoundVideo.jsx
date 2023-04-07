import React, { useRef, useEffect } from 'react';
import '../style/BackgroundVideo.css';

export default function BackgroundVideo(props) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const onResize = () => {
      if (!video) return;

      const { videoWidth, videoHeight } = video;
      const videoRatio = videoWidth / videoHeight;
      const windowRatio = window.innerWidth / window.innerHeight;

      if (windowRatio > videoRatio) {
        video.style.width = 'auto';
        video.style.height = '100%';
      } else {
        video.style.width = '100%';
        video.style.height = 'auto';
      }
    };

    window.addEventListener('resize', onResize);
    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <video ref={videoRef} autoPlay muted loop className="background-video">
      <source src={props.src} type="video/webm" />
    </video>
  );
}
