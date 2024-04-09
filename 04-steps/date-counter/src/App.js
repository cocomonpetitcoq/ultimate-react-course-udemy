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
    const [count, setCount] = useState(1);
    const [step, setStep] = useState(1);

    function handleLowerStep() {
        if (step > 1) {
            setStep((currentStep) => currentStep - 1);
        }
    }

    function handleHigerStep() {
        setStep((currentStep) => currentStep + 1);
    }

    function handleLowerCount() {
        setCount((currentCount) => currentCount - step);
    }

    function handleHigherCount() {
        setCount((currentCount) => currentCount + step);
    }

    return (
        <div>
            <div>
                <button onClick={handleLowerStep}>-</button>
                <p>Step: {step}</p>
                <button onClick={handleHigerStep}>+</button>
            </div>
            <div>
                <button onClick={handleLowerCount}>-</button>
                <p>Count: {count}</p>
                <button onClick={handleHigherCount}>+</button>
            </div>
            <div>
                {count === 0 && <p>Today is {today.toLocaleDateString()};</p>}
                {count > 0 && (
                    <p>
                        {count} {count > 1 ? "days" : "day"} from today is {new Date(today + count * 1000 * 60 * 60 * 24).toLocaleDateString()}
                    </p>
                )}
                {count < 0 && (
                    <p>
                        {count} {count < -1 ? "days" : "day"} ago was {new Date(today - count * 1000 * 60 * 60 * 24).toLocaleDateString()}
                    </p>
                )}
            </div>
        </div>
    );
}
