import {useState, useEffect} from 'react';


export function useFetch(query: string) {
    const [status, setStatus] = useState<Boolean>(false);
    const [data, setData] = useState<Array<any>>([]);
    const pluginData = window['themeoptionsApiNonce'];
    useEffect(() => {
        if (!query) return;
        const fetchData = async () => {
            const response = await fetch(
                `${pluginData.root}/theme-options/${query}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-WP-Nonce': pluginData.nonce
                    },
                }
            );
            const data = await response.json();
            setData(data);
            setStatus(true);
        };

        fetchData();
    }, [query]);

    return [status, data]
}