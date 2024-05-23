import { useState } from "react"
import Card from "./Card";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => setNombre(e.target.value);
  const handleColor = (e) => setColor(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim().length > 2 && color.trim().length > 5) {
      setShow(true);
      setError(false);
    } else {
      setError(true)

    };
  
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>Nombre</label>
      <input type="text" value={nombre} onChange={handleName}/>
      <label>Color Favorito</label>
      <input type="text" value={color} onChange={handleColor}/>
      <button>Enviar</button>
    </form>

    {show && <Card nombre={nombre} color={color}/>}

    {error && <p>Por favor chequea que la información sea correcta</p>}


    

    </>
    
  )
}

export default Form