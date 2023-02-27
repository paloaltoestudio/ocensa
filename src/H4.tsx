import { useRef, useState } from "react";
import preview_4 from "./assets/preview_4.jpg"
import play_icon from "./assets/play.svg"
import { useHistoryContext } from './HistoryProvider';
import { motion, AnimatePresence } from "framer-motion"
import YouTube, { YouTubeProps } from 'react-youtube';
import Quiz4 from "./Quiz_4";


function H4() {
    const playerRef = useRef<HTMLDivElement>(null);
    const [id, setId] = useState(796807306)

    const [history, setHistory, preview, setPreview, play, setPlay, quiz, setQuiz, video, setVideo] = useHistoryContext()

    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: play,
        rel:0,
        modestbranding : 1,
        disablekb : 1,
        showinfo: 0,
        fs: 0
      },
    };

    const onPlayerReady: YouTubeProps['onEnd'] = (event) => {
      console.log(event)
      setPlay(0)
      setQuiz('q4')
    }
    
    const handlePreview = () => {
      setVideo('v4')
      setPreview(false)
      setPlay(true)
    }

    const renderVideo = () => {
      if(video && video == 'v4'){
        return <YouTube videoId="256ydxyLzxA" opts={opts} onEnd={onPlayerReady} />;
      }
    }
    

    return (
        <div className="video">
          <AnimatePresence>
          {preview && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                transition={{ type: 'spring', stiffness: 90 }}>
                <span className="preview_icon">
                  <img src={play_icon} alt="" onClick={() => handlePreview()} />
                </span>
                <img className="preview" src={preview_4} onClick={() => handlePreview()} width="100%" alt="" />
              </motion.div>
            </>
          )}
          </AnimatePresence>
          
          {renderVideo()}

          {quiz && ( 
            <motion.div 
            initial={{ opacity: 0.8, y: 200 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ type: 'spring', stiffness: 90 }}>
              <Quiz4 />
            </motion.div>
          )}
        </div>
    );
  }

export default H4