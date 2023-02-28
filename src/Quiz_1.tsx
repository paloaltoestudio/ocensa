import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useHistoryContext } from "./HistoryProvider"

export default function Quiz1(){
    const [history, setHistory, preview, setPreview, play, setPlay, quiz, setQuiz, video, setVideo] = useHistoryContext()

    const [answer, setAnswer] = useState('')
    const correctAnswer = '5'
    const navigate = useNavigate()

    useEffect(() => {
      console.log(answer)
    
    }, [answer])
    

    const handleAnswer = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setAnswer(target.value)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        if (answer == correctAnswer){
            setQuiz('')
            setHistory('h2')
            setPreview(true)
            navigate('/correcto')

        } else{
            setQuiz('q1')
            setHistory('h1')
            setPlay(false)
            navigate('/incorrecto')
        }
    }

    return(
        <div className="quiz">
            <h2>¿Cuáles sonas las mejores prácticas/hábitos para evitar el fraude informático?</h2>

            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div className="field_group">
                    <label htmlFor="1">
                        <input type="radio" name="1" id="1" value={1} onChange={(e) => handleAnswer(e)} />
                        <span>No abrir correos que parezcan extraños</span>
                    </label>
                </div>
                <div className="field_group">
                    <label htmlFor="2">
                        <input type="radio" name="1" id="2" value={2} onChange={(e) => handleAnswer(e)} />
                        <span>Sospechar de mensajes con un lenguaje alarmista</span>
                    </label>
                </div>
                <div className="field_group">
                    <label htmlFor="3">
                        <input type="radio" name="1" id="3" value={3} onChange={(e) => handleAnswer(e)} />
                        <span>No hacer clic en un mensaje sin saber a dónde lleva</span>
                    </label>
                </div>
                <div className="field_group">
                    <label htmlFor="4">
                        <input type="radio" name="1" id="4" value={4} onChange={(e) => handleAnswer(e)} />
                        <span>Notificar a las autoridades competentes dentro de la compañía</span>
                    </label>
                </div>
                <div className="field_group">
                    <label htmlFor="5">
                        <input type="radio" name="1" id="5" value={5} onChange={(e) => handleAnswer(e)} />
                        <span>Todas las anteriores</span>
                    </label>
                </div>

                <button className="link">Enviar</button>
            </form>
        </div>
    )
}