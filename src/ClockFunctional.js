import React,{useState,useEffect} from "react";
import './ClockFunctional.css';


const ClockFunctional = (props) => {
    console.log('initialization life Cycle')

    const [date, setDate] = useState(new Date());

    const tick = () => setDate(new Date());

    useEffect(() => {
        let timerID = setInterval(() => { tick() }, 1000);


        return (() => {
            clearInterval(timerID)
            console.log('Unmounting LifeCycle')
        })
    },[date]);

    return (
        < div className="clock-functional" >
            <h4 >Time:{date.toLocaleTimeString()
            } < span onClick={
                props.toggleClockMethod
            } > X </span></h4 >

        </div>
    );
}
export default ClockFunctional;