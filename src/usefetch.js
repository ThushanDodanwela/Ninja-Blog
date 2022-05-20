import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //settimeout done only for show the loading . Dont do this in real applications
    setTimeout(() => {
      fetch(url)
        .then((Res) => {
          if (!Res.ok) {
            throw Error("ERROR 404");
          }
          return Res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((e) => {
          setIsPending(false);
          setError(e.message);
        });
    }, 1000);
  });
  return { data, isPending, error };
};

export default useFetch;
