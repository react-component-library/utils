import { useState } from 'react';
import { useControlledState } from '../dist/hooks';

function App() {
    const [s, setS] = useState(10);

    const [a, setA] = useControlledState({
        initialState: 0,
        value: s,
        setValue: setS,
    });
    return (
        <>
            <p>Count {a}</p>
            <button onClick={() => setA((prev) => prev + 1)}>Click</button>
        </>
    );
}

export default App;
