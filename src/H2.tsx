import { useEffect, useRef, useState } from "react";
import Player from '@vimeo/player';
import Quiz1 from "./Quiz_1";
import pesca from "./assets/pesca_milagrosa.jpg"
import { useHistoryContext } from './HistoryProvider';

function H2() {
    const playerRef = useRef<HTMLDivElement>(null);
    const [id, setId] = useState(76512663)

    const [history, setHistory, preview, setPreview, play, setPlay, quiz, setQuiz, video, setVideo] = useHistoryContext()

    useEffect(() => {
      let options = {
        id: id,
        loop: false,
        autoplay: play,
      };
  
      if (playerRef.current !== null) {
        let player2 = new Player(playerRef.current, options);
  
        player2.on("ended", () => {
          setHistory('h2')
          setVideo('v2')
          //setQuiz('q1')
        });
      }
    }, [id, play, video]);
    
    const handlePreview = () => {
      setVideo('v2')
      setPreview(false)
      setPlay(true)
    }

    const renderVideo = () => {
      if(video && video == 'v2'){
        return <div ref={playerRef}></div>
      }
    }
    

    return (
        <div className="video">
          {preview && (
            <img className="preview" src={pesca} onClick={() => handlePreview() } width="100%" alt="" />
          )}

          {renderVideo()}

          {quiz && ( <Quiz1 />)}
        </div>
    );
  }

export default H2