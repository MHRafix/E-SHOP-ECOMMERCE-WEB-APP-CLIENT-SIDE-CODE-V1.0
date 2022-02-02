import axios from "axios";
import { useEffect, useState } from "react";

const useGet = (url) => {
    const [ gotData, setGotData ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    
    const getData = async () => {
        setLoading(true);
        const getUrl = `https://rocky-bastion-69611.herokuapp.com/${url}`;
        console.log(getUrl);
        const response  = await axios.get(getUrl).catch((err) => {
            console.log('Error is : ', err);
        });
        setGotData(response.data);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, [url]);

    return {gotData, loading};
};

export default useGet;