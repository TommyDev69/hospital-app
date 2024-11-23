import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [country, setCountry] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() =>{
        fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw new Error('The fetch data is not ok')
            }
            return res.json()
        })

        .then((country_data) =>{
            setCountry(country_data)
            setLoading(false)
        })
        .catch((err) =>{
            setError(err.message)
        })
    },[url])
    return{country, loading, error};
}
 
export default useFetch;