import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
export const ViewUserType = () => {
    useEffect(() => {
        getAllUsers();
    }, [])
    const [users, setUsers] = useState([]);
    const getAllUsers = async () => {
        await axios.get("http://localhost:9999/userType").then(res=>{
            console.log(res.data);

        }).catch(err=>{
            console.log(err);
        })
    }
    const deleteuser = async(id) =>{

        await axios.delete("http://localhost:8080/userType/"+id).then(res=>{
        if(res.status ===200){
            alert("Doctor Deleted Successfully")
            getAllUsers();
        }
        console.log(res)
        })
      }
    return (

        <div>
             <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">UserTypeId</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {
                users.map(user=>{
                    return(
                        <tr>
                            <th scope="row">{user.id}</th>
                            <td>{user.UserTypeName}</td>
                            <td>{user.UserTypeId}</td>
                            <td><button onClick={()=>deleteuser(user.id)}>Delete</button></td>
                        </tr>
                    )
                })
            }
        </tbody>
        </table>
        </div>
    )
}
