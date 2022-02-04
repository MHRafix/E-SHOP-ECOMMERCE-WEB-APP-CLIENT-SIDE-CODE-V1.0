import axios from "axios";
import { useState } from "react";

const usePost = () => {
    const [ posting, setPosting ] = useState(false);
    const [ success, setSuccess ] = useState(false);

    const handlePost = (data, url) => {
        setPosting(true);
        const postUrl = `https://rocky-bastion-69611.herokuapp.com/${url}`;
        // const postUrl = `http://localhost:5000/${url}`;
        axios.post(postUrl, data)
        .then(res => {
          if(res.data.insertedId){
            setPosting(false);
            setSuccess(true);
           }
        })
  
  };

    return { handlePost, posting, success };
};

export default usePost;