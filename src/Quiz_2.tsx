import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useHistoryContext } from "./HistoryProvider"

export default function Quiz2(){
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
            setHistory('h3')
            setPreview(true)
            navigate('/correcto')

        } else{
            setQuiz('q2')
            setHistory('h2')
            setPlay(false)
            navigate('/incorrecto')
        }
    }

    return(
        <div className="quiz">
            <h2>¿Cómo podemos evitar el Vishing?</h2>

            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div className="field_group">
                    <label htmlFor="1">
                        <input type="radio" name="1" id="1" value={1} onChange={(e) => handleAnswer(e)} />
                        <span>No entregar datos personales o financieros de ningún tipo</span>
                    </label>
                </div>
                <div className="field_group">
                    <label htmlFor="2">
                        <input type="radio" name="1" id="2" value={2} onChange={(e) => handleAnswer(e)} />
                        <span>Confirma la legitimidad de la llamada antes de continuar</span>
                    </label>
                </div>
                <div className="field_group">
                    <label htmlFor="3">
                        <input type="radio" name="1" id="3" value={3} onChange={(e) => handleAnswer(e)} />
                        <span>Si sospechas simplemente cuelga la llamada</span>
                    </label>
                </div>
                <div className="field_group">
                    <label htmlFor="4">
                        <input type="radio" name="1" id="4" value={4} onChange={(e) => handleAnswer(e)} />
                        <span>Notificar al banco o el área de ciberseguiridad de tu empresa</span>
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