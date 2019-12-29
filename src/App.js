import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Frase = ({frase}) => {
    return (
        <div className="frase">
            <h1>{frase.quote}</h1>
            <p>- {frase.author}</p>
        </div>
    )
}

const App = () => {
    const [frase, obtenerFrase] = useState({});

    const consultarApi = async () => {
        const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
        obtenerFrase(resultado.data[0]);
    }

    useEffect(() => {
        consultarApi();
    }, []);

    return (
        <div className="contenedor">
            <Frase
                frase={frase}
            />
            <button
                onClick={consultarApi}
            >Generar Nueva</button>
        </div>
    );
};

export default App;
