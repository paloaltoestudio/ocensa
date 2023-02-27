import { useEffect, useRef, useState } from "react";
import InnerHeader from "./InnerHeader";
import { useHistoryContext } from './HistoryProvider';
import H1 from "./H1";
import H2 from "./H2";
import H4 from "./H4";
import H3 from "./H3";

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
        {history && history == 'h3' && (
          <H3 />
        )}
        {history && history == 'h4' && (
          <H4 />
        )}
      </div>
    );
  }

export default History