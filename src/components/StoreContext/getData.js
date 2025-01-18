import React from 'react';

function useGetData(url) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    try {
      fetch(url)
        .then(response => response.json())
        .then(fetchedData => setData(fetchedData));
      setLoading(false);
    } catch (error) {
      // console.log(error);
      setError(true);
    }
  }, []);

  return {data, loading, error};
}

export { useGetData };