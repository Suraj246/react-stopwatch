import React, { useState, useEffect } from "react";

function Home() {
    const [time, setTime] = useState(0)
    const [timeOn, setTimeOn] = useState(false)
    useEffect(() => {
        let interval = null
        if (timeOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        }
        else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [timeOn])
    return (
        <>
            <div>
                <span>{("" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
                <span>{("" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("" + Math.floor((time / 1000) % 60))}:</span>
                <span>{("" + (time / 10) % 100)}</span>
            </div>
            <div>
                <button onClick={() => setTimeOn(true)}>start</button>
                <button onClick={() => setTimeOn(false)}>stop</button>
                <button onClick={() => setTimeOn(true)}>resume</button>
                <button onClick={() => setTime(0)}>reset</button>
            </div>
        </>
    )
}

export default Home;
