import { err } from "inngest/types";
import { useState } from "react";
import { toast } from "sonner";

const useFetch = (cb) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(null);

  const fn = async(...args)=>{
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args);
      setData(response);
      setError(null);
      return response;
    } catch (error) {
      setError(error);
      
      toast.error(error.message);
      
    } finally{
        setLoading(false);
    }

  };
    return { data, loading,  error, fn ,setData};

};

export default useFetch;