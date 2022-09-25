import {useState, useEffect, useCallback} from 'react';
import {IError} from "../types";

type State<T> = [boolean, T, IError[]]

export function useFetch<T = unknown>(query: string): State<T> {
    const [status, setStatus] = useState<boolean>(false);
    const [data, setData] = useState<T>({} as T);
    const [error, setError] = useState<IError[]>({} as IError[]);

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
            setError(data);
        }
        setData(data);
        setStatus(true);
    }, [query])

    useEffect(() => {
        if (!query) return;
        fetchData()
    }, [fetchData]);

    return [status, data, error]
}