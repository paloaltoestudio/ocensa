import { useEffect, useRef, useState } from "react";
import Player from '@vimeo/player';
import Quiz1 from "./Quiz_1";
import pesca from "./assets/pesca_milagrosa.jpg"
import play_icon from "./assets/play.svg"
import { useHistoryContext } from './HistoryProvider';
import { motion, AnimatePresence } from "framer-motion"

function H1() {
    const playerRef = useRef<HTMLDivElement>(null);
    const [id, setId] = useState(581320126)

    const [history, setHistory, preview, setPreview, play, setPlay, quiz, setQuiz, video, setVideo] = useHistoryContext()

    useEffect(() => {
      let options = {
        id: id,
        loop: false,
        autoplay: play,
      };
  
      if (playerRef.current !== null) {
        let player = new Player(playerRef.current, options);
  
        player.on("ended", () => {
          // setHistory('h2')
          // setPreview(true)
          setQuiz('q1')
        });
      }
    }, [id, play, video]);
    
    const handlePreview = () => {
      setVideo('v1')
      setPreview(false)
      setPlay(true)
    }

    const renderVideo = () => {
      if(video && video == 'v1'){
        return <div ref={playerRef}></div>
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
                <img className="preview" src={pesca} onClick={() => handlePreview()} width="100%" alt="" />
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
              <Quiz1 />
            </motion.div>
          )}
        </div>
    );
  }

export default H1