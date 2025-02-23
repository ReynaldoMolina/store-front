import React from "react";
import { DataContext } from "../Context/DataContext";

function useGetData(url) {
  const { isUpdating, setIsUpdating } = React.useContext(DataContext);
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
        setIsUpdating(false);
      }
    };

    fetchData();
  }, [url, isUpdating]);

  return { data, isLoading, error };
}

export { useGetData };
