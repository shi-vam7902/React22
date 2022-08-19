import React from 'react'
import "./LoadingSpinner.css"

export const LoadingSpinner = () => {
    

    const postApi = async () => {

        var data = {
            "name": "shivam",
            "job": "developer"

        }
        setIsLoading(true)
        await axios.post("https://reqres.in/api/users", data).then(res => {


            console.log(res.data);
            setIsLoading(false)

        })
    }

    return (

        <div className='spinner-conatiner'>
            <div className='loading-spinner'>
                <button onClick={postApi}></button>
            </div>
        </div>
    )
}
