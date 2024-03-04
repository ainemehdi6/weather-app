import { useState } from "react";

function getTemperatureFahrenheit(tempCelsius: number): number {
    return (tempCelsius * 9) / 5 + 32;
}

type TemperatureUnit = "CELSIUS" | "FAHRENHEIT";
export function Temperature() {
    const [unit, setUnit] = useState<TemperatureUnit>('CELSIUS');

    const TEMPERATURE = 2

    return (
        <div>
            {unit === "CELSIUS" ? TEMPERATURE : getTemperatureFahrenheit(TEMPERATURE)}°
            {unit === "CELSIUS" ? "C" : "F"}
            <fieldset>
                <legend>Select a maintenance drone:</legend>
                <label>
                    <input
                        type="radio"
                        name="unit"
                        value="celsius"
                        onClick={() => {
                            setUnit("CELSIUS");
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
                            setUnit("FAHRENHEIT");
                        }}
                    />
                    Fahrenheit
                </label>
            </fieldset>
        </div>
    );
}