import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [Countries, setCountry] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // const fetch = require('node-fetch');  // Import node-fetch
    useEffect(() =>{
        console.log(url);
        
        fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw new Error('The fetch data is not ok')
            }
            return res.json()
        })

        .then((country_data) =>{
            console.log('data of all countries', country_data);
            
            setCountry(country_data)
            setLoading(false)
        })
        .catch((err) =>{
            setError(err.message)
        })

        // Cleanup function in case the component unmounts
        return () => {
            setCountry(null);
            setLoading(false);
            setError(null);
        };

    },[url])
    return{Countries, loading, error};
}
 
export default useFetch;