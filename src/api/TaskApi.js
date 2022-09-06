import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import "./table.css";
export const TaskApi = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(
      
    );
    const [city, setCity] = useState("");
    const [table, setTable] = useState(false);

    const fetchApi = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather&appid=65372150fa8fd3b75d38644c2d01abb1`;
        const response = await fetch(url);
        console.log(response);

        setTable(true);
    };

    return (
        <>
            <marquee>Welcome to Weather Customised Api</marquee>

            <form >
                <div class="form-group">
                    <label for="formGroupExampleInput">city</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Country" name='city'{...register("city")} />
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">State</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" name='state'{...register("state")} />
                </div>
                <input type="submit" value="Submit" onClick={fetchApi}></input>
            </form>

            <input onChange={(event) => setCity(event.target.value)} />
            
            <table className={table ? "display" : "none"}>{register.city}</table>
            <table className={table ? "display" : "none"}>{register.state}</table>
            
        </>
    )
}
