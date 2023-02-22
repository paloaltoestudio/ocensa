import { useEffect, useRef, useState } from "react";
import InnerHeader from "./InnerHeader";
import { useHistoryContext } from './HistoryProvider';
import { Link } from "react-router-dom";
import incorrect from "./assets/incorrect.png"
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
        <div className="correct_wrapper">
          <img src={incorrect} alt="" />
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