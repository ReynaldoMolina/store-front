import React from 'react';

function useGetData(url) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    console.log('Efecto useGetData');
    if (url != null) {
      setTimeout(() => {
        try {
          fetch(url)
            .then(response => response.json())
            .then(apidata => setData(apidata));
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
          console.log('loading after effect', loading);
        }
      },5000);
    }
  }, [loading, url]);

  return { data, loading, error };
}

export { useGetData };