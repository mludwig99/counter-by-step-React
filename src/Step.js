import React, { Component } from "react";
import './Step.css';





function Step(props){
    // render() {
        // let step = < input type = "number" min='1' max='10' /> ;

        return (
            <div className="step-div">
                Krok : 
                <span className="span-step" >
                    {/* {
                        < input ref={
                            (data) => {
                                this._inputStep = data
                            }
                        } 
                        type = "number"
                        min = "1" />
                    } */}
                    < input onChange = {
                        (event) => props.stepMethod(event.target.value)
                    }
                    type = "number" min="1" />
                </span>
            </div>
        )
    }
// }
export default Step;