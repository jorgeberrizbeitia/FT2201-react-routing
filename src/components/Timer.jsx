import { useState, useEffect } from "react"

function Timer(props) {

  const [ timerCount, setTimerCount ] = useState(0)

  useEffect(() => {
    console.log("componente montado")
  
    const intervalId = setInterval(() => {
      // setInterval guarda los valores al momento de crear la function a invocar
      // timerCount sería siempre 0
      console.log("1 segundo ha pasado")
      // console.log(0) // => 0
      // setTimerCount(timerCount + 1)
      setTimerCount((previousState) => previousState + 1)
    }, 1000)


    return () => {
      console.log("component sale del dom")
      clearInterval(intervalId)
    }

  }, [])

  useEffect(() => {

    // nunca debemos actualizar el estado que se esta checkeando (timerCount)

    console.log("timer cambiando", timerCount)
    if (timerCount > 5) {
      // quiero que salga el componente
      props.handleToggle()
    }
  }, [timerCount])

  return (
    <div>
    
      <h3>{timerCount}</h3>
    
    </div>
  )
}

export default Timer