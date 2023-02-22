import { useEffect, useRef, useState } from "react";
import InnerHeader from "./InnerHeader";
import { useHistoryContext } from './HistoryProvider';
import H1 from "./H1";
import H2 from "./H2";

function History() {

    const [history, setHistory, preview, setPreview, play, setPlay, quiz, setQuiz] = useHistoryContext()

    return (
      <div className="history">
        <InnerHeader />
        {history && history == 'h1' && (
          <H1 />
        )}
        {history && history == 'h2' && (
          <H2 />
        )}
      </div>
    );
  }

export default History