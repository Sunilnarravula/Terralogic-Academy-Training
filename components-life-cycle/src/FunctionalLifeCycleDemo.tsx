import React,{ useState, useEffect} from "react";
const FunctionalLifeCycleDemo: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        console.log("Functional Component: Component Mounted");
        return () => {
            console.log("Functional Component: Component Unmounted");
        };
    }, []);

    useEffect(() => {
        console.log("Functional Component: Count Updated");
    }, [count]);

    return (
        <div>
            <h2>Functional Lifecycle Demo</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        </div>
    );
};

export default FunctionalLifeCycleDemo;