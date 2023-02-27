import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useHistoryContext } from "./HistoryProvider"

export default function Quiz4(){
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
            setHistory('final')
            setPreview(true)
            navigate('/correcto')

        } else{
            setQuiz('q1')
            setHistory('h4')
            setPlay(false)
            navigate('/incorrecto')
        }
    }

    return(
        <div className="quiz">
            <h2>¿Qué debo hacer en caso de ser víctima de Ransomware?</h2>

            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div className="field_group">
                    <label htmlFor="1">
                        <input type="radio" name="1" id="1" value={1} onChange={(e) => handleAnswer(e)} />
                        <span>Pagar el soborno</span>
                    </label>
                </div>
                <div className="field_group">
                    <label htmlFor="2">
                        <input type="radio" name="1" id="2" value={2} onChange={(e) => handleAnswer(e)} />
                        <span>Tratar de dialogar con el ciberdelincuente</span>
                    </label>
                </div>
                <div className="field_group">
                    <label htmlFor="3">
                        <input type="radio" name="1" id="3" value={3} onChange={(e) => handleAnswer(e)} />
                        <span>Botar el computador a la basura</span>
                    </label>
                </div>
                <div className="field_group">
                    <label htmlFor="5">
                        <input type="radio" name="1" id="5" value={5} onChange={(e) => handleAnswer(e)} />
                        <span>Notificar a las autoridades competentes dentro de la compañía</span>
                    </label>
                </div>

                <button className="link">Enviar</button>
            </form>
        </div>
    )
}