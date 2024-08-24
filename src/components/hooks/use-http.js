import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async function (requestConfig,applyData) {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        requestConfig.url,{
            method:requestConfig.method ? requestConfig.method : "GET",
            body:requestConfig.body ? JSON.stringify(requestConfig.body) : null,
            headers:requestConfig.headers ? requestConfig.headers : {},
        }
      );

      if (response.status !== 200) {
        throw new Error("Something went wrong!"); //bu fırlatılanı aşağı catchde yakalar
      }
      const data = await response.json();
      
      applyData(data); //buranın amacı get için format dönüşümünü sağlamak image ismi farklıydı ya da amount yoktu
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  return { 
    error:error,
    isLoading:isLoading,
    sendRequest: sendRequest };
};
export default useHttp;
