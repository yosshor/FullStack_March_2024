import React, { useEffect, useState } from 'react';
import './Cat.scss';

const Cat = () => {
    const [urls, setUrls] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const apiKey = import.meta.env.VITE_CAT_API_KEY
        if (!apiKey) {
            console.error("API key is missing. Please set REACT_APP_CAT_API_KEY in your environment.");
            setError("API key is missing.");
            return;
        }

        const headers = new Headers({
            "Content-Type": "application/json",
            "x-api-key": apiKey,
        });

        const requestOptions = {
            method: 'GET',
            headers,
            redirect: 'follow' as RequestRedirect,
        };

        fetch('https://api.thecatapi.com/v1/images/search?limit=12', requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const urls = data.map((cat: any) => cat.url);
                setUrls(urls);
            })
            .catch(error => {
                console.error("Failed to fetch cat images:", error);
                setError("Failed to fetch cat images. Please try again later.");
            });
    }, []);

    return (
        <div className='cats'>
            {error && <p className="error">{error}</p>}
            {urls.length === 0 && !error && <p>Loading...</p>}
            {urls.map((cat, index) => (
                <img className='cat' key={index} src={cat} alt="cat" />
            ))}
        </div>
    );
};

export default Cat;
