import React from 'react'
import axios from 'axios';
import { useState } from 'react';

export const RapidApi = () => {

    const [wether, setwether] = useState("")
    const [flag, setflag] = useState(false)
    const getWeather = async () => {
        await axios.get("https://aerisweather1.p.rapidapi.com/observations/mumbai,india", {
            headers: {
                "X-RapidAPI-Key": "984b270f5emsh0c1484c12f7f7c6p112b1djsnf52a4b622769",
                "X-RapidAPI-Host": "aerisweather1.p.rapidapi.com"
            }
        }).then(res => {
       
            if (res.data.status == true) {
                setwether(res.data);
                console.log(wether);
                setflag(true)
            }
        }).catch(err => {
            console.log(err);
        })

    }
    console.log(wether);
    return (

        <div>
           
            <button onClick={getWeather}>Get Weather</button>
            {
                flag ? <p>{wether.response.place.name}</p> : null
            }
   
        </div>
    )
}
