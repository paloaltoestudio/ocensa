import { createContext, useContext, useState } from "react";

const HistoryContext = createContext()

export function useHistoryContext(){
    return useContext(HistoryContext)
}

export function HistoryProvider({children}){

    const [history, setHistory] = useState('h1')
    const [video, setVideo] = useState('')
    const [preview, setPreview] = useState(true)
    const [play, setPlay] = useState(false)
    const [quiz, setQuiz] = useState('')

    
    return (
        <HistoryContext.Provider value={[history, 
                                         setHistory, 
                                         preview, 
                                         setPreview, 
                                         play, 
                                         setPlay, 
                                         quiz, 
                                         setQuiz,
                                         video, 
                                         setVideo,]}>
            {children}
        </HistoryContext.Provider>
    )
}