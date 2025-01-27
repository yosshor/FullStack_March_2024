import { useState, useMemo } from 'react';

const MemoExample = () => {
    const [numbers, setNumbers] = useState([10, 20, 30, 40, 50]);
    const [multiplier, setMultiplier] = useState(2);
    const [darkMode, setDarkMode] = useState(false);

    // Expensive calculation that should only run when numbers or multiplier change
    const calculateTotal = useMemo(() => {
        console.log('Running expensive calculation...'); // To demonstrate when it runs
        return numbers.reduce((acc: number, curr: number) => {
            // Simulate complex calculation with artificial delay
            let result = 0;
            for (let i = 0; i < 1000000; i++) {
                result = acc + (curr * multiplier);
            }
            return result;
        }, 0);
    }, [numbers, multiplier]);
    
    // calculate every time:
    const calculateTotal2 = (() => {
        console.log('Running expensive calculation sdfsdf sd...2'); // To demonstrate when it runs
        return numbers.reduce((acc, curr) => {
            // Simulate complex calculation with artificial delay
            let result = 0;
            for (let i = 0; i < 100; i++) {
                result = acc + (curr * multiplier);
                console.log(result)
            }
            return result;
        }, 0);
    })();

    // This will cause re-renders but won't trigger recalculation
    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    // Add a new number to the array
    const addNumber = () => {
        const newNumber = Math.floor(Math.random() * 100);
        setNumbers(prev => [...prev, newNumber]);
    };

    // Increase the multiplier
    const increaseMultiplier = () => {
        setMultiplier(prev => prev + 1);
    };

    return (
        <div className={`p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <div className="space-y-4">
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold">Numbers: [{numbers.join(', ')}]</h2>
                    <p className="text-lg">Multiplier: {multiplier}</p>
                    <p className="text-lg font-semibold">
                        Total (Memoized): {calculateTotal2}
                    </p>
                </div>

                <div className="space-x-4">
                    <button
                        onClick={addNumber}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add Random Number
                    </button>

                    <button
                        onClick={increaseMultiplier}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Increase Multiplier
                    </button>

                    <button
                        onClick={toggleDarkMode}
                        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                    >
                        Toggle Dark Mode
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MemoExample;