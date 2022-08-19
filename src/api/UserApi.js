import React, { useState } from 'react'
import axios, { Axios } from 'axios'
export const UserApi = () => {
    const   [isLoading, setIsLoading] = useState(false)
    // const [first, setfirst] = useState(second)

    const getApi = async () => {

        await axios.get("https://reqres.in/api/users?page=2").then(res => {
            alert("Get Api called");
            console.log(res.data.data[0].first_name);
        })


    }

    const postApi = async () => {        
        var data = {
            "name": "shivam",
            "job": "developer"
        }

        setIsLoading(true)
        await axios.post("https://reqres.in/api/users", data).then(res => {
        
        console.log(res.data);

        })
        setIsLoading(false)
    }
    
    const deleteApi = async () => {

        await axios.delete("https://reqres.in/api/users/2").then(res => {
            alert("Delete Api Called");
            console.log(res);
            if (res.status == 204) {
                console.log("In Delete");
            }

        })
    }
    const updateApi = async () => {

        var updateData = {
            "name": "ram",
            "job": "cricketer"

        }

        await axios.put("https://reqres.in/api/users/2", updateData).then(res => {
            console.log(res.data);
        })
    }


    return (
        <div>

            <button onClick={postApi} disabled={isLoading}>Post</button>
            <button onClick={deleteApi}>DELETE API</button>
            <button onClick={updateApi}>UPDATE API</button>
        </div>
    )
}
