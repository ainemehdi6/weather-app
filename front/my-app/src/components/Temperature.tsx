import { useState } from "react";

function getTemperatureFahrenheit(tempCelsius: number): number {
    return (tempCelsius * 9) / 5 + 32;
}

export function Temperature() {
    const [isCelsius, setIsCelsuis] = useState(true)

    const TEMPERATURE = 2
    console.log(isCelsius);

    return (
        <div>
            {isCelsius ? TEMPERATURE : getTemperatureFahrenheit(TEMPERATURE)}°
            {isCelsius ? "C" : "F"}
            <fieldset>
                <legend>Select a maintenance drone:</legend>
                <label>
                    <input
                        type="radio"
                        name="unit"
                        value="celsius"
                        onClick={() => {
                            setIsCelsuis(true);
                        }}
                        defaultChecked
                    />
                    Celsius
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="unit"
                        value="fahrenheit"
                        onClick={() => {
                            setIsCelsuis(false);
                        }}
                    />
                    Fahrenheit
                </label>
            </fieldset>
        </div>
    );
}