import React, { useEffect, useState } from "react";

interface UseJokeOutput {
    joke: { joke: string, _id: string };
    jokes : { joke: string, _id: string }[];
    loading: boolean;
    error: any;
    handleGetRandomJoke: () => void;
    handleGetAllJokes: () => void;
    handleJoke: (urlRoute: string, method: string, body: any) => void;
}


export const useJoke = (): UseJokeOutput => {
    try {

        const [joke, setJoke] = useState<{ joke: string, _id: string }>({ joke: '', _id: '' });
        const [jokes, setJokes] = useState<{ joke: string, _id: string }[]>([]);
        const [loading, setLoading] = useState<boolean>(true);
        const [error, setError] = useState();

        function getRandomJoke() {
            try {
                fetch('http://localhost:3000/api/jokes/get-random-joke')
                    .then(response => response.json())
                    .then(data => {
                        if(data === null) {
                            data = { joke: 'Joke Not Found', _id: '' }
                        }
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

        function getAllJokes() {
            try {
                fetch('http://localhost:3000/api/jokes/get-all-jokes')
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        setJokes(data.jokes)
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

        function handleGetRandomJoke() {
            getRandomJoke();
        }

        function handleGetAllJokes() {
            getAllJokes();
        }

        function handleJoke(urlRoute: string, method: string, body: any) {
            console.log(urlRoute, method, body) 
            fetch(`http://localhost:3000/api/jokes/${urlRoute}`, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Include cookies with the request
                body: JSON.stringify(body) 
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    getAllJokes()
                })
                .catch(error => {
                    console.log(error)
                })
        }
        useEffect(() => {
            getAllJokes()
        }, [])
        return { joke, jokes, loading, error, handleGetRandomJoke,handleGetAllJokes, handleJoke }
    } catch (error: any) {
        return {
            joke: { joke: '', _id: '' },
            jokes : [],
            loading: false,
            error: error.message,
            handleGetRandomJoke: () => { },
            handleGetAllJokes: () => { },
            handleJoke: () => { }
        }
    }
}