import React,{useState, useEffect, useRef } from 'react'

function Stopwatch(){
    const [isRunning, setIsRunning]= useState(false)
    const [elapsedTime,setElapsedTime] = useState(0)
    const intervalIDRef = useRef(null)
    const startTimeRef = useRef(0)

    useEffect(() => {
        if(isRunning){
            intervalIDRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            },10)
        }
        return () => {
            clearInterval(intervalIDRef.current)
        }



    },[isRunning])
    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;

    }
    function stop(){
        setIsRunning(false);

    }
    function reset(){
        setElapsedTime(0)
        setIsRunning(false)

    }
    function formatTime(){

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
        let min = Math.floor(elapsedTime/(1000 * 60)% 60)
        let sec = Math.floor(elapsedTime/(1000) % 60 )
        let milisec = Math.floor((elapsedTime % 1000) / 10)
        return `${hours}:${min}:${sec}:${milisec}`

    }
    return(<div>
        <h1>StopWatch</h1>
        <div className="clock">{formatTime()}</div>
        <div>
            <button onClick={start} className="Start-btn">Start</button>
            <button onClick={stop} className="Stop-btn">Stop</button>
            <button onClick={reset} className='reset-btn'>Reset</button>
        </div>

    </div>)

}
export default Stopwatch