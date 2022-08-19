import React from 'react'

export const EmployeeList = (props) => {
  
  
    return (
    <div>EmployeeList
    {
        props.employee.map(employee=>{

            <tr>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>{employee.isActive}</td>
            </tr>
        })
    }
    </div>
  )
}
