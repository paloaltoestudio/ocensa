import { useEffect, useRef, useState } from "react";
import InnerHeader from "./InnerHeader";
import { useHistoryContext } from './HistoryProvider';
import { Link } from "react-router-dom";

function Correct() {

    const [history, setHistory, preview, setPreview, play, setPlay, quiz, setQuiz] = useHistoryContext()
    

    return (
      <div className="correct" style={{paddingTop:'200px'}}>
        <InnerHeader />
        Correcto
        <Link to={'/historia'} className="link">Siguiente</Link>
      </div>
    );
  }

export default Correct