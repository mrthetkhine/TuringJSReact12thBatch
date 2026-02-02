import {useEffect, useState} from "react";

export default function useFetchData(url)
{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    useEffect(()=>{
        console.log('hook useFetchData effect');
        //const [something,setSomething] = useState(null);
        setLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(json => {
                setData(json);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
            });

    },[]);
    return [error, loading,data];
}