import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";

const useGet = (url) => {
    const [ loading, setLoading ] = useState(false);
    const gotData = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const getData = async () => {
        setLoading(true);
        const getUrl = `https://rocky-bastion-69611.herokuapp.com/${url}`;
        console.log(getUrl);
        // const getUrl = `http://localhost:5000/${url}`;
        const response  = await axios.get(getUrl).catch((err) => {
            console.log('Error is : ', err);
        });
        dispatch(setProducts(response.data));;
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, [url]);

    return { loading, gotData };
};

export default useGet;