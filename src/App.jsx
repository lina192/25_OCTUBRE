import { React, useState } from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Header from './componentes/Header';
import ComentarioItem from './componentes/ComentarioItem';
import Comentarios from './data/comentarios';
import ComentarioLista from './componentes/ComentarioLista';
import Card from './componentes/Card';
import ComentarioStats from './componentes/ComentarioStats';
import ComentarioForm from './componentes/ComentarioForm';
import Abaut from './paginas/Abaut';
import AboutIconLink from './componentes/AboutIconLink';
import HomeIconLink from './componentes/HomeIconLink';
import { ComentariosProvider } from './contexto/ComentariosContexto';

function App() {
    const [comments, setComments] = useState(Comentarios);

    

    const titulo = "App de Comentarios";
    const Autor = "Cristian Buitrago";
    const ficha = "2902093";
    const formacion = "Centro de formación SENA";

    const loading = false; // Set this to true if fetching data
    if (loading) return (<h1>Cargando comentarios...</h1>);

    
    const addComentario = (newComentario) => {
      const id = comments.length ? Math.max(...comments.map(c => c.id)) + 1 : 1;
      const comentarioConId = { id, ...newComentario };
      setComments([...comments, comentarioConId]);
  };



    return (
     
        <ComentariosProvider>
            <Router>
                <div className='container'>
                    <Header titulo={titulo} autor={Autor} ficha={ficha} formacion={formacion} />
                    <Routes>
                        <Route exact path='/' element={
                            <>
                            <ComentarioForm handleAdd={addComentario} />
                            <ComentarioLista   />
                            <AboutIconLink/>
                            </>
                        }></Route>
                        <Route path='/abaut' element={
                            <>
                            <Abaut titulo={titulo} autor={Autor} ficha={ficha}/>
                            <HomeIconLink/>
                            </> 
                            
                    
                        }></Route>
                        
                    </Routes>
        
                </div>

            </Router>

        </ComentariosProvider>

        
        
    );
}

export default App;
