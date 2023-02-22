import { useEffect, useRef, useState } from "react";
import InnerHeader from "./InnerHeader";
import { useHistoryContext } from './HistoryProvider';
import { Link } from "react-router-dom";

function Incorrect() {

    const [history, setHistory, preview, setPreview, play, setPlay, quiz, setQuiz] = useHistoryContext()
    

    return (
      <div className="correct" style={{paddingTop:'200px'}}>
        <InnerHeader />
        Incorrecto
        <Link to={'/historia'} className="link">Regresar</Link>
      </div>
    );
  }

export default Incorrect