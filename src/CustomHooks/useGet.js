import axios from "axios";
import { useEffect, useState } from "react";

const useGet = (url) => {
    const [ gotData, setGotData ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    
    const getData = async () => {
        setLoading(true);
        const response  = await axios.get(url).catch((err) => {
            console.log('Error is : ', err);
        });
        setGotData(response.data);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, []);

    return {gotData, loading};
};

export default useGet;