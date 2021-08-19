// hooks/UseFetch.js

import {useState, useEffect} from 'react';

const UseFetch = (initialUrl) => {
  // create state variables
  const [dataF, setDataF] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    if(!url) return;
    setIsLoading(true);
    // clear old search
    setDataF(null);
    setError(null);

    fetch(url)
        .then((response) => response.json())
        .then((dataF) => {

            // error handling for nonexistent data
            setIsLoading(false);
            if(dataF.cod >= 400) {
                setError(dataF.message);
                return;
            }
            setDataF(dataF);
        })
        .catch((error) => {
            setIsLoading(false);
            setError(error);
        });
  }, [url]);

  return { dataF, error, isLoading, setUrl };
};

export default UseFetch;