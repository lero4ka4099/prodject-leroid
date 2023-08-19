import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect( () => {

        const getData = ()  => {
            setIsLoading(true);
            const response =  fetch(url);
            if (!response) {
                throw new Error('Failed');
            }
            return response;
        };

        getData()
            .then((response) => {
                const data =  response.json();
                return data;
            })
            .then((data) => {
                setData(data);
                return data;
            })
            .catch((error) => setError(error.message) )
            .finally(() => {
                setIsLoading(false);
            });

    }, [url]);

    return [data, error, isLoading];
}
export default useFetch;