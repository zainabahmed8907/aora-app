import { useEffect, useState } from "react";

const [data, setData] = useState([]);
const [isLoading, setLoading] = useState(true);
export const useAppwrite = (func) => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const allPosts = await func();
      setData(allPosts);
    } catch (e) {
      Alert.alert("Error", e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const refetch=()=>fetchData();

  return {data, isLoading, refetch}

};
