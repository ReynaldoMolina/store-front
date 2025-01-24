import React from "react";
import { DataContext } from "./DataContext";

function useGetData(url) {
  const { setIsLoading } = React.useContext(DataContext);

  React.useEffect(() => {
    setIsLoading(true);
    console.log('Efecto useGetData');
    if (menuOption.url != null) {
      try {
        fetch(menuOption.url)
          .then(response => response.json())
          .then(apidata => setData(apidata));
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
        setIsUpdating(false);
      }
    }
  }, [menuOption, isUpdating]);
}

export { useGetData };