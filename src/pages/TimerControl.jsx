import { useState } from "react"
import Timer from "../components/Timer"


function TimerControl() {

  const [ showTimer, setShowTimer ] = useState(false)


  const handleToggle = () => {
    // esta function activa y desactiva el tempurizador
    setShowTimer( !showTimer )
  }

  return (
    <div>

      <button onClick={handleToggle}>{ showTimer ? "Desactivar" : "Activar" }</button>

      { showTimer ? <Timer handleToggle={handleToggle}/> : <p>No hay timer</p> }

    </div>
  )
}

export default TimerControl