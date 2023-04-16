import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(undefined);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw Error(`couldn't fetch data from ${url}`);
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
        setError("")
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  });

  return {data, error, isPending};
};

export default useFetch;
