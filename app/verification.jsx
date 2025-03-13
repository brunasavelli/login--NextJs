"use client";

import { useState } from "react";
import styles from "../styles/Verification.module.css"

export default function Verification() {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [match, setMatch] = useState("");

    const handleCheck = () => {
        setMatch(input1 === input2 && input1 !== "");
    };

    return (
        <div className={styles.Verification}>
            <input type="password" 
            placeholder="Enter password"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            />

            <input type="password" 
            placeholder="Enter password"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            />

            <button onClick={handleCheck}>Check</button>

            {match !== null && <p>{match ? "OK" : "WRONG"}</p>}
        </div>
    );
}