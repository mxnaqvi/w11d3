// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
import { useState, createContext, useContext } from "react";

export const ClimateContext = createContext()

export default function ClimateProvider({ children }) {
    const [temperature, setTemperature] = useState(50)
}