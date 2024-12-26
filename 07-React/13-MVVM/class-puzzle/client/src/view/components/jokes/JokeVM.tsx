import React, { useEffect, useState } from "react";

interface UseJokeOutput {
    joke: { joke: string, _id: string };
    loading: boolean;
    error: any;
    handleGetJoke: () => void;
    handleJoke: (urlRoute: string, method: string, body: any) => void;
}


export const useJoke = (): UseJokeOutput => {
    try {

        const [joke, setJoke] = useState<{ joke: string, _id: string }>({ joke: '', _id: '' });
        const [loading, setLoading] = useState<boolean>(true);
        const [error, setError] = useState();

        function getJoke() {
            try {
                fetch('http://localhost:3000/api/jokes/get-random-joke')
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        setJoke(data)
                        setLoading(false)
                    })
                    .catch(error => {
                        setError(error)
                        setLoading(false)
                    })
            } catch (error) {
                console.log(error)
            }
        }
        function handleGetJoke() {
            getJoke();
        }



        function handleJoke(urlRoute: string, method: string, body: any) {
            console.log(urlRoute, method, body) 
            fetch(`http://localhost:3000/api/jokes/${urlRoute}`, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body) 
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    getJoke()
                })
                .catch(error => {
                    console.log(error)
                })
        }
        useEffect(() => {
            getJoke()
        }, [])
        return { joke, loading, error, handleGetJoke, handleJoke }
    } catch (error: any) {
        return {
            joke: { joke: '', _id: '' },
            loading: false,
            error: error.message,
            handleGetJoke: () => { },
            handleJoke: () => { }
        }
    }
}