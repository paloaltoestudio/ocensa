import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Player from '@vimeo/player';
import Quiz1 from "./Quiz_1";

function History1(props: any) {
    const playerRef = useRef<HTMLDivElement>(null);
    const id = 581320126
    const navigate = useNavigate();

    const [history, setHistory] = useState('h1')

    useEffect(() => {
      let options = {
        id: id,
        loop: false,
        autoplay: false
      };
  
      if (playerRef.current !== null) {
        let player = new Player(playerRef.current, options);
  
        player.on("ended", () => {
          //navigate('/quiz1', { replace: true });
          setHistory('q1')
        });
      }
    }, [id]);

    return (
      <div className="App">
        {history && history == 'h1' ?
            (<div ref={playerRef}></div>)
         : ''
        }
        {history && history == 'q1' ?
            (<Quiz1 />)
         : ''
        }
      </div>
    );
  }

export default History1