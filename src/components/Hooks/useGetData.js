import React from "react";

function useGetData(url) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const apiData = await response.json();
        setData(apiData);
      } catch (err) {
        console.log('Error ocurred when fetching data', err);
      }
    };

    fetchData();
  }, [url]);

  return data;
}

export { useGetData };
