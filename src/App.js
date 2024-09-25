import './App.css';
import { useState } from 'react';

function App() {
  const [category, setCategory] = useState("");

  const handleCategoryChange = (event) => setCategory(event.target.value)

  return (
    <main>

      <h1>Recuperatorio Requests con React</h1>

      <div>
        <h2>Lista de todos los productos disponibles:</h2>
        <p className="result-box"></p>
      </div>

      <div>
        <h2>Obtener productos de una categoría determinada</h2>

        <h3>Ingrese una categoría:</h3>
        <input type="text" value={category} onChange={handleCategoryChange} />
        <button>Enviar</button>
        
        <h3>Productos de la categoría ingresada:</h3>
        <p className="result-box"></p>
      </div>

      <div>
        <h2>Mensaje en caso de error:</h2>
        <p className="result-box"></p>
      </div>

      <div>
        <h2>Carritos con al menos 2 productos:</h2>
        <p className="result-box"></p>
      </div>

    </main>
  );
}

export default App;
