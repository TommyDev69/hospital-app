import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [Patient, setPatient] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching from URL:", url);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Data does not exist");
        }
        return res.json();
      })
      .then((patientRecords) => {
        console.log(patientRecords);
        setPatient(patientRecords);
        setPending(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [url]);

  return { Patient, pending, error };
};

export default useFetch;
