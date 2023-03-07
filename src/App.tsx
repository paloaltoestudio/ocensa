import ocensa_logo from './assets/ocensa-logo.svg'
import title from './assets/logo.png'
import parlanchin from './assets/parlanchin.png'
import malguerito from './assets/malguerito.png'
import fishy from './assets/fishy.png'
import smishing from './assets/smishing.png'
import top_frame from './assets/top_frame.png'
import right_frame from './assets/right_frame.png'
import left_frame from './assets/left_frame.png'
import bottom_frame from './assets/bottom_frame.png'
import {Carousel} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function App() {
  
  return (
    <div className="app">
      <img src={top_frame} width="100%" alt="" className="top_frame" />
      <img src={left_frame} alt="" className="left_frame" />
      <img src={right_frame} alt="" className="right_frame" />
        <nav>
          <div className="logo">
            <img src={ocensa_logo} width={150} alt="" />
          </div>
        </nav>
        <header className="home_header">
          <img src={title} alt="" className="title" />
        </header>
        
        <div className="slider">
        <Carousel>
          <Carousel.Item>
            <div className="carousel_wrapper">
              <img
                src={malguerito}
                width={450}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Malgüerito/Ransomware/:</h3>
                <p>
                Un tipo de software malicioso que encripta los archivos del usuario e impide el acceso hasta que no se pague cierta cantidad de dinero. Además de ser un secuestrador es el jefe de la banda.
                </p>
                <h3>Rasgos específicos:</h3>
                <p>Su objetivo es la extorsión y para ello infiltra los dispositivos de los usuarios. Roba información para luego cobrar por ella.</p>
                <Link to="/historia" relative="path" className="link">
                  Empecemos
                </Link> 
              </Carousel.Caption>

            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel_wrapper">
              <img
                src={parlanchin}
                width={450}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Parlanchín o /Vishing/:</h3>
                <p>
                Familiar de Fishy, tiene el mismo objetivo pero un modus operandi distinto: se vale de la ingeniería social y la telefonía para engañar al usuario y así obtener sus datos personales.
                </p>
                <h3>Rasgos específicos:</h3>
                <p>Con su voz segura y convincente logra atraer a sus víctimas a través de llamadas telefónicas.</p>
                <Link to="/historia" relative="path" className="link">
                  Empecemos
                </Link> 
              </Carousel.Caption>

            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel_wrapper">
              <img
                src={fishy}
                width={450}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Fishy el escamoso/Phishing/:</h3>
                <p>
                Un maestro del engaño y del arte del disfraz, haciéndose pasar por lo que no es para pescar la información confidencial del usuario, usualmente sus contraseñas e información bancaria.</p>
                <h3>Rasgos específicos:</h3>
                <p>Su fuerte es la suplantación y la manipulación, hacer pensar al usuario que debe actuar rápido para resolver un impase. Por lo general utiliza un “cebo” o “carnada” vía correo electrónico para atraer a sus víctimas.</p>
                <Link to="/historia" relative="path" className="link">
                  Empecemos
                </Link> 
              </Carousel.Caption>

            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel_wrapper">
              <img
                src={smishing}
                width={450}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Whatsapilli/Smishing/:</h3>
                <p>
                El más joven de la familia, ha ganado protagonismo en el mundo de la ciberdelincuencia por su efectividad y capacidad de engaño. Su ecosistema natural son los mensajes de texto, el lugar en el que se esconde para atacar a los usuarios.</p>
                <h3>Rasgos específicos:</h3>
                <p>Sus mensajes predilectos para engañar al usuario tienen que ver con promociones, ofertas o premios. Solo basta un clic para caer en su red.</p>
                <Link to="/historia" relative="path" className="link">
                  Empecemos
                </Link> 
              </Carousel.Caption>

            </div>
          </Carousel.Item>

          
        </Carousel>
        </div>
        <img src={bottom_frame} width="100%" alt="" className="bottom_frame" />
    </div>
  );
}

export default App;
