import { useEffect, useRef, useState } from "react";
import InnerHeader from "./InnerHeader";
import { useHistoryContext } from './HistoryProvider';
import { Link } from "react-router-dom";
import h1_quiz from "./assets/h1_quiz.jpg"
import h2_quiz from "./assets/h2_quiz.jpg"
import h3_quiz from "./assets/h3_quiz.jpg"
import h4_quiz from "./assets/h4_quiz.jpg"
import { motion } from "framer-motion"


function Incorrect() {

    const [history, setHistory, preview, setPreview, play, setPlay, quiz, setQuiz] = useHistoryContext()
    

    return (
      <motion.div 
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }} 
          transition={{ type: 'spring', stiffness: 90 }}
          className="correct">
        <InnerHeader />
        <div className="correct_wrapper incorrect">
          {history && history == 'h1' && <img src={h1_quiz} alt="" /> }
          {history && history == 'h2' && <img src={h2_quiz} alt="" /> }
          {history && history == 'h3' && <img src={h3_quiz} alt="" /> }
          {history && history == 'h4' && <img src={h4_quiz} alt="" /> }

          <div className="right">
            <h2>Respuesta<br />Incorrecta</h2>
            <p>Inténtalo de nuevo.</p>
            <Link to={'/historia'} className="link">Regresar</Link>
          </div>
        </div>
      </motion.div>
    );
  }

export default Incorrect