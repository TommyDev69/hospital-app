import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [Doctors, setDoctors] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make sure the URL is correct before calling fetch
    console.log("Fetching from URL:", url);

    fetch(url)
      .then((res) => {
        console.log("res status:", res.status);
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.statusText}`);
        }
        return res.json();
      })
      .then((result) => {
        console.log("Fetched Doctors:", result);  // Debugging the result
        setDoctors(result);
        setLoading(false);
    })
    .catch((err) => {
        console.error("Error occurred while fetching:", err);
        setError(err);
    })
    
  }, [url]);

  return { Doctors, loading, error };
};

export default useFetch;
