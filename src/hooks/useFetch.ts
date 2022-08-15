import {useState, useEffect, useCallback} from 'react';

export function useFetch(query: string) {
    const [status, setStatus] = useState<boolean>(false);
    const [data, setData] = useState<Array<any>>([]);
    const [error, setError] = useState<boolean>(false);
    const pluginData = window['themeoptionsApiNonce'];

    const fetchData = useCallback(async () => {
        const response = await fetch(
            `${pluginData.root}theme-options/${query}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': pluginData.nonce
                },
            }
        );
        const data = await response.json();
        if (response.status === 500) {
            setError(true)
        }
        setData(data);
        setStatus(true);
    }, [query])

    useEffect(() => {
        if (!query) return;
        fetchData();
    }, [fetchData]);

    return [status, data, error]
}