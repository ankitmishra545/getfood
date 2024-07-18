import { useEffect, useState } from "react"

const useFetchData = (api) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const fetchedData = await fetch(api);

        const json = await fetchedData.json();

        setData(json.data);
    }

    return data;
};

export default useFetchData;