import { useEffect, useState } from "react";
import { DogModel } from "./DogModel";
import { set } from "mongoose";


// view-model
interface UseDogOutput {
    dog: DogModel | null;
    error: string | null;
    loading: boolean;
    handleGetDog: () => void;
}

export function useDog(): UseDogOutput {
    try {

        const [dog, setDog] = useState<DogModel | null>(null);
        const [error, setError] = useState<string | null>(null);
        const [loading, setLoading] = useState<boolean>(false);

        useEffect(() => {
            getDog();
        }, []);

        function getDog() {
            setLoading(true);
            fetch("https://dog.ceo/api/breeds/image/random")
                .then(response => response.json())
                .then(data => {
                    setDog(data);
                    setLoading(false);
                }).catch(error => {
                    setError(error.message);
                });
        }

        function handleGetDog() {
            getDog();
        }

        return {
            dog,
            error,
            loading,
            handleGetDog
        }
    } catch (error: any) {
        return {
            dog: null,
            error: error.message,
            loading: false,
            handleGetDog: () => { }

        }

    }
}
