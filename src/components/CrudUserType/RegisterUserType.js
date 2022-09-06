import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
export const RegisterUserType = () => {
    var {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const submit = async (userTypeName) => {
        console.log("utype",userTypeName);
        
        await axios.post("http://localhost:9999/userType",userTypeName).then(res => {
            if (res.status == 200) {
                //alert("UserType Added Succesfully");
                console.log(res)
            }
            else {
                console.log(res);
            }
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div class="form-group">
                    <label for="exampleInputEmail1">UserTypeName</label>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter Name"
                        {...register("userTypeName")}
                    />
                </div>
                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )
}
