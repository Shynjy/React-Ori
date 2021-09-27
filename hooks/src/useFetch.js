import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, option) => {
    let response, json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, option);
      json = await response.json();
    } catch (error) {
      setData(null);
      setError('error');
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return {
    data,
    error,
    loading,
    request,
  };
};

export default useFetch;
