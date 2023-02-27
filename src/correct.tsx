import { useEffect, useRef, useState } from "react";
import InnerHeader from "./InnerHeader";
import { useHistoryContext } from './HistoryProvider';
import { Link } from "react-router-dom";
import correct from "./assets/correct.png"
import { motion } from "framer-motion"

function Correct() {

    const [history, setHistory, preview, setPreview, play, setPlay, quiz, setQuiz] = useHistoryContext()

    const handleClick = () => {
      setHistory('h1')
    }
    
    return (
      <motion.div 
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }} 
          transition={{ type: 'spring', stiffness: 90 }}
          className="correct">
        <InnerHeader />
        <div className="correct_wrapper">
          <img src={correct} alt="" />
          <div className="right">
            <h2>¡Correcto!</h2>
            <p>Sigue así.</p>
            {history && history == 'final'
              ? <Link to={'/final'} onClick={() => handleClick()} className="link">Siguiente</Link>
              : <Link to={'/historia'} className="link">Siguiente</Link>
            }
          </div>
        </div>
      </motion.div>
    );
  }

export default Correct