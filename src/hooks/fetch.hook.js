import axios from "axios";
import { useEffect, useState } from 'react';
// import { getEmail } from "../helper/helper";

axios.defaults.baseURL = "http://localhost:5050";

//custom hook
export default function useFetch(query){
    const [ getData, setData ] = useState({ isLoading : false, apiData : undefined, status : null, serverError : null}) 

    useEffect(() => {

        const fetchData = async () => {
            try {
                setData( prev => ( { ...prev, isLoading: true }));
                
                // const { email } = !query ? await getEmail() : '' ;
                const email = localStorage.getItem('email');
                const {data, status} =  await axios.get(`api/user/${email}`);

                if(data){
                    setData( prev => ( { ...prev, isLoading: false }));
                    setData( prev => ( { ...prev, apiData: data, status: status }));
                }


            } catch (error) {
                setData( prev => ( { ...prev, isLoading: false, serverError: error }))
            }
        };

        fetchData();
    }, [query]);

    return [ getData, setData ];
}