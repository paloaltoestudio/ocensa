import ocensa_logo from './assets/ocensa-logo.svg'
import title from './assets/el-asedio-logo.png'
import parlanchin from './assets/parlanchin.png'
import top_frame from './assets/top_frame.png'
import {Carousel} from 'react-bootstrap';
import { Link } from 'react-router-dom';



function App() {
  
  return (
    <div className="app">
      <img src={top_frame} width="100%" alt="" className="top_frame" />
        <nav>
          <div className="logo">
            <img src={ocensa_logo} width={150} alt="" />
          </div>
        </nav>
        <header className="home_header">
          <img src={title} alt="" width={300} className="title" />
        </header>
        
        <div className="slider">
        <Carousel>
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
                <a href="" className="link">Empecemos</a>
              </Carousel.Caption>

            </div>
          </Carousel.Item>
          
        </Carousel>
        </div>
    </div>
  );
}

export default App;
