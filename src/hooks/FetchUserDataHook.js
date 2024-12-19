import axios from "axios";
import { useEffect, useState } from "react";

const useFetchUserDataHook = (username) => {
  const [data, setData] = useState();
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    const fetchData = async () => {
      setStatus("Loading");
      try {
        const response = await axios.get(
          process.env.REACT_APP_SERVER_BASE_URL +
            "/v1/getGridData?username=" +
            username
        );
        setData(response.data);
        setStatus("Success");
      } catch (error) {
        setStatus("Error");
      }
    };

    fetchData();
  }, [username]);

  return { data, status };
};

export default useFetchUserDataHook;
