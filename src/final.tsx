import { useEffect, useRef, useState } from "react";
import InnerHeader from "./InnerHeader";
import { useHistoryContext } from './HistoryProvider';
import { Link } from "react-router-dom";
import final from "./assets/final.png"
import { motion } from "framer-motion"


function Final() {

    const [history, setHistory, preview, setPreview, play, setPlay, quiz, setQuiz] = useHistoryContext()
    

    return (
      <motion.div 
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }} 
          transition={{ type: 'spring', stiffness: 90 }}
          className="correct">
        <InnerHeader />
        <div className="correct_wrapper">
          <div className="right">
            <h2>¡Lo lograste!</h2>
            <p>Recuerda que cuentas con el apoyo del área de ciberseguridad  y que juntos podemos enfrentar la amenaza de la ciberdelincuencia.</p>
          </div>
          <img src={final} alt="" />
        </div>
      </motion.div>
    );
  }

export default Final