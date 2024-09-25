import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [category, setCategory] = useState("");

  const [productos, setProductos] = useState("")

  const [errorMessage, setErrorMessage] = useState("")

  const ObtenerProductos = () => {
    fetch('https://fakestoreapi.com/products')
    .then(response=>response.json())
    .then(data => setProductos(data))
    .catch(error => console.log(error))
  }

  useEffect(ObtenerProductos(), [])

  const handleCategoryChange = (event) => setCategory(event.target.value)

  const obtenerPorCategoria = () => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(response=>response.json())
    .then(data=>setProductos(data))
    .catch(error => console.log(error))
  }

  const carrito = () => {
    fetch('https://fakestoreapi.com/carts')
    .then(response=>response.json())
    .then(data=>setProductos(data))
    .catch(error => console.log(error))
  }

  return (
    <main>

      <h1>Recuperatorio Requests con React</h1>

      <div>
        <h2>Lista de todos los productos disponibles:</h2>
        <p className="result-box">{productos.map((product) => {
          <div>
              <h3>{product.title}</h3>
              <p>${product.price}</p>
          </div>
        })}</p>
      </div>

      <div>
        <h2>Obtener productos de una categoría determinada</h2>

        <h3>Ingrese una categoría:</h3>

          <select onChange={handleCategoryChange}>
            <option value="electronics">Electrónicos</option>
            <option value="jewelery">Joyería</option>
            <option value="men's clothing">Ropa de hombre</option>
            <option value="women's clothing">Ropa de mujer</option>   
          </select>

        <input type="text" value={category} onChange={handleCategoryChange} />
        <button onClick={obtenerPorCategoria}>Enviar</button>
        
        <h3>Productos de la categoría ingresada:</h3>
        <p className="result-box">{obtenerPorCategoria}</p>
      </div>

      <div>
        <h2>Mensaje en caso de error:</h2>
        <p className="result-box"></p>
      </div>

      <div>
        <h2>Carritos con al menos 2 productos:</h2>
        <p className="result-box">{carrito}</p>
      </div>

    </main>
  );
}

export default App;
