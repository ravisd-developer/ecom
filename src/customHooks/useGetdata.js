import React, { useEffect, useState } from "react";

const useGetdata = (query) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!query) return;
        const fetchData = async () => {
            const response = await  fetch(`https://fakestoreapi.com/${query}`)
            const data = await response.json();
            setData(data);
            setLoading(false)
        };
        fetchData();
    }, [query]);

    return { loading, data };
};

export default useGetdata;