import React from "react";

function useGetData(url) {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const apiData = await response.json();
        setData(apiData);
      } catch (err) {
        console.log('Error ocurred when fetching data', err);
        setError(true);
      }
      finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
}

export { useGetData };
