import React, { useEffect, useRef, useState } from 'react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    // Load YouTube API
    const loadYouTubeAPI = () => {
      if (window.YT && window.YT.Player) {
        initializePlayer();
      } else {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        
        window.onYouTubeIframeAPIReady = initializePlayer;
      }
    };

    const initializePlayer = () => {
      if (playerRef.current && window.YT) {
        const newPlayer = new window.YT.Player(playerRef.current, {
          height: '315',
          width: '560',
          videoId: 'sRWj0hlVd7w',
          playerVars: {
            autoplay: 0,
            controls: 1,
            modestbranding: 1,
            rel: 0,
            showinfo: 0
          },
          events: {
            onReady: (event) => {
              setPlayer(event.target);
            },
            onStateChange: (event) => {
              setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
            }
          }
        });
      }
    };

    loadYouTubeAPI();

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
    }
  };

  return (
    <section className="home-video">
      <div className="container">
        <div className="hv-body">
          <div className="hv-cont">
            <div className="youtube-player-wrapper">
              <img className="thumb-img" src="/assets/images/video-thumbnail.jpg" alt="Video Thumbnail" />
              <div ref={playerRef} id="youtube-player" video-id="sRWj0hlVd7w"></div>
              <button id="play-pause" onClick={handlePlayPause}>
                <img className="play-btn" src="/assets/images/video-icon.png" alt="Play" />
                <img className="pause-btn" src="/assets/images/video-icon-pause.png" alt="Pause" />
              </button>
            </div>
            <div className="hv-global">
              <h2>Connecting the Global Diaspora</h2>
              <p>Our goal is to unite the 32 million diaspora to be a force for good, fostering community and positive impact worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;