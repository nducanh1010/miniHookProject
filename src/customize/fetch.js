import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    try {
      async function fetchData() {
        // You can await here
        let res = await axios.get(url);
        let data = res && res.data ? res.data : [];
        if (data && data.length > 0) {
          data.map((item) => {
            item.Date = moment(item.Date).format("DD/MM/YYYY");
            return item;
          });
          data = data.reverse();
        }
        setLoading(false);
        setData(data);
        setIsError(false);
        // ...
      }
      fetchData();
    } catch (error) {
      setTimeout(() => {
        setIsError(true);
        setLoading(false);
      }, 3000);
    }
  }, [url]);
  return {
    data,
    loading,
    isError,
  };
};
export default useFetch;
