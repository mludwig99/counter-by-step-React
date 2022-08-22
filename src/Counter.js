
import React, {Component} from "react";
import './Counter.css';
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
// import Clock from './Clock'
import ClockFunctional from "./ClockFunctional";
import Step from './Step';


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
            stepValue:0,
        };
    }
    

    changeValue = (action) => {
       
        this.setState((prevState, prevProps) => {
             let curentCounterValue = prevState.counterValue;
            
             if (action === 'add') {
                 curentCounterValue += Number(this.state.stepValue);
             } else if (action === 'reinit') {
                 curentCounterValue = prevProps.initValue;
             } else {
                 curentCounterValue = 0;
             }
            
            return ({
                counterValue:
                    curentCounterValue
            });
        });
            
      

        // this.setState({
        //     counterValue:this.state.counterValue +1
        // })
    }

    toggleClock = () => {
        this.setState((prevState) => {
            return ({
                showClock: !prevState.showClock
            });
        })
    }
    changeStep = (value) => {
        this.setState(
            {
                stepValue:value,
            }

        )
    }
    render() {
        let clockElement = '';
        if (this.state.showClock) {
            // clockElement = <Clock toggleClockMethod={this.toggleClock} />;
            clockElement= <ClockFunctional toggleClockMethod={this.toggleClock}/>
        }
        else {
            clockElement = <span onClick={this.toggleClock} className="show-clock">show clock</span>;
        }

        return (
            <div className="counter" >
                Counter:
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} />
                <Step stepMethod={this.changeStep } />
                {clockElement}
                
            </div>
        );
    }
}


export default Counter;

// function Counter(props) {

//     let randomNumber = Math.floor(Math.random() * (108 - 1 + 1) + 1);
//     return (
//         <div className="counter">
//             Counter:
//             <span className="value">{props.initValue}</span>  
//          </div>
//     );
// }

// export default Counter;