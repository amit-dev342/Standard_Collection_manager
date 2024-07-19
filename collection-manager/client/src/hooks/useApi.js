import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

const useApi = (url, initialData = null) => {
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(BASE_URL+url);
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        if (url) {
            fetchData();
        }

    }, [url]);

    return { data, loading, error };
};

export default useApi;
