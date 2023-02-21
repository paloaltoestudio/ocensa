import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Player from '@vimeo/player';
import Quiz1 from "./Quiz_1";
import InnerHeader from "./InnerHeader";
import pesca from "./assets/pesca_milagrosa.jpg"

function History(props: any) {
    const playerRef = useRef<HTMLDivElement>(null);
    const id = 581320126
    const navigate = useNavigate();

    const [history, setHistory] = useState('')
    const [preview, setPreview] = useState(true)
    const [play, setPlay] = useState(false)
    const [quiz, setQuiz] = useState('')

    useEffect(() => {
      let options = {
        id: id,
        loop: false,
        autoplay: play,
      };
  
      if (playerRef.current !== null) {
        let player = new Player(playerRef.current, options);
  
        player.on("ended", () => {
          //navigate('/quiz1', { replace: true });
          setQuiz('q1')
        });
      }
    }, [id, play]);

    const renderVideo = () => {
      if(history && history == 'h1'){
        return <div ref={playerRef}></div>
      }
    }

    const handlePreview = () => {
      setPreview(false)
      setPlay(true)
      setHistory('h1')
    }


    return (
      <div className="history">
        <InnerHeader />
        <div className="video">
          {preview && (
            <img className="preview" src={pesca} onClick={() => handlePreview() } width="100%" alt="" />
          )}

          {renderVideo()}

          {quiz && quiz == 'q1' 
            ? ( <Quiz1 />)
            : ''
          }
        </div>
      </div>
    );
  }

export default History