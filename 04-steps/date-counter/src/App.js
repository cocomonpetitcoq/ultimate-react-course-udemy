import { useState } from "react";

export default function App() {
    return (
        <div className="App">
            <Counter />
        </div>
    );
}

function Counter() {
    const today = new Date();
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    function handleLowerCount() {
        setCount((currentCount) => currentCount - step);
    }

    function handleHigherCount() {
        setCount((currentCount) => currentCount + step);
    }

    today.setDate(today.getDate() + count);

    function handleReset() {
        setCount(0);
        setStep(1);
    }

    return (
        <div>
            <div>
                <input type="range" min={1} max={10} value={step} onChange={(e) => setStep(Number(e.target.value))}></input>
                <p>Step: {step}</p>
            </div>
            <div>
                <button onClick={handleLowerCount}>-</button>
                <input type="text" value={count} onChange={(e) => setCount(Number(e.target.value))} />
                <button onClick={handleHigherCount}>+</button>
            </div>
            <div>
                <span>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `}</span>
                <span>{today.toDateString()}</span>
            </div>
            {(step !== 1 || count !== 0) && <button onClick={handleReset}>Reset</button>}
        </div>
    );
}
