"use client";

import { useState } from "react";
import styles from "../styles/Verification.module.css";

export default function Verification() {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [match, setMatch] = useState(null);
    const [error, setError] = useState(null);

    // const handleCheck = () => {
    //     setMatch(input1 === input2 && input1 !== "");
    // };

    const handleCheck = () => {
        if (input1 !== input2) {
            setMatch(false);
            setError("As senhas não coincidem");
        } else if (input1.length < 6) {
            setMatch(false);
            setError("A senha deve ter no mínimo 6 caracteres");
        } else {
            setMatch(true);
            setError("Sucesso!");
        }
    };

    return (
        <div className={styles.verification}>
            <legend>Password:</legend>
            <input type="password" 
            placeholder="Enter password"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            />

            <legend>Confirm Password:</legend>
            <input type="password" 
            placeholder="Enter password again"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            />

            <button onClick={handleCheck}>Check</button>

            {match !== null && <p>{error}</p>}{""}
        </div>
    );
}